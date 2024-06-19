/* LOGIC */
import useWarehouses from "@/utils/hooks/useWarehouses";
import { useNavigate } from "react-router-dom";

/* STYLES */
import "./InventoryList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";

/* COMPONENTS */
import InventoryItem from "@/components/InventoryItem/InventoryItem";

function InventoryList({}) {
  const navigation = useNavigate();
  const { warehouses, error } = useWarehouses();

  function handleAddWarehouse() {
    navigation("/warehouse/add");
  }

  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="warehouse-details-list">
        <div className="warehouse-details-list__top">
          <div className="warehouse-details-list__top--left">
            <h1 className="warehouse-details-list__header">Inventory</h1>
            <div className="warehouse-list__top--right">
              <input
                className="warehouse-list__search"
                type="search"
                placeholder="search"
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
        </div>

        <section className="warehouse-details-filter">
          <div className="warehouse-details-filter__container--warehouse-details">
            <h4 className="warehouse-details-filter__header">
              inventory item{" "}
              <img
                className="warehouse-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="warehouse-details-filter__container--address">
            <h4 className="warehouse-details-filter__header">
              category{" "}
              <img
                className="warehouse-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="warehouse-details-filter__container--contact-name">
            <h4 className="warehouse-details-filter__header">
              status{" "}
              <img
                className="warehouse-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="warehouse-details-filter__container--contact-info">
            <h4 className="warehouse-details-filter__header">
              quantity{" "}
              <img
                className="warehouse-details-filter__icon"
                src={sortIcon}
                alt="sort"
              />
            </h4>
          </div>
          <div className="warehouse-details-filter__container--actions">
            <h4 className="warehouse-details-filter__header--actions">
              actions
            </h4>
          </div>
        </section>
        <InventoryItem />

        {/* {inventories.map((item) => { */}
        {/*   return <WarehouseDetailsListItem key={item.id} item={item} />; */}
        {/* })} */}
      </section>
    </>
  );
}

export default InventoryList;
