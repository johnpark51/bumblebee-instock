/* LOGIC */
import useInventories from "@/utils/hooks/useInventories";
import { useNavigate } from "react-router-dom";

/* STYLES */
import "./InventoryList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";

/* COMPONENTS */
import InventoryItem from "@/components/InventoryItem/InventoryItem";

function InventoryList({}) {
  const navigation = useNavigate();
  const { inventories, error } = useInventories();

  function handleAddWarehouse() {
    navigation("/inventory/add");
  }

  if (error) return <p>{error}</p>;
  return (
    <>
      <section className="inventory-details-list">
        <div className="inventory-details-list__top">
          <div className="inventory-details-list__top--left">
            <h1 className="inventory-details-list__header">Inventory</h1>
          </div>
          <div className="inventory-details-list__top--right">
            <input
              className="inventory-details-list__search"
              type="search"
              placeholder="search"
            />
            <button
              onClick={() => {
                handleAddWarehouse();
              }}
              role="link"
              className="inventory-details-list__button"
            >
              + add new item
            </button>
          </div>
        </div>

        <section className="inventory-details-filter">
          <div className="inventory-details-filter__container--inventory-details">
            <h4 className="inventory-details-filter__header">
              inventory item{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="inventory-details-filter__container--address">
            <h4 className="inventory-details-filter__header">
              category{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="inventory-details-filter__container--contact-name">
            <h4 className="inventory-details-filter__header">
              status{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="inventory-details-filter__container--contact-info">
            <h4 className="inventory-details-filter__header">
              qty{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="inventory-details-filter__container--contact-ware">
            <h4 className="inventory-details-filter__header">
              warehouse{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="inventory-details-filter__container--actions">
            <h4 className="inventory-details-filter__header--actions">
              actions
            </h4>
          </div>
        </section>
        <div className="growth">
          {inventories &&
            inventories.map((item) => {
              return <InventoryItem key={item.id} item={item} />;
            })}
        </div>
      </section>
    </>
  );
}

export default InventoryList;
