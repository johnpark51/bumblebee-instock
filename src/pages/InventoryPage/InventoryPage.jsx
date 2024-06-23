import "./InventoryPage.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InventoryList from "@/components/InventoryList/InventoryList";

function InventoryPage() {
  return (
    <>
      <Header />
      <main className="inventorypage-main" data-aos="fade-up">
        <InventoryList />
      </main>
      <Footer />
    </>
  );
}

export default InventoryPage;
