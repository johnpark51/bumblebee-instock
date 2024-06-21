import { Link } from 'react-router-dom'
import './EditInventory.scss'
import arrow from '../../assets/Icons/arrow_back-24px.svg'
import drop from '../../assets/Icons/arrow_drop_down-24px.svg'

export default function EditInventory() {
    return (
        <>
            <form className='form-edit'>
                <header className='form-edit__header'>
                    <Link to='/inventory'>
                        <img className='form-edit__arrow' src={arrow} alt="<" />
                    </Link>
                    <h1 className='form-edit__title'>
                        Edit Inventory Item
                    </h1>
                </header>
                <main className='form-edit__main'>
                    <section className='form-edit__details'>
                        <h2 className='form-edit__subheader'>
                            Item Details
                        </h2>
                        <section className='form-edit__value'>
                            <h3 className='form-edit__subtitle'>
                                Item Name
                            </h3>
                            <input className='form-edit__input' type="text" placeholder='Television'/>
                        </section>
                        <section className='form-edit__value'>
                            <h3 className='form-edit__subtitle'>
                                Description
                            </h3>
                            <input className='form-edit__input form-edit__input--desc' type="text" placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'/>
                        </section>
                        <section className='form-edit__value form-edit__value--drop-down'>
                            <h3 className='form-edit__subtitle form-edit__subtitle--drop-down'>
                                Category
                            </h3>
                            <section className='form-edit__drop-down'>
                                <select className='form-edit__input form-edit__input--category' name="category" id="category">
                                    <option className='form-edit__option' value="Electronics">Electronics</option>
                                    <option className='form-edit__option' value="Gear">Gear</option>
                                    <option className='form-edit__option' value="Apparel">Apparel</option>
                                    <option className='form-edit__option' value="Accessories">Accessories</option>
                                    <option className='form-edit__option' value="Health">Health</option>
                                </select>
                                <img className='form-edit__option-img  form-edit__option-img--category' src={drop} alt="^" />
                            </section>
                        </section>
                    </section>
                    <section className='form-edit__availability'>
                        <h2 className='form-edit__subheader'>
                            Item Availability
                        </h2>
                        <section className='form-edit__status'>
                            <h3 className='form-edit__subtitle'>
                                Status
                            </h3>
                            <div className='form-edit__rad'>
                                <div className='form-edit__holder'>
                                    <input type="radio" className='form-edit__radio' name='inStock' id='inStock'/>
                                    <label className='form-edit__lab'>
                                        In Stock
                                    </label>
                                </div>
                                <div className='form-edit__holder'>
                                    <input type="radio" className='form-edit__radio' name='outOfStock' id='outOfStock'/>
                                    <label className='form-edit__lab'>
                                        Out of Stock
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className='form-edit__value form-edit__value--drop-down'>
                            <h3 className='form-edit__subtitle form-edit__subtitle--drop-down'>
                                Warehouse
                            </h3>
                            <section className='form-edit__drop-down'>
                                <select className='form-edit__input  form-edit__input--category' name="warehouse" id="warehouse">
                                    <option className='form-edit__option' value="">Manhattan</option>
                                    <option className='form-edit__option' value="">Santiago</option>
                                    <option className='form-edit__option' value="">Jay</option>
                                    <option className='form-edit__option' value="">Jason</option>
                                </select>
                                <img className='form-edit__option-img' src={drop} alt="^" />
                            </section>
                        </section>
                    </section>
                </main>
                <section className='form-edit__buttons'>
                    <div className='form-edit__container'>
                        <button className='form-edit__button'>
                            Cancel
                        </button>
                        <button className='form-edit__button
                            form-edit__button--add'>
                            Save
                        </button>
                    </div>
                </section>
            </form>
        </>
    )
}
