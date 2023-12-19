



import FeaturedUser from "../../Components/featured/Featured";
import FeaturedPropertiesUser from "../../Components/featuredProperties/FeaturedProperties";
import FooterUser from "../../Components/footer/Footer";
import HeaderUser from "../../Components/header/Header";
import MailUser from "../../Components/mail/Mail";
import NavbarUser from "../../Components/navbar/NavbarUser";
import PropertyListUser from "../../Components/propertyList/PropertyList";
import "./home.css";

const HomeUser = () => {
  return (
    <div>
      <NavbarUser/>
      <HeaderUser/>
      <div className="homeContainer">
        <FeaturedUser/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyListUser/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPropertiesUser/>
        <MailUser/>
        <FooterUser/>
      </div>
    </div>
  );
};

export default HomeUser;