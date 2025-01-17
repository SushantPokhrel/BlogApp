import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear } VibeWrite. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
