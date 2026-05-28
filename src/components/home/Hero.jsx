import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">
            Trusted CA Services in India
          </span>

          <h1>
            Simplifying Taxes & Compliance for Individuals and Businesses
          </h1>

          <p>
            Professional CA services for ITR filing, GST registration,
            company incorporation, tax planning and startup compliance.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              File Your ITR
            </button>

            <button className="secondary-btn">
              Book Consultation
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>Why Choose Us?</h3>

          <ul>
            <li>✔ Experienced CA Professionals</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ Fast Turnaround Time</li>
            <li>✔ Startup Friendly Guidance</li>
            <li>✔ Online Consultation Support</li>
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
