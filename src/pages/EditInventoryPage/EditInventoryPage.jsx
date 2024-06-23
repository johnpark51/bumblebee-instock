import './EditInventoryPage.scss'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import EditInventory from "@/components/EditInventory/EditInventory"

export default function EditInventoryPage() {
    return (
        <>
            <Header />
            <main className='main-edit'>
                <EditInventory />
            </main>
            <Footer />
        </>
    )
}
