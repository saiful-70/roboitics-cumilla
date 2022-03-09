import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import NavUpazila from "../../../components/Nav/NavUpazila";

import { navItemUpazilaBrahmanpara } from "../../../public/data/objectAndArrayData/navItemData";
import { HeaderStripeUpazila } from "../../../components/Common/HeaderStripe";

const Index = () => {
  return (
    <>
      <HeaderStripeUpazila upazilaName="Brahmanpara Upazila" />
      <NavUpazila navItemUpazila={navItemUpazilaBrahmanpara} />
      <main
        className={`commonWidth relative shadow-lg shadow-gray-300 lg:shadow-lg  ${styles.backgroundCourse} py-20`}
      >
        <a href="http://brahmanpara.comilla.gov.bd/">
          Know more about brahmanpara
        </a>
      </main>
      <Footer />
    </>
  );
};

export default Index;
