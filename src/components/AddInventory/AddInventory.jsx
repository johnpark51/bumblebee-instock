import './AddInventory.scss'
import arrow from '../../assets/Icons/arrow_back-24px.svg'

export default function AddInventory() {
    return (
        <>
            <form className='form'>
                <header className='form__header'>
                        <img className='form__arrow' src={arrow} alt="<" />
                        <h1 className='form__title'>
                            Add New Inventory Item
                        </h1>
                </header>
                <main className='form__main'>
                    <h2 className='form__subheader'>
                        Item Details
                    </h2>
                    <section className='form__value'>
                        <h3 className='form__subtitle'>
                            Item Name
                        </h3>
                        <input className='form__input' type="text" placeholder='Item Name'/>
                    </section>
                    <section className='form__value'>
                        <h3 className='form__subtitle'>
                            Description
                        </h3>
                        <input className='form__input form__input--desc' type="text" placeholder='Please enter a brief item description...'/>
                    </section>
                    <section className='form__value'>
                        <h3 className='form__subtitle'>
                            Category
                        </h3>
                        <select className='form__input' name="category" id="category">
                            <option className='form__option form__option--placeholder'  disabled selected value="">Category</option>
                            <option className='form__option' value="">John</option>
                            <option className='form__option' value="">Santiago</option>
                            <option className='form__option' value="">Jay</option>
                            <option className='form__option' value="">Jason</option>
                        </select>
                    </section>
                </main>
            </form>
        </>
    )
}