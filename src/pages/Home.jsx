
import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
<section className="section about-home-section">
  <div className="container">

    <span className="section-badge">
      About Our Firm
    </span>

    <h2 className="section-title">
      OMKAR RAVINDRA KULKARNI & ASSOCIATES
    </h2>

    <p className="about-intro">
      Welcome to OMKAR RAVINDRA KULKARNI & ASSOCIATES,
      Chartered Accountants — your trusted partner
      in financial excellence.
    </p>

    <div className="about-grid">

      <div className="about-card">
        <h3>Vision</h3>

        <p>
          Our vision is to be the most highly respected
          professional firm where we seek to build strong
          and lasting relationships with our clients by
          maintaining the highest levels of integrity
          and professionalism.
        </p>
      </div>

      <div className="about-card">
        <h3>Mission Statement</h3>

        <p>
          We believe knowledge is most essential and
          important in profession. Our mission is to
          become a powerhouse in accounting and fiscal
          laws and share our knowledge with all.
        </p>
      </div>

    </div>

    <div className="firm-description">

      <h3>About Firm</h3>

      <p>
        Under the leadership of CA. Omkar Ravindra
        Kulkarni, a qualified Chartered Accountant
        with B.Com and ACA qualifications, we provide
        expertise-driven financial services.
      </p>

      <p>
        We offer services in Compliance Audit &
        Assurance, Internal Audit, Direct & Indirect
        Taxation, Bank Audit, Management Consultancy
        and outsourced accounting services.
      </p>

      <p>
        In line with our mission statement, we
        continuously strive to acquire more knowledge
        in ever-changing laws and regulations.
      </p>

    </div>

  </div>
</section>


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
