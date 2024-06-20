import "@/pages/InventoryDetailsPage/InventoryDetailsPage.scss";
import useInventory from "@/utils/hooks/useInventory";

/* COMPONENTS */
import Header from "@/components/Header/Header";
import InventoryDetails from "@/components/InventoryDetails/InventoryDetails"
import Footer from "@/components/Footer/Footer";

function InventoryDetailsPage() {
	const { inventory, error } = useInventory();
	console.log(inventory)

	if (error) return <p>{error}</p>

	return (
		<>
			<Header />
			<main className="inventory-details__main">
				{inventory && <InventoryDetails inventory={inventory}/>}
			</main>
			<Footer />
		</>
	);
}

export default InventoryDetailsPage;
