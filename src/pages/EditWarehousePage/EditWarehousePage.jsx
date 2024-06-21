import "@/pages/EditWarehousePage/EditWarehousePage.scss";

import Header from "@/components/Header/Header";
import EditWarehouse from "@/components/EditWarehouse/EditWarehouse";
import Footer from "@/components/Footer/Footer";

function EditWarehousePage() {
	return (
		<>
			<Header />
			<main className="edit-warehouse__main">
				<EditWarehouse />
			</main>
			<Footer />
		</>
	);
}

export default EditWarehousePage;
