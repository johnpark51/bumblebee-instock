import useInventories from "@/utils/hooks/useInventories";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./InventoryList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";

import InventoryItem from "@/components/InventoryItem/InventoryItem";

function InventoryList() {
  const [sort, setSort] = useState({ sort: "name", asc: "asc" });
  const navigation = useNavigate();
  const { inventories, error } = useInventories(sort.sort, sort.asc);

  function handleAddWarehouse() {
    navigation("/inventory/add");
  }

  function handleSort(sortBy) {
    setSort((prevSortBy) => {
      const sameSort = prevSortBy.sort === sortBy;
      const order = sameSort && prevSortBy.asc === "asc" ? "desc" : "asc";
      return { sort: sortBy, asc: order };
    });
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
              placeholder="Search..."
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
          <div
            className="inventory-details-filter__container--inventory-details"
            onClick={() => handleSort("name")}
          >
            <h4 className="inventory-details-filter__header">
              inventory item{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div
            className="inventory-details-filter__container--address"
            onClick={() => handleSort("category")}
          >
            <h4 className="inventory-details-filter__header">
              category{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div
            className="inventory-details-filter__container--contact-name"
            onClick={() => handleSort("status")}
          >
            <h4 className="inventory-details-filter__header">
              status{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div
            className="inventory-details-filter__container--contact-info"
            onClick={() => handleSort("quantity")}
          >
            <h4 className="inventory-details-filter__header">
              qty{" "}
              <img
                className="inventory-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div
            className="inventory-details-filter__container--contact-ware"
            onClick={() => handleSort("warehouse")}
          >
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
            inventories.map((inventory) => {
              return <InventoryItem key={inventory.id} inventory={inventory} />;
            })}
        </div>
      </section>
    </>
  );
}

export default InventoryList;
