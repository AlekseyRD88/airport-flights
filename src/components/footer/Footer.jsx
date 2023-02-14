import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
    <ul className="footer-list">
    <h4>Passengers info</h4>
    <li>Flight schedule</li>
    <li>Services</li>
    <li>Contacts</li>
    <li>Privacy policy</li>
    <li>Feedback</li>
    </ul>
    <ul className="footer-list">
    <h4>Main page</h4>
    <li>Services</li>
    <li>Ground service</li>
    <li>Airport features</li>
    <li>Training centre</li>
    <li>Careers</li>
    </ul>
    <ul className="footer-list">
    <h4>Press centre</h4>
    <li>Main page</li>
    <li>Latest news</li>
    <li>Social & Art Projects</li>
    <li>Financial information</li>
    <li>Traffic statistics</li>
    </ul>
    <div>
      <h4>Contact us</h4>
      <div>+38(044)500-49-73</div>
      <h3>Follow us</h3>
      <div></div>
    </div>
  </div>
  );
}

export default Footer;