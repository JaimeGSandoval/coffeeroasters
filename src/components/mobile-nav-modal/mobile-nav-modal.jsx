import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import closeIcon from '../../assets/icons/icon-close.svg';
import './mobile-nav-modal';

const MobileNavModal = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);

  const openModalClick = () => {
    setShowModal(true);
  };

  const closeModalClick = () => {
    setShowModal(false);
  };

  // attaching functions to the ref that can be used in the component where the ref lives
  useImperativeHandle(ref, () => {
    return {
      open: () => openModalClick(),
      close: () => closeModalClick(),
    };
  });

  if (showModal) {
    return ReactDOM.createPortal(
      <div className="mobile-nav-page" onClick={closeModalClick}>
        <div className="mobile-page-header">
          <img
            src={logo}
            alt="logo"
            className="mobile-nav-logo"
            onError={(e) => (e.target.onerror = null)}
          />
          <img
            src={closeIcon}
            alt="mobile icon close"
            className="mobile-close"
            onClick={closeModalClick}
            onError={(e) => (e.target.onerror = null)}
          />
        </div>

        <nav className="mobile-nav" aria-label="mobile navigation">
          <ul className="mobile-nav-list">
            <li>
              <Link
                to="/"
                className="mobile-nav-links"
                onClick={closeModalClick}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="mobile-nav-links"
                onClick={closeModalClick}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className="mobile-nav-links"
                onClick={closeModalClick}
              >
                create a plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
});

export default MobileNavModal;