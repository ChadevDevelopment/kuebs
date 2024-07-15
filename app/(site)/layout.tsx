import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import BackToTop from "../../components/ScrollToTop/back-to-top";
import ToasterContext from "../context/ToasterContext";

const Layout = ({ children }: { children: React.ReactNode }) => {

 return (
    <>
     <ToasterContext />
     <Header />
       {children}
     <Footer />
     <BackToTop />
    </>
   );
}

export default Layout;