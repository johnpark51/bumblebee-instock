/* STYLES */
import "./InventoryPage.scss";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InventoryList from "@/components/InventoryList/InventoryList";

function InventoryPage() {
  return (
    <>
      <Header />
      <main className="inventorypage-main">
        <InventoryList />
      </main>
      <Footer />
    </>
  );
}

export default InventoryPage;
