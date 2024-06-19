/* LOGIC */
import { Link, useNavigate } from "react-router-dom";

/* STYLES */
import "./WarehouseItem.scss";
import deleteIcon from "@/assets/Icons/delete_outline-24px.svg";
import editIcon from "@/assets/Icons/edit-24px.svg";
import chevronIcon from "@/assets/Icons/chevron_right-24px.svg";
import DeleteWarehouse from "@/components/DeleteWarehouse/DeleteWarehouse";
import { useState } from "react";

function WarehouseItem({ warehouse: { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } }) {
	const [openModal, setOpenModal] = useState(false);

  const navigation = useNavigate();

  function handleClickEdit(id) {
    navigation(`/warehouse/edit/${id}`)
  };

  function handleClickDelete(id) {
    navigation(`/warehouse/delete/${id}`);
  };

  return (
      <>
	  <DeleteWarehouse open={openModal} onClose={() => setOpenModal(false)}/>
      <article className="warehouse-item">
        <div className="warehouse-item__container--warehouse">
          <Link to={`/warehouse/${id}`} className="warehouse-item__header--tb"><h3 className="warehouse-item__header--tb">{warehouse_name} <img className="warehouse-item__icon" src={chevronIcon} alt="chevron" /></h3></Link>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">warehouse</h4>
            <Link to={`/warehouse/${id}`} className="warehouse-item__header--mb"><h3 className="warehouse-item__header--mb">{warehouse_name} <img className="warehouse-item__icon" src={chevronIcon} alt="chevron" /></h3></Link>
          </div>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">address</h4>
            <p className="warehouse-item__text">{address}</p>
            <p className="warehouse-item__text">{city} {country}</p>
          </div>
        </div>
        <div className="warehouse-item__container--address">
          <p className="warehouse-item__text">{address}</p>
          <p className="warehouse-item__text">{city} {country}</p>
        </div>
        <div className="warehouse-item__container--contact-name">
          <p className="warehouse-item__text warehouse-item__text--tb">{contact_name}</p>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">contact name</h4>
            <p className="warehouse-item__text">{contact_name}</p>
          </div>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">contact information</h4>
            <p className="warehouse-item__text">{contact_phone}</p>
            <p className="warehouse-item__text">{contact_email}</p>
          </div>
        </div>
        <div className="warehouse-item__container--contact-info">
          <p className="warehouse-item__text">{contact_phone}</p>
          <p className="warehouse-item__text">{contact_email}</p>
        </div>
        <div className="warehouse-item__container--actions">
          <button onClick={() => {
            handleClickDelete(id)
			      setOpenModal(true)
          }} className="warehouse-item__button"><img className="warehouse-item__icon" src={deleteIcon} alt="delete" /></button>
          <button onClick={() => {
            handleClickEdit(id)
          }} className="warehouse-item__button"><img className="warehouse-item__icon" src={editIcon} alt="edit" /></button>
        </div>
      </article>
      <div className="warehouse-item-actions-mb">
        <button onClick={() => {
          handleClickDelete(id)
        }} className="warehouse-item__button"><img className="warehouse-item__icon" src={deleteIcon} alt="delete" /></button>
        <button onClick={() => {
          handleClickEdit(id)
        }} className="warehouse-item__button"><img className="warehouse-item__icon" src={editIcon} alt="edit" /></button>
      </div>
      </>
  );
};

export default WarehouseItem;
