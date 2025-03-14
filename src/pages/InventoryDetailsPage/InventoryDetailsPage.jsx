import "@/pages/InventoryDetailsPage/InventoryDetailsPage.scss";
import useInventory from "@/utils/hooks/useInventory";

import Header from "@/components/Header/Header";
import InventoryDetails from "@/components/InventoryDetails/InventoryDetails"
import Footer from "@/components/Footer/Footer";

function InventoryDetailsPage() {
	const { inventory, error } = useInventory();

	if (error) return <p>{error}</p>

	return (
		<>
			<Header />
			<main className="inventory-details__main" data-aos="fade-up">
				{inventory && <InventoryDetails inventory={inventory}/>}
			</main>
			<Footer />
		</>
	);
}

export default InventoryDetailsPage;
