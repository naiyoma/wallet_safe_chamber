import React from "react";
import { NavLink } from "react-router-dom";
  

export default function NavBar() {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              SaveUP
              <i className="fa fa-code"></i>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/wallet"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Wallet
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/deposit"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Deposit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/withdraw"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Withdraw
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/transfer"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Transfer
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
  }

