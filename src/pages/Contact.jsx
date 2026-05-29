import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-badge">
            Contact Us
          </span>

          <h1 className="page-title">
            Get Professional Financial &
            Compliance Assistance
          </h1>

          <p className="about-intro">
            Connect with us for Income Tax,
            GST, Company Registration,
            Accounting and Compliance services.
          </p>

        </motion.div>

        {/* Contact Grid */}
        <div className="contact-grid">

          {/* Left Side */}
          <motion.div
            className="contact-info-card"

            initial={{ opacity: 0, x: -40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}
          >

            <h3>
              Office Details
            </h3>

            <div className="contact-item">
              <strong>Email</strong>
              <p>caomkark@outlook.com</p>
            </div>

            <div className="contact-item">
              <strong>Phone</strong>
              <p>+91 8446486829</p>
            </div>

            <div className="contact-item">
              <strong>Business Hours</strong>
              <p>Monday - Saturday</p>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <p>Pune, Maharashtra, India</p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918446486829"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}
          >

            <form
              action="https://formspree.io/f/mbdbbrgk"
              method="POST"
              className="contact-form"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
              />

              <select
                name="service"
                required
              >

                <option value="">
                  Select Service
                </option>

                <option>
                  Income Tax
                </option>

                <option>
                  GST
                </option>

                <option>
                  Company Registration
                </option>

                <option>
                  Accounting
                </option>

                <option>
                  Loan Assistance
                </option>

              </select>

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                className="primary-btn"
              >
                Submit Inquiry
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
