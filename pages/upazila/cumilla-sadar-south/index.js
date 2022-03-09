import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import NavUpazila from "../../../components/Nav/NavUpazila";

import { navItemUpazilaCumillaSadarSouth } from "../../../public/data/objectAndArrayData/navItemData";
import { HeaderStripeUpazila } from "../../../components/Common/HeaderStripe";

const Index = () => {
  return (
    <>
      <HeaderStripeUpazila upazilaName="Cumilla Sadar South Upazila" />
      <NavUpazila navItemUpazila={navItemUpazilaCumillaSadarSouth} />
      <main
        className={`commonWidth relative shadow-lg shadow-gray-300 lg:shadow-lg  ${styles.backgroundCourse}`}
      ></main>
      <Footer />
    </>
  );
};

export default Index;
