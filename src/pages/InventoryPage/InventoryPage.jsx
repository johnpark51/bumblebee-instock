/* STYLES */
import "./InventoryPage.scss";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InventoryList from "@/components/InventoryList/InventoryList";

function WarehousePage() {
  return (
    <>
      <Header />
      <main className="warehousepage-main">
        <InventoryList />
      </main>
      <Footer />
    </>
  );
}

export default WarehousePage;
