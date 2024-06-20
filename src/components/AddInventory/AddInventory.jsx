import './AddInventory.scss'
import arrow from '../../assets/Icons/arrow_back-24px.svg'
import drop from '../../assets/Icons/arrow_drop_down-24px.svg'

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
                    <section className='form__details'>
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
                        <section className='form__value form__value--drop-down'>
                            <h3 className='form__subtitle form__subtitle--drop-down'>
                                Category
                            </h3>
                            <section className='form__drop-down'>
                                <select className='form__input form__input--category' name="category" id="category">
                                    <option className='form__option form__option--placeholder'  disabled selected value="">
                                        Category
                                    </option>
                                    <option className='form__option' value="Electronics">Electronics</option>
                                    <option className='form__option' value="Gear">Gear</option>
                                    <option className='form__option' value="Apparel">Apparel</option>
                                    <option className='form__option' value="Accessories">Accessories</option>
                                    <option className='form__option' value="Health">Health</option>
                                </select>
                                <img className='form__option-img  form__option-img--category' src={drop} alt="^" />
                            </section>
                        </section>
                    </section>
                    <section className='form__availability'>
                        <h2 className='form__subheader'>
                            Item Availability
                        </h2>
                        <section className='form__status'>
                            <h3 className='form__subtitle'>
                                Status
                            </h3>
                            <div className='form__rad'>
                                <div className='form__holder'>
                                    <input type="radio" className='form__radio' name='inStock' id='inStock'/>
                                    <label className='form__lab'>
                                        In Stock
                                    </label>
                                </div>
                                <div className='form__holder'>
                                    <input type="radio" className='form__radio' name='outOfStock' id='outOfStock'/>
                                    <label className='form__lab'>
                                        Out of Stock
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className='form__value'>
                            <h3 className='form__subtitle'>
                                Quantity
                            </h3>
                            <input className='form__input form__input--qty' type="text" placeholder='0'/>
                        </section>
                        <section className='form__value form__value--drop-down'>
                            <h3 className='form__subtitle form__subtitle--drop-down'>
                                Warehouse
                            </h3>
                            <section className='form__drop-down'>
                                <select className='form__input  form__input--category' name="warehouse" id="warehouse">
                                    <option className='form__option form__option--placeholder'  disabled selected value="">
                                        Please select
                                    </option>
                                    <option className='form__option' value="">John</option>
                                    <option className='form__option' value="">Santiago</option>
                                    <option className='form__option' value="">Jay</option>
                                    <option className='form__option' value="">Jason</option>
                                </select>
                                <img className='form__option-img' src={drop} alt="^" />
                            </section>
                        </section>
                    </section>
                </main>
                <section className='form__buttons'>
                    <div className='form__container'>
                        <button className='form__button'>
                            Cancel
                        </button>
                        <button className='form__button
                            form__button--add'>
                            + Add Item
                        </button>
                    </div>
                </section>
            </form>
        </>
    )
}