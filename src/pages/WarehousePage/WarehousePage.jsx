/* STYLES */
import "./WarehousePage.scss";

/* COMPONENTS */
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer";
import WarehouseList from "@/components/WarehouseList/WarehouseList";

function WarehousePage () {
  return (
    <>
      <Header/>
      <main>
        <WarehouseList />
      </main>
      <Footer />
    </>
  );
};

export default WarehousePage;
