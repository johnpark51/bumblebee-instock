import "./WarehouseDetailsPage.scss";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import WarehouseDetailsList from "@/components/WarehouseDetailsList/WarehouseDetailsList";
import Footer from "@/components/Footer/Footer";

function WarehouseDetailsPage() {
  return (
    <>
      <Header />
      <main className="warehouse-details-main">
        <WarehouseDetailsList />
      </main>
      <Footer />
    </>
  );
};

export default WarehouseDetailsPage;
