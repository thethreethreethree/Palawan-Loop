import PageHero from '../components/PageHero.jsx'
import Section from '../components/Section.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import { images } from '../data/images.js'

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Loop, in pictures."
        subtitle="Lagoons, switchbacks, bonfires, and the crew you’ll meet along the way."
        image={images.ctaBanner}
        label="Palawan gallery"
      />
      <Section>
        <GalleryGrid />
      </Section>
      <CTASection />
    </>
  )
}
