import { useParams } from 'react-router-dom'

const blogContent = {
  'tax-saving-tips': {
    title:
      'Tax Saving Tips for Salaried Employees in India',

    content:
      'Salaried individuals can reduce tax liability using deductions under Section 80C, 80D, HRA, home loan interest and NPS contributions.',
  },

  'gst-mistakes': {
    title:
      'Common GST Mistakes Small Businesses Should Avoid',

    content:
      'Businesses should avoid delayed return filing, incorrect invoice formats and mismatch in GST returns.',
  },

  'pvt-vs-llp': {
    title:
      'Pvt Ltd vs LLP – Which is Better?',

    content:
      'Private Limited Companies are suitable for scalable businesses while LLPs provide flexibility with lower compliance.',
  },
}

export default function BlogDetails() {

  const { slug } = useParams()

  const blog = blogContent[slug]

  if (!blog) {
    return (
      <section className="section">
        <div className="container">
          <h1>Blog Not Found</h1>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">

        <span className="section-badge">
          Blog Article
        </span>

        <h1 className="page-title">
          {blog.title}
        </h1>

        <div className="content-box">

          <p>
            {blog.content}
          </p>

        </div>

      </div>
    </section>
  )
}
