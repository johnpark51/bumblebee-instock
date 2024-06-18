/* STYLES */
import "./WarehouseItem.scss";
import deleteIcon from "@/assets/Icons/delete_outline-24px.svg";
import editIcon from "@/assets/Icons/edit-24px.svg";
import chevronIcon from "@/assets/Icons/chevron_right-24px.svg";

function WarehouseItem() {
  return (
      <>
      <article className="warehouse-item">
        <div className="warehouse-item__container--warehouse">
          <h3 className="warehouse-item__header--tb">Manhattan <img className="warehouse-item__icon" src={chevronIcon} alt="chevron" /></h3>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">warehouse</h4>
            <h3 className="warehouse-item__header--mb">Manhattan <img className="warehouse-item__icon" src={chevronIcon} alt="chevron" /></h3>
          </div>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">address</h4>
            <p className="warehouse-item__text">503 Broadway</p>
            <p className="warehouse-item__text">New York, USA</p>
          </div>
        </div>
        <div className="warehouse-item__container--address">
          <p className="warehouse-item__text">503 Broadway</p>
          <p className="warehouse-item__text">New York, USA</p>
        </div>
        <div className="warehouse-item__container--contact-name">
          <p className="warehouse-item__text warehouse-item__text--tb">Parmin Aujla</p>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">contact name</h4>
            <p className="warehouse-item__text">Parmin Aujla</p>
          </div>
          <div className="warehouse-item__mb">
            <h4 className="warehouse-item__header">contact information</h4>
            <p className="warehouse-item__text">+1 (629) 555-0129</p>
            <p className="warehouse-item__text">paujla@instock.com</p>
          </div>
        </div>
        <div className="warehouse-item__container--contact-info">
          <p className="warehouse-item__text">+1 (629) 555-0129</p>
          <p className="warehouse-item__text">paujla@instock.com</p>
        </div>
        <div className="warehouse-item__container--actions">
          <button className="warehouse-item__button"><img className="warehouse-item__icon" src={deleteIcon} alt="delete" /></button>
          <button className="warehouse-item__button"><img className="warehouse-item__icon" src={editIcon} alt="edit" /></button>
        </div>
      </article>
      <div className="warehouse-item-actions-mb">
        <button className="warehouse-item__button"><img className="warehouse-item__icon" src={deleteIcon} alt="delete" /></button>
        <button className="warehouse-item__button"><img className="warehouse-item__icon" src={editIcon} alt="edit" /></button>
      </div>
      </>
  );
};

export default WarehouseItem;
