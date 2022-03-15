import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import NavUpazila from "../../../components/Nav/NavUpazila";

import { navItemUpazilaCumillaAdarsaSadar } from "../../../public/data/objectAndArrayData/navItemData";
import { HeaderStripeUpazila } from "../../../components/Common/HeaderStripe";
import { HeadingUpazila } from "../../../components/Common/Heading";

const Index = () => {
  return (
    <>
      <HeaderStripeUpazila upazilaName="Cumilla Adarsa Sadar Upazila" />
      <NavUpazila navItemUpazila={navItemUpazilaCumillaAdarsaSadar} />
      <main
        className={`commonWidth relative py-5 shadow-lg shadow-gray-300 lg:shadow-lg ${styles.backgroundCourse}`}
      >
        <HeadingUpazila text="Welcome to Cumilla Adarsa Sadar Upazila" />
      </main>
      <Footer />
    </>
  );
};

export default Index;
