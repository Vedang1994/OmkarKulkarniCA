import { motion } from 'framer-motion'

const services = [
  {
    title: 'Income Tax Filing',
    desc: 'ITR filing for salaried employees, freelancers and businesses.',
  },
  {
    title: 'GST Services',
    desc: 'GST registration, filing and notice handling.',
  },
  {
    title: 'Company Registration',
    desc: 'Pvt Ltd, LLP and startup incorporation services.',
  },
  {
    title: 'Accounting & Payroll',
    desc: 'Bookkeeping, payroll and TDS compliance.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="card-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card"

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
