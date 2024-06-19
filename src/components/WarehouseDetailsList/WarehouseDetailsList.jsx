/* LOGIC */
import { Link, useNavigate } from "react-router-dom";

/* STYLES */
import "./WarehouseDetailsList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";
import arrowBackIcon from "@/assets/Icons/arrow_back-24px.svg";

/* COMPONENTS */
import WarehouseDetailsListItem from "@/components/WarehouseDetailsListItem/WarehouseDetailsListItem";
import EditIcon from "@/components/Icons/EditIcon";

function WarehouseDetailsList({ warehouse: { id, warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email, inventories } }) {

  const navigation = useNavigate();

  function handleEdit() {
    navigation(`/warehouse/edit/${id}`)
  };

  return (
    <>
    <section className="warehouse-details-list">
      <div className="warehouse-details-list__top">
        <div className="warehouse-details-list__top--left">
          <h1 className="warehouse-details-list__header">
              <Link to="/">
                <img className="warehouse-details-list__arrow-back" src={arrowBackIcon} alt="arrow back" />
              </Link>
              {warehouse_name}
            </h1>
          <button onClick={() => { handleEdit() }} className="warehouse-details-list__button"><EditIcon color='#FFFFFF'/> <span className="warehouse-details-list__button-text">Edit</span></button>
        </div>
      </div>

      <div className="warehouse-details-information">
        <div className="warehouse-details-information__right">
          <div className="warehouse-details-information__item">
            <h4 className="warehouse-details-information__header">warehouse address:</h4>
            <p className="warehouse-details-information__text">{address} {city}, {country}</p>
          </div>
        </div>
        <div className="warehouse-details-information__left">
          <div className="warehouse-details-information__item">
            <h4 className="warehouse-details-information__header">contact name:</h4>
            <p className="warehouse-details-information__text">{contact_name}</p>
            <p className="warehouse-details-information__text">{contact_position}</p>
          </div>
          <div className="warehouse-details-information__item">
            <h4 className="warehouse-details-information__header">contact information:</h4>
            <p className="warehouse-details-information__text">{contact_phone}</p>
            <p className="warehouse-details-information__text">{contact_email}</p>
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

      {inventories.map((item) => {
          return  <WarehouseDetailsListItem key={item.id} item={item} />
        })}

    </section>
    </>
  );
};

export default WarehouseDetailsList;
