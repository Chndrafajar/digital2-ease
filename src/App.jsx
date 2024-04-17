import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.scss';
import './dashboard.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

import BlogPages from './pages/BlogPages';
import DetailPages from './pages/DetailPages';
import MyInformation from './pages/dashboard user/MyInformation';
import SaveProduct from './pages/dashboard user/SaveProduct';
import Messages from './pages/dashboard user/Messages';
import MessagesId from './pages/dashboard user/MessagesId';
import ChangePassword from './pages/dashboard user/ChangePassword';
import Purchases from './pages/dashboard user/Purchases';
import TokoPages from './pages/tokopages/TokoPages';
import TokoAbout from './pages/tokopages/TokoAbout';
import About from './pages/company/About';
import Privacy from './pages/company/Privacy';
import TermsCondition from './pages/company/TermsCondition';
import { useEffect, useState } from 'react';
import LoadingBar from './components/LoadingBar';
import { IoIosArrowUp } from 'react-icons/io';
import CartPages from './pages/dashboard user/CartPages';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mendeteksi posisi scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk kembali ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Menggunakan useEffect untuk menambahkan event listener ke window
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleRouteChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    handleRouteChange();
  }, [location]);
  return (
    <>
      {isLoading && <LoadingBar />}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/c/:slug" element={<Product />} />
        <Route path="/blogs/:slug" element={<BlogPages />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/detail/:id" element={<DetailPages />} />
        <Route path="/toko/:slug" element={<TokoPages />} />
        <Route path="/toko/about" element={<TokoAbout />} />
        {/* dashboard  */}
        <Route path="/dashboard/my-information" element={<MyInformation />} />
        <Route path="/dashboard/save-product" element={<SaveProduct />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/messages/:slug" element={<MessagesId />} />
        <Route path="/dashboard/purchases" element={<Purchases />} />
        <Route path="/dashboard/change-password" element={<ChangePassword />} />
      </Routes>
      {isVisible && (
        <button className="btn-top-down" onClick={scrollToTop}>
          <IoIosArrowUp />
        </button>
      )}
      <Footer />
    </>
  );
}

export default App;
