import { useRoutes, BrowserRouter as Router, } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import "./assets/css/token-rewrite.css";
import './assets/css/App.css';
import './assets/css/App_ksj.css';
import { ConfirmDialog, Toast } from 'primereact';
import adminRoutes from './app/routes/admin-routes';

function App() {
  const routes = useRoutes(adminRoutes)

  return (
    <>
    <ConfirmDialog />
    <Toast />
    
    {/* <Suspense fallback={<Loader />}> */}
        {routes}
    {/* </Suspense> */}

    </>
  );
}

export default App;
