import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import NavUpazila from "../../../components/Nav/NavUpazila";

import { navItemUpazilaMonohorgonj } from "../../../public/data/objectAndArrayData/navItemData";
import { HeaderStripeUpazila } from "../../../components/Common/HeaderStripe";
import { HeadingUpazila } from "../../../components/Common/Heading";

const Index = () => {
  return (
    <>
      <HeaderStripeUpazila upazilaName="Monohorgonj Upazila" />
      <NavUpazila navItemUpazila={navItemUpazilaMonohorgonj} />
      <main
        className={`commonWidth relative py-5 shadow-lg shadow-gray-300 lg:shadow-lg ${styles.backgroundCourse}`}
      >
        <HeadingUpazila text="Welcome to Monohorgonj Upazila" />
      </main>
      <Footer />
    </>
  );
};

export default Index;
