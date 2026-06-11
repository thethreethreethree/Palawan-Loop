import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import { stops, startPoint } from '../data/tour.js'

/**
 * Interactive route map: Puerto Princesa → Sabang → Port Barton → San Vicente
 * → El Nido. Uses custom DivIcon pins so we never hit Leaflet's broken
 * default-marker-icon problem under a bundler.
 */

function makePin({ label, active = false, start = false }) {
  const bg = start ? '#0f2233' : active ? '#ff5a10' : '#34a8f4'
  const size = active || start ? 40 : 34
  return L.divIcon({
    className: 'pl-pin',
    html: `<div style="
        width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);background:${bg};
        box-shadow:0 4px 12px rgba(15,34,51,.35);
        display:flex;align-items:center;justify-content:center;border:3px solid #fff;">
        <span style="transform:rotate(45deg);color:#fff;font-weight:800;font-size:14px;font-family:Inter,sans-serif;">${label}</span>
      </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  })
}

function FitToRoute({ points }) {
  const map = useMap()
  useEffect(() => {
    if (points.length) {
      map.fitBounds(L.latLngBounds(points), { padding: [50, 50] })
    }
  }, [map, points])
  return null
}

export default function RouteMap({ height = 'h-[460px]', activeKey = null }) {
  const allPoints = useMemo(() => [startPoint.coords, ...stops.map((s) => s.coords)], [])

  return (
    <div className={`w-full ${height} overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-card`}>
      <MapContainer
        center={[10.4, 119.1]}
        zoom={9}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ background: '#dbf0ff' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <Polyline
          positions={allPoints}
          pathOptions={{ color: '#1d8be0', weight: 4, opacity: 0.85, dashArray: '2 10', lineCap: 'round' }}
        />

        <Marker position={startPoint.coords} icon={makePin({ label: '★', start: true })}>
          <Popup>
            <strong>{startPoint.name}</strong>
            <br />
            <span style={{ color: '#1a6fb5' }}>{startPoint.region}</span>
            <br />
            {startPoint.blurb}
          </Popup>
        </Marker>

        {stops.map((s) => (
          <Marker
            key={s.key}
            position={s.coords}
            icon={makePin({ label: s.day, active: activeKey === s.key })}
          >
            <Popup>
              <strong>
                Day {s.day} · {s.name}
              </strong>
              <br />
              <span style={{ color: '#1a6fb5' }}>{s.region}</span>
              <br />
              {s.tagline}
            </Popup>
          </Marker>
        ))}

        <FitToRoute points={allPoints} />
      </MapContainer>
    </div>
  )
}
