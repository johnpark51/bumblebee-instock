/* STYLES */
import "./InventoryItem.scss";
import deleteIcon from "@/assets/Icons/delete_outline-24px.svg";
import editIcon from "@/assets/Icons/edit-24px.svg";
import chevronIcon from "@/assets/Icons/chevron_right-24px.svg";

function InventoryItem() {
  return (
    <>
      <article className="inventory-details-item">
        <div className="inventory-details-item__container--inventory">
          <h3 className="inventory-details-item__header--tb inventory-details-item__header-link">
            {/* {item_name}{" "} */}
            item_name
            <img
              className="inventory-item__icon"
              src={chevronIcon}
              alt="chevron"
            />
          </h3>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">inventory item</h4>
            <h3 className="inventory-details-item__header--mb inventory-details-item__header-link">
              {/* {item_name}{" "} */}
              item_name
              <img
                className="inventory-item__icon"
                src={chevronIcon}
                alt="chevron"
              />
            </h3>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">category</h4>
            <p className="inventory-details-item__text">category{""}</p>
          </div>
        </div>
        <div className="inventory-details-item__container--address">
          <p className="inventory-details-item__text">category{""}</p>
        </div>
        <div className="inventory-details-item__container--contact-name">
          <div className="inventory-details-item__text inventory-item__text--tb">
            In Stock
            {/* <button */}
            {/*   className={ */}
            {/*     status === "In Stock" */}
            {/*       ? "inventory-details-item__pill inventory-details-item__pill--is" */}
            {/*       : "inventory-details-item__pill inventory-details-item__pill--oos" */}
            {/*   } */}
            {/* > */}
            {/*   {status} */}
            {/* </button> */}
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">status</h4>
            <div className="inventory-details-item__text">
              status
              {/* <button */}
              {/*   className={ */}
              {/*     status === "In Stock" */}
              {/*       ? "inventory-details-item__pill inventory-details-item__pill--is" */}
              {/*       : "inventory-details-item__pill inventory-details-item__pill--oos" */}
              {/*   } */}
              {/* > */}
              {/*   {status} */}
              {/* </button> */}
            </div>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">quantity</h4>
            <p className="inventory-details-item__text">500{""}</p>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">inventory</h4>
            <p className="inventory-details-item__text">inventory{""}</p>
          </div>
        </div>
        <div className="inventory-details-item__container--contact-info">
          <p className="inventory-details-item__text">500{""}</p>
        </div>
        <div className="inventory-details-item__container--contact-ware">
          <p className="inventory-details-item__text">inventory{""}</p>
        </div>
        <div className="inventory-details-item__container--actions">
          <button className="inventory-details-item__button">
            <img
              className="inventory-item__icon"
              src={deleteIcon}
              alt="delete"
            />
          </button>
          <button className="inventory-details-item__button">
            <img className="inventory-item__icon" src={editIcon} alt="edit" />
          </button>
        </div>
      </article>
      <div className="inventory-details-item-actions-mb">
        <button className="inventory-details-item__button">
          <img className="inventory-item__icon" src={deleteIcon} alt="delete" />
        </button>
        <button className="inventory-details-item__button">
          <img className="inventory-item__icon" src={editIcon} alt="edit" />
        </button>
      </div>
    </>
  );
}

export default InventoryItem;
