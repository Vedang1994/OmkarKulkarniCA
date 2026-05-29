import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Top */}
        <div className="footer-logo">

          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Logo"
            className="logo-image"
          />

          <div>
            <h2>Omkar Kulkarni & Associates</h2>

            <p>Trusted Chartered Accountants</p>

            <p>
              Helping individuals and businesses simplify
              tax, GST, compliance, registrations and
              financial planning.
            </p>
          </div>

        </div>

        {/* Footer Grid */}
        <div className="footer-grid">

          {/* Services */}
          <div>

            <h4>Services</h4>

            <p>Financial Accounting</p>

            <p>Income Tax Services</p>

            <p>GST Registration & Returns</p>

            <p>Company Registrations</p>

            <p>Loan Assistance</p>

            <p>Digital Signature Certificates</p>

          </div>

          {/* Quick Links */}
          <div className="footer-links">

            <h4>Quick Links</h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/faq">
              FAQ
            </Link>

            <Link to="/blog">
              Tax Tips / Blog
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

          {/* Contact */}
          <div>

            <h4>Contact</h4>

            <p>
              info@cafirm.com
            </p>

            <p>
              +91 9876543210
            </p>

            <p>
              Pune, Maharashtra, India
            </p>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p className="copyright">
            © 2026 Omkar Kulkarni & Associates.
            All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}
