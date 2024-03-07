// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsCurrencyDollar,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsQrCodeScan,
  BsPaypal,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <NavLink to="/dashboard" activeClassName="active">
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </NavLink>
        <NavLink to="/payment" activeClassName="active">
          <li className="sidebar-list-item">
            <BsCurrencyDollar className="icon" /> Payments
          </li>
        </NavLink>
        <NavLink to="/instant-payment" activeClassName="active">
          <li className="sidebar-list-item">
            <BsPaypal className="icon" /> Instant Payment
          </li>
        </NavLink>
        <NavLink to="/qr-scan" activeClassName="active">
          <li className="sidebar-list-item">
            <BsQrCodeScan className="icon" /> QR Scan
          </li>
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
