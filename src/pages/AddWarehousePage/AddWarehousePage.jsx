import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function AddWarehousePage() {
    return (
        <>
            <Header />
            <main className="add-warehouse__main">
                <AddWarehouse />
            </main>
            <Footer />
        </>
    )
}