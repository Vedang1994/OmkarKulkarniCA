import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="section light">
      <div className="container">
        <motion.h2
          className="section-title"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="card-grid">

          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="card"

              initial={{ opacity: 0, scale: 0.9 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <p>
                “Professional, responsive and very easy to work with.”
              </p>

              <strong>
                Client {index + 1}
              </strong>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
