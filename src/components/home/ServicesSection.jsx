import { motion } from 'framer-motion'

const services = [
  {
    title: 'Financial Accounting',
    items: [
      'Book Keeping',
      'Projected Financial Statements',
      'Reports',
      'CMA Data',
    ],
  },

  {
    title: 'Income Tax',
    items: [
      'TAN Registration',
      'TDS Returns',
      'Filing of Income Tax Returns',
      'Handling Income Tax Notices',
    ],
  },

  {
    title: 'GST',
    items: [
      'GST Registration',
      'GST Returns',
      'GST Compliances',
    ],
  },

  {
    title: 'Registrations / Incorporations',
    items: [
      'Private Limited Company',
      'Limited Liability Partnership',
      'Partnership Firm (ROF)',
      'Leave & License Agreements',
      'Gift Deeds',
    ],
  },

  {
    title: 'Assistance for Finance',
    items: [
      'Project Loan',
      'Term Loan',
      'Cash Credit Working Capital Loan',
      'Home Loan',
      'Personal Loan',
    ],
  },

  {
    title: 'Digital Signature Certificate',
    items: [
      'Class 3 Digital Signature Certificates (DSC)',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">

        <span className="section-badge">
          Our Services
        </span>

        <h2 className="section-title">
          Professional Financial & Compliance Services
        </h2>

        <div className="services-grid">

          {services.map((service, index) => (

            <motion.div
              key={index}
              className="service-card"

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <h3>{service.title}</h3>

              <ul>

                {service.items.map((item, i) => (
                  <li key={i}>
                    ✓ {item}
                  </li>
                ))}

              </ul>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  )
}
