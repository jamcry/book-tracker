import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="brand">
        <img
          className="brand-logo"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/books_1f4da.png"
          alt="stacked books emoji"
        />
        Book Tracker
      </div>
      <div className="slogan">Manage your books with a online library</div>
    </div>
  );
}
