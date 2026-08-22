import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import StickyContact from './components/StickyContact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import DemoBanner from './components/DemoBanner.jsx'

import Home from './pages/Home.jsx'
import Tour from './pages/Tour.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Booking from './pages/Booking.jsx'
import BookingConfirmation from './pages/BookingConfirmation.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {/* Above the navbar so it is the first thing on every route, and so it
          cannot be scrolled past before the claims below it are read. */}
      <DemoBanner />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingConfirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyContact />
    </div>
  )
}
