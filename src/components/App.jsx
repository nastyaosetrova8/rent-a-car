import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../Pages/Home/Home'));
const Catalog = lazy(() => import('../Pages/Catalog'));
const Favorite = lazy(() => import('../Pages/Favorite'));

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        theme="light"
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
