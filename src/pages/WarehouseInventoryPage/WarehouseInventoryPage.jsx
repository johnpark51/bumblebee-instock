import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import './WarehouseInventoryPage.scss';
import arrow from '../../assets/Icons/arrow_back-24px.svg';
import edit from '../../assets/Icons/edit-24px.svg'
import chevron from '../../assets/Icons/chevron_right-24px.svg';
import del from '../../assets/Icons/delete_outline-24px.svg';
import sort from '../../assets/Icons/sort-24px.svg'

export default function WarehouseInventoryPage() {
    return (
        <>
            <Header />
            <main className="inventory">
                <section className='inventory__details'>
                    <div className='inventory__header'>
                        <div className='inventory__title'>
                            <img className='inventory__arrow' src={arrow} alt="arrow" />
                            <h1 className='inventory__h1'>
                                Washington
                            </h1>
                        </div>
                        <div className='inventory__container'>
                            <img className='inventory__edit' src={edit} alt="edit" />
                            <p className='inventory__editdis'>
                                Edit
                            </p>
                        </div>
                    </div>
                    <div className='inventory__warehouse'>
                        <div className='inventory__address'>
                            <h4 className='inventory__label'>
                                WAREHOUSE ADDRESS:
                            </h4>
                            <p className='inventory__text'>
                                33 Pearl Street SW,  
                                Washington, USA
                            </p>
                        </div>
                        <section className='inventory__contact'>
                            <div className='inventory__name'>
                                <h4 className='inventory__label'>
                                    CONTACT NAME:
                                </h4>
                                <p className='inventory__text'>
                                    GRAEME LYON
                                    <br />
                                    Warehouse Manager
                                </p>
                            </div>
                            <div className='inventory__information'>
                                <h4 className='inventory__label'>
                                    CONTACT INFORMATION:
                                </h4>
                                <p className='inventory__text'>
                                    +1 (647) 504-0911
                                    <br />
                                    glyon@instock.com
                                </p>
                            </div>
                        </section>
                    </div>
                        <div className='inventory__items'>
                            <div className='inventory__block'>
                                <div className='inventory__three'>
                                    <div className='inventory__sort'>
                                        <h4 className='inventory__title'>
                                            Inventory Item
                                        </h4>
                                        <img src={sort} alt="sort" />
                                    </div>
                                    <div className='inventory__twotop'>
                                        <div className='inventory__sort'>
                                            <h4 className='inventory__title'>
                                                Category
                                            </h4>
                                            <img src={sort} alt="sort" />
                                        </div>
                                        <div className='inventory__sort'>
                                            <h4 className='inventory__title'>
                                                Status
                                            </h4>
                                            <img src={sort} alt="sort" />
                                        </div>
                                    </div>
                                </div>
                                <div className='inventory__sort'>
                                    <h4 className='inventory__title'>
                                        Quantity
                                    </h4>
                                    <img src={sort} alt="sort" />
                                </div>
                                <div className='inventory__sort'>
                                    <h4 className='inventory__title'>
                                        Actions
                                    </h4>
                                </div>
                            </div>
                            <div className='inventory__tablet'>
                                <div className='inventory__itcas'>
                                    <p className='inventory__link'> 
                                        Television <img className='inventory__image' src={chevron} alt="arrow" />
                                    </p>
                                    <div className='inventory__two'>
                                        <p className='inventory__text'>
                                            Electronics
                                        </p>
                                        <div className='inventory__stock'>
                                            <p className='inventory__tag'>
                                                IN STOCK
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                    <p className='inventory__text--qty'>
                                        500
                                    </p>
                                    <div className='inventory__buttonsmob'>
                                        <img className='inventory__delete' src={del} alt="delete" />
                                        <img className='inventory__itemedit' src={edit} alt="edit" />
                                    </div>
                            </div>
                            <div className='inventory__mobile'>
                                <div className='inventory__itstat'>
                                    <div className='inventory__item'>
                                        <h4 className='inventory__label'>
                                            INVENTORY ITEM
                                        </h4>
                                        <p className='inventory__link'> 
                                            Television <img className='inventory__image' src={chevron} alt="arrow" />
                                        </p>
                                    </div>
                                    <div className='inventory__status'>
                                        <h4 className='inventory__label'>
                                            INVENTORY STATUS
                                        </h4>
                                        <div className='inventory__stock'>
                                            <p className='inventory__tag'>
                                                IN STOCK
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='inventory__catqua'>
                                    <div className='inventory__category'>
                                        <h4 className='inventory__label'>
                                            CATEGORY
                                        </h4>
                                        <p className='inventory__text'>
                                            Electronics
                                        </p>
                                    </div>
                                    <div className='inventory__quantity'>
                                        <h4 className='inventory__label'>
                                            QTY
                                        </h4>
                                        <p className='inventory__text'>
                                            500
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='inventory__buttons'>
                            <img className='inventory__delete' src={del} alt="delete" />
                            <img className='inventory__itemedit' src={edit} alt="edit" />
                        </div>
                </section>
            </main>
            <Footer />
        </>
    )
}