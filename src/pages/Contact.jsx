
export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>

        <div className="contact-grid">
          <div className="card">
            <h3>Office Details</h3>
            <p>Email: info@cafirm.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Business Hours: Monday - Saturday</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button className="primary-btn">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}
