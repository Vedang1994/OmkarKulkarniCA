import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section about-page">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-badge">
            About Our Firm
          </span>

          <h1 className="page-title">
            OMKAR RAVINDRA KULKARNI & ASSOCIATES
          </h1>

          <p className="about-intro">
            Trusted Chartered Accountants delivering
            professional accounting, taxation, audit,
            compliance and financial advisory services.
          </p>

        </motion.div>

        {/* About Firm */}
        <motion.div
          className="content-box"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}
        >

          <h2>About Firm</h2>

          <p>
            Welcome to OMKAR RAVINDRA KULKARNI &
            ASSOCIATES, Chartered Accountants —
            your trusted partner in financial excellence.
          </p>

          <p>
            Under the leadership of CA. Omkar Ravindra
            Kulkarni, a qualified Chartered Accountant
            with B.Com and ACA qualifications, we bring
            a wealth of expertise and commitment to
            delivering top-notch financial services.
          </p>

          <p>
            We provide services in Compliance Audit &
            Assurance, Internal Audit, Direct & Indirect
            Taxation, Bank Audit, Management Consultancy
            and outsourced Accounting services.
          </p>

          <p>
            In line with our Mission Statement, we
            continuously strive to acquire deeper
            knowledge in ever-changing laws and regulations.
          </p>

          <div className="info-grid">

            <div className="info-card">
              <h4>Firm Registration Number</h4>
              <p>164756W</p>
            </div>

            <div className="info-card">
              <h4>ICAI Membership Number</h4>
              <p>622702</p>
            </div>

          </div>

        </motion.div>

        {/* Individual Profile */}
        <motion.div
          className="content-box"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.7 }}
        >

          <h2>Individual Profile</h2>

          <p>
            CA. Omkar Kulkarni’s professional journey
            began with a strong 3-year articleship
            with Mulay & Associates, Pune — a renowned
            practitioner in Income Tax.
          </p>

          <p>
            Having completed his Chartered Accountant
            qualification in May 2023, he has gained
            diverse professional exposure across:
          </p>

          <ul className="styled-list">
            <li>Income Tax</li>
            <li>GST</li>
            <li>Internal Audits of Banks</li>
            <li>Stock Audits</li>
            <li>Taxation</li>
            <li>Business Consultancy</li>
          </ul>

        </motion.div>

        {/* Legacy & Strength */}
        <motion.div
          className="content-box"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8 }}
        >

          <h2>Legacy & Collaborative Strength</h2>

          <p>
            Our firm is built on a strong foundation of
            professional excellence and legal expertise.
          </p>

          <p>
            We are proudly associated with
            CS Ravindra Kulkarni & Associates,
            a premier Company Secretaries firm with
            over 20 years of specialized experience
            in Company Law and corporate compliance.
          </p>

          <p>
            This collaboration enables us to provide
            holistic financial and compliance solutions,
            combining accounting excellence with deep
            legal and regulatory expertise.
          </p>

        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          className="content-box"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.9 }}
        >

          <h2>Professional Experience Highlights</h2>

          <div className="experience-item">

            <h3>
              OMKAR RAVINDRA KULKARNI & ASSOCIATES
            </h3>

            <ul className="styled-list">
              <li>
                Associated with Kumar Mulay &
                Associates for Statutory and Tax Audits.
              </li>

              <li>
                Handling clients from Manufacturing,
                Service, Real Estate and Trading sectors.
              </li>

              <li>
                Handling GST, Accounting and
                Income Tax assignments.
              </li>

              <li>
                Associated with CS Ravindra Kulkarni &
                Associates for Company and LLP
                registration and compliance work.
              </li>
            </ul>

          </div>

          <div className="experience-item">

            <h3>
              National Stock Exchange of India
            </h3>

            <ul className="styled-list">
              <li>
                Managed treasury operations for NSE
                and group companies.
              </li>

              <li>
                Assisted in Statutory, Internal and
                System-based audits.
              </li>

              <li>
                Assisted in preparation of quarterly
                and annual financial reports.
              </li>

              <li>
                Managed SEBI compliance and reporting.
              </li>

              <li>
                Worked on ERP automation and migration.
              </li>
            </ul>

          </div>

          <div className="experience-item">

            <h3>
              Articleship – Kumar Mulay & Associates
            </h3>

            <ul className="styled-list">
              <li>
                Assisted in preparation and finalization
                of financial statements.
              </li>

              <li>
                Conducted statutory and tax audits.
              </li>

              <li>
                Filed Income Tax returns for companies,
                firms and salaried individuals.
              </li>

              <li>
                Prepared and filed TDS and GST returns.
              </li>

              <li>
                Independently handled complex TDS
                correction assignments.
              </li>
            </ul>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
