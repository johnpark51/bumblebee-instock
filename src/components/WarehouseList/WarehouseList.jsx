import useWarehouses from "@/utils/hooks/useWarehouses";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./WarehouseList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";

import WarehouseItem from "@/components/WarehouseItem/WarehouseItem";

function WarehouseList() {
  const [sort, setSort] = useState({ sort: "name", asc: "asc" });
  const navigation = useNavigate();
  const { warehouses, error } = useWarehouses(sort.sort, sort.asc);

  function handleAddWarehouse() {
    navigation("/warehouse/add");
  }

  function handleSort(sortBy) {
    setSort((prevSortBy) => {
      const sameSort = prevSortBy.sort === sortBy;
      console.log(sameSort);
      const order = sameSort && prevSortBy.asc === "asc" ? "desc" : "asc";
      console.log(order);
      return { sort: sortBy, asc: order };
    });
  }

  if (error) return <p>{error}</p>;

  return (
    <section className="warehouse-list" data-aos="fade-up">
      <div className="warehouse-list__top">
        <div className="warehouse-list__top--left">
          <h1 className="warehouse-list__header">warehouses</h1>
        </div>
        <div className="warehouse-list__top--right">
          <input
            className="warehouse-list__search"
            type="search"
            placeholder="Search..."
          />
          <button
            onClick={() => {
              handleAddWarehouse();
            }}
            role="link"
            className="warehouse-list__button"
          >
            + add new warehouse
          </button>
        </div>
      </div>

      <section className="warehouse-filter">
        <div
          className="warehouse-filter__container--warehouse"
          onClick={() => handleSort("name")}
        >
          <h4 className="warehouse-filter__header">
            warehouse{" "}
            <img className="warehouse-filter__icon" src={sortIcon} alt="sort" />
          </h4>
        </div>
        <div
          className="warehouse-filter__container--address"
          onClick={() => handleSort("address")}
        >
          <h4 className="warehouse-filter__header">
            address{" "}
            <img className="warehouse-filter__icon" src={sortIcon} alt="sort" />
          </h4>
        </div>
        <div
          className="warehouse-filter__container--contact-name"
          onClick={() => handleSort("contact")}
        >
          <h4 className="warehouse-filter__header">
            contact name{" "}
            <img className="warehouse-filter__icon" src={sortIcon} alt="sort" />
          </h4>
        </div>
        <div
          className="warehouse-filter__container--contact-info"
          onClick={() => handleSort("number")}
        >
          <h4 className="warehouse-filter__header">
            contact information{" "}
            <img className="warehouse-filter__icon" src={sortIcon} alt="sort" />
          </h4>
        </div>
        <div className="warehouse-filter__container--actions">
          <h4 className="warehouse-filter__header--actions">actions</h4>
        </div>
      </section>

      {warehouses &&
        warehouses.map((warehouse) => {
          return <WarehouseItem key={warehouse.id} warehouse={warehouse} />;
        })}
    </section>
  );
}

export default WarehouseList;
