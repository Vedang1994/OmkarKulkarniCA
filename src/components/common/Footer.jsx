
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

<div className="footer-logo">
<img src={'/Images/ORK_Logo.png'} alt="Logo" />

  <div>
    <h2>Omkar Kulkarni & Associates</h2>
    <p>Trusted Chartered Accountants</p>
    <p>
        Helping individuals and businesses simplify tax, GST, compliance,
        and financial planning.
    </p>
  </div>
</div>

        <div className="footer-grid">
          <div>
            <h4>Services</h4>
            <p>ITR Filing</p>
            <p>GST Registration</p>
            <p>Company Registration</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>info@cafirm.com</p>
            <p>+91 9876543210</p>
          </div>
        </div>

        <p className="copyright">© 2026 Modern CA Firm</p>
      </div>
    </footer>
  )
}
