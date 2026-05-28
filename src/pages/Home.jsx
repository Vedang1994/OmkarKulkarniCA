
import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Tax Tips</h2>

          <div className="card-grid">
            <div className="card">
              <h3>Save Tax Under 80C</h3>
              <p>
                Invest early under Section 80C instead of waiting till March.
              </p>
            </div>

            <div className="card">
              <h3>Reconcile AIS</h3>
              <p>
                Always reconcile AIS and Form 26AS before filing ITR.
              </p>
            </div>

            <div className="card">
              <h3>Separate Business Accounts</h3>
              <p>
                Maintain separate bank accounts for business transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  )
}
