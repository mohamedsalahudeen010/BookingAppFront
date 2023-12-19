import Sidebar from "../../components/sidebar/Sidebar";

import "./homeAdmin.css";



import NavbarAdmin from "../../components/navbarAdmin/NavbarAdmin";
import FeaturedAdmin from "../../components/featuredAdmin/FeaturedAdmin";
import WidgetAdmin from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import { Table } from "@mui/material";
const HomeAdmin = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavbarAdmin />
        <div className="widgets">
          <WidgetAdmin type="user" />
          <WidgetAdmin  type="order" />
          <WidgetAdmin  type="earning" />
          <WidgetAdmin  type="balance" />
        </div>
        <div className="charts">
          <FeaturedAdmin />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin ;