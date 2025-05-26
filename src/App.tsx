import Navbar from "./components/Navigation/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import { FeaturedProducts } from "./components/FeaturedProducts/FeaturedProduct";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import { CTA } from "./components/CTA/Cta";
import { Footer } from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiProductDetails from "./components/apiProductDetails/apiProductsDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Provider store={store}>
        <div>
          <ProductsPage />
        </div>
      </Provider>
      <FeaturedProducts />
      <FeaturedPosts />
      <TestimonialSection />
      <CTA />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<ApiProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
