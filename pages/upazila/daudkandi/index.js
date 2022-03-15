import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import NavUpazila from "../../../components/Nav/NavUpazila";

import { navItemUpazilaDaudkandi } from "../../../public/data/objectAndArrayData/navItemData";
import { HeaderStripeUpazila } from "../../../components/Common/HeaderStripe";
import { HeadingUpazila } from "../../../components/Common/Heading";

const Index = () => {
  return (
    <>
      <HeaderStripeUpazila upazilaName="Daudkandi Upazila" />
      <NavUpazila navItemUpazila={navItemUpazilaDaudkandi} />
      <main
        className={`commonWidth relative py-5 shadow-lg shadow-gray-300 lg:shadow-lg ${styles.backgroundCourse}`}
      >
        <HeadingUpazila text="Welcome to Daudkandi Upazila" />
      </main>
      <Footer />
    </>
  );
};

export default Index;
