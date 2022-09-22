import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useRouter } from 'next/router';

const DrawerTemplate = (props) => {
  const { isOpen, onRequestClose, headerTitle, drawerClass } = props;

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      onRequestClose();
    };
    router.events.on('routeChangeStart', handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    onRequestClose();
  };

  const clsToggle = isOpen ? 'drawer-toggled' : '';

  const classNm = drawerClass ? drawerClass : 'drawer-wrapper-right';

  return ReactDom.createPortal(
    <>
      <div className={`${classNm} ${clsToggle}`}>
        <div className="drawer-body">
          <div className="d-flex align-items-center justify-content-between ">
            <span className="h5 mb-0 text-uppercase mx-4">
              {headerTitle || siteConfig.SITE_TITLE}
            </span>

            <button
              type="button"
              className="btn-close ms-auto close-drawer mx-4"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <hr />
          {props.children}
        </div>
      </div>
      <div
        className={`layer ${isOpen ? 'layer-is-visible' : ''}`}
        onClick={closeModal}
      ></div>
    </>,
    document.getElementById('portal')
  );
};

export default React.memo(DrawerTemplate);
