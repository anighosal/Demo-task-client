import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Bar from "../components/Navbar/Bar";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Bar></Bar>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
