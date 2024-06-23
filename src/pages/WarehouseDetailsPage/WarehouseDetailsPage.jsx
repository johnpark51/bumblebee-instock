import useWarehouse from "@/utils/hooks/useWarehouse";

import "./WarehouseDetailsPage.scss";

import Header from "@/components/Header/Header";
import WarehouseDetailsList from "@/components/WarehouseDetailsList/WarehouseDetailsList";
import Footer from "@/components/Footer/Footer";

function WarehouseDetailsPage() {

  const { warehouse, error } = useWarehouse();

  if (error) return <p>{error}</p>

  return (
    <>
      <Header />
      <main className="warehouse-details-main" data-aos="fade-up">
        { warehouse && <WarehouseDetailsList warehouse={warehouse} /> }
      </main>
      <Footer />
    </>
  );
};

export default WarehouseDetailsPage;
