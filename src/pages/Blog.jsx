import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const blogs = [
  {
    category: 'Income Tax',

    slug: 'tax-saving-tips',

    title:
      'Tax Saving Tips for Salaried Employees in India',

    desc:
      'Learn how to maximize deductions under Section 80C, 80D, HRA and home loan benefits.',
  },

  {
    category: 'GST',

    slug: 'gst-mistakes',

    title:
      'Common GST Mistakes Small Businesses Should Avoid',

    desc:
      'Avoid penalties by understanding GST return filing, invoice compliance and due dates.',
  },

  {
    category: 'Startup',

    slug: 'pvt-vs-llp',

    title:
      'Pvt Ltd vs LLP – Which is Better for Your Business?',

    desc:
      'Compare compliance, taxation and operational flexibility before choosing your business structure.',
  },

  {
    category: 'Accounting',

    slug: 'book-keeping-importance',

    title:
      'Why Proper Book Keeping is Important for Businesses',

    desc:
      'Maintain accurate financial records for compliance, taxation and better business decisions.',
  },

  {
    category: 'Compliance',

    slug: 'business-due-dates',

    title:
      'Important Due Dates Every Business Should Track',

    desc:
      'Stay compliant with GST returns, TDS filing, ROC filing and Income Tax deadlines.',
  },

  {
    category: 'Finance',

    slug: 'business-loan-documents',

    title:
      'Documents Required for Business Loan Applications',

    desc:
      'Understand CMA data, projected financials and banking documents required for loans.',
  },
]

export default function Blog() {
  return (
    <section className="section blog-page">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-badge">
            Tax Tips & Insights
          </span>

          <h1 className="page-title">
            Latest Tax, GST & Compliance Updates
          </h1>

          <p className="about-intro">
            Stay updated with practical financial,
            taxation and compliance insights for
            individuals, startups and businesses
            in India.
          </p>

        </motion.div>

        {/* Featured Blog */}
        <motion.div
          className="featured-blog"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}
        >

          <div className="featured-content">

            <span className="blog-category">
              Featured Article
            </span>

            <h2>
              Essential Tax Planning Strategies
              for FY 2025-26
            </h2>

            <p>
              Smart tax planning helps individuals
              and businesses reduce liabilities,
              improve compliance and optimize
              financial decisions legally.
            </p>

            <Link
              to="/blog/tax-saving-tips"
              className="primary-btn"
            >
              Read More
            </Link>

          </div>

        </motion.div>

        {/* Blog Grid */}
        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <motion.div
              key={index}

              className="blog-card"

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <span className="blog-category">
                {blog.category}
              </span>

              <h3>
                {blog.title}
              </h3>

              <p>
                {blog.desc}
              </p>

              <Link
                to={`/blog/${blog.slug}`}
                className="blog-btn"
              >
                Read Article →
              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}
