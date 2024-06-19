/* LOGIC */
import useWarehouse from "@/utils/hooks/useWarehouse";

/* STYLES */
import "./WarehouseDetailsPage.scss";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import WarehouseDetailsList from "@/components/WarehouseDetailsList/WarehouseDetailsList";
import Footer from "@/components/Footer/Footer";

function WarehouseDetailsPage() {

  const { warehouse, error } = useWarehouse();

  if (error) return <p>{error}</p>

  return (
    <>
      <Header />
      <main className="warehouse-details-main">
        { warehouse && <WarehouseDetailsList warehouse={warehouse} /> }
      </main>
      <Footer />
    </>
  );
};

export default WarehouseDetailsPage;
