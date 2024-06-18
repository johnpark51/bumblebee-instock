/* STYLES */
import "./WarehouseDetailsList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";
import arrowBackIcon from "@/assets/Icons/arrow_back-24px.svg";

/* COMPONENTS */
import WarehouseItem from "@/components/WarehouseItem/WarehouseItem";
import EditIcon from "@/components/Icons/EditIcon";

function WarehouseDetailsList() {
  return (
    <>
    <section className="warehouse-details-list">
      <div className="warehouse-details-list__top">
        <div className="warehouse-details-list__top--left">
          <h1 className="warehouse-details-list__header"><img className="warehouse-details-list__arrow-back" src={arrowBackIcon} alt="arrow back" /> washington</h1>
          <button className="warehouse-details-list__button"><EditIcon color='#FFFFFF'/> <span className="warehouse-details-list__button-text">Edit</span></button>
        </div>
      </div>

      <div className="warehouse-details-information">
        <div className="warehouse-details-information__right">
          <div className="warehouse-details-information__item">
            <h4 className="warehouse-details-information__header">warehouse address:</h4>
            <p className="warehouse-details-information__text">300 Pearl Street SW, Washington, USA</p>
          </div>
        </div>
        <div className="warehouse-details-information__left">
          <div className="warehouse-details-information__item">
            <h4 className="warehouse-details-information__header">contact name:</h4>
            <p className="warehouse-details-information__text">Graeme Lyon</p>
            <p className="warehouse-details-information__text">Warehouse Manager</p>
          </div>
          <div className="warehouse-details-information__item">
            <h4 className="warehouse-details-information__header">contact information:</h4>
            <p className="warehouse-details-information__text">+1 (647) 504-0911</p>
            <p className="warehouse-details-information__text">glyon@instock.com</p>
          </div>
        </div>
      </div>

      <section className="warehouse-details-filter">
        <div className="warehouse-details-filter__container--warehouse-details">
          <h4 className="warehouse-details-filter__header">inventory item <img className="warehouse-details-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-details-filter__container--address">
          <h4 className="warehouse-details-filter__header">category <img className="warehouse-details-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-details-filter__container--contact-name">
          <h4 className="warehouse-details-filter__header">status <img className="warehouse-details-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-details-filter__container--contact-info">
          <h4 className="warehouse-details-filter__header">quantity <img className="warehouse-details-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-details-filter__container--actions">
          <h4 className="warehouse-details-filter__header--actions">actions</h4>
        </div>
      </section>

      <WarehouseItem />

    </section>
    </>
  );
};

export default WarehouseDetailsList;
