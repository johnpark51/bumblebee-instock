import "@/pages/InventoryDetailsPage/InventoryDetailsPage.scss";
import useInventory from "@/utils/hooks/useInventory";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import InventoryDetails from "@/components/InventoryDetails/InventoryDetails"
import Footer from "@/components/Footer/Footer";

function InventoryDetailsPage() {
	return (
		<>
			<Header />
			<main className="inventory-details__main">
				<InventoryDetails />
			</main>
			<Footer />
		</>
	);
}

export default InventoryDetailsPage;
