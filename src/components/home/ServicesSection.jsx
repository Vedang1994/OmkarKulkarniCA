
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
            <div key={index} className="card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
