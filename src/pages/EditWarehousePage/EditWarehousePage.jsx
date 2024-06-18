import "./EditWarehousePage.scss";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import EditWarehouse from "@/components/EditWarehouse/EditWarehouse";
import Footer from "@/components/Footer/Footer";
import DeleteWarehouse from "@/components/DeleteWarehouse/DeleteWarehouse";

function EditWarehousePage() {
  return (
    <>
      <Header />
      <main className="edit-warehouse__main">
        <EditWarehouse />
        <DeleteWarehouse />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default EditWarehousePage;