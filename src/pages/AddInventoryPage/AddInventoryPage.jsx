import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AddInventory from '@/components/AddInventory/AddInventory'
import './AddInventoryPage.scss';

export default function AddInventoryPage() {
    return (
        <>
            <Header />
            <main className='main'>
                <AddInventory />
            </main>
            <Footer />
        </>
    )
}
