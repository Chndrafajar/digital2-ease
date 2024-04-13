import React from 'react';

import BlogsSlide from '../components/landing pages/BlogsSlide';
import JoinShop from '../components/landing pages/JoinShop';

import SpesialOffers from '../components/landing pages/SpesialOffers';
import FeatureProduct from '../components/landing pages/FeatureProduct';
import NewArrivals from '../components/landing pages/NewArrivals';
import BannerProduct from '../components/landing pages/BannerProduct';

const HomePage = () => {
  return (
    <>
      <BannerProduct />
      <SpesialOffers />
      <FeatureProduct />
      <NewArrivals />
      <BlogsSlide />
      <JoinShop />
    </>
  );
};

export default HomePage;
