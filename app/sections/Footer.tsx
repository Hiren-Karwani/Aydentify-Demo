export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-logo">AYDENTIFY</p>
        <p className="footer-tagline">
          Best-in-class lead generation software for ingredient and packaging businesses.
        </p>
        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Scout Information Pte Ltd. All rights reserved.</p>
          <nav className="footer-nav" aria-label="Legal">
            <a href="#">Data Processing Addendum</a>
            <a href="#">Privacy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
