export default function Footer() {
return ( 



<footer className="footer"> <div className="footer-container">

    {/* Brand Section */}
    <div className="footer-section">
      <div className="footer-logo">
        Vik<span>Nova</span>
      </div>

      <p className="footer-description">
        VikNova is your trusted destination for crypto insights,
        market trends, educational content, and digital finance updates.
        Learn, analyze, and stay ahead in the world of Web3.
      </p>

      <p className="footer-tagline">
        🚀 Simplifying Crypto, One Insight at a Time.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul className="footer-list">
        <li><a href="/">Home</a></li>
        <li><a href="/market">Markets</a></li>
        <li><a href="/news">Crypto News</a></li>
        <li><a href="/learn">Learn Crypto</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div className="footer-section">
      <h3>Resources</h3>
      <ul className="footer-list">
        <li><a href="/blog">Blog</a></li>
        <li><a href="/guides">Guides</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="footer-section">
      <h3>Get in Touch</h3>

      <p>📧 vishaltomarx13@gmail.com</p>
      <p>📍 Chambal</p>

      <a
        href="https://www.linkedin.com/in/vishaltomar13"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Connect on LinkedIn →
      </a>

      <div className="footer-socials">
        <a href="https://x.com/vishaltomar13">X</a>
        <a href="https://github.com/mratyunjayaa">GitHub</a>
        <a href="#">Telegram</a>
        <a  href="https://instagram.com/mratyunjayaa">Instagram</a>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} VikNova. All Rights Reserved.
    </p>

    <p>
      Crafted with ❤️ by Vishal Tomar
    </p>
  </div>
</footer>
)
}
