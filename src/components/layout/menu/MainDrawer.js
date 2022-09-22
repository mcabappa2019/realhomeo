import React from 'react';
import dynamic from 'next/dynamic';
// import siteConfig from '../../../../siteConfig';

import MainDrawerItems from './MainDrawerItems';
const DrawerTemplate = dynamic(() => import('./DrawerTemplate'), {
  ssr: false,
});

const MainDrawer = ({ openDrawer = false, requestToClose }) => {
  return (
    <DrawerTemplate
      isOpen={openDrawer}
      onRequestClose={() => {
        requestToClose(false);
      }}
      headerTitle="Menu"
    >
      {openDrawer && (
        <MainDrawerItems
          onRequestClose={() => {
            requestToClose(false);
          }}
        />
      )}
    </DrawerTemplate>
  );
};

export default React.memo(MainDrawer);
