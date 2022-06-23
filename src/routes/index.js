import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Mainnet, Rinkeby, DAppProvider } from '@usedapp/core';

const MintPage = lazy(() => import('../pages/mint'));
const ErrorPage = lazy(() => import('../pages/error'));

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  },
};

const AppRoutes = () => {
  return (
    <DAppProvider config={config}>
      <Routes>
        <Route path='/' element={<MintPage />} />
        <Route component={ErrorPage} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        autoDismiss={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        icon={true}
        theme={'colored'}
        pauseOnHover={false}
        rtl={false}
      />
    </DAppProvider>
  );
};

export default AppRoutes;
