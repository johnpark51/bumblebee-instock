import "./InventoryDetails.scss";
import arrowLeft from "@/assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@/components/Icons/EditIcon";

function InventoryDetails({
	inventory: {
		id,
		warehouse_name,
		item_name,
		description,
		category,
		quantity,
		status,
	},
}) {
	const navigation = useNavigate();

	const handleEdit = () => {
		navigation(`/inventory/edit/${id}`);
	};

	return (
		<main className="inventory-details">
			<section className="inventory-details__top">
				<Link to="/inventory">
					<img className="inventory-details__arrow" src={arrowLeft}></img>
				</Link>
				<h1 className="inventory-details__title">{item_name}</h1>
				<button onClick={handleEdit} className="inventory-details__button">
					<EditIcon color="#FFFFFF" />{" "}
					<span className="inventory-details__button-text">Edit</span>
				</button>
			</section>
			<div className="border"></div>
			<section className="inventory-details__bottom">
				<section className="inventory-details__left">
					<h4 className="inventory-details__subheaders">ITEM DESCRIPTION:</h4>
					<p className="inventory-details__text">{description}</p>
					<h4 className="inventory-details__subheaders inventory-details__subheaders--category">CATEGORY:</h4>
					<p className="inventory-details__text">{category}</p>
				</section>
				<section className="inventory-details__right">
					<section className="inventory-details__right--top">
						<section className="inventory-details__status-section">
							<h4 className="inventory-details__subheaders">STATUS:</h4>
							<button
								className={
									status === "In Stock"
										? "inventory-details-item__pill inventory-details-item__pill--is"
										: "inventory-details-item__pill inventory-details-item__pill--oos"
								}>
								{status}
							</button>
						</section>
						<section className="inventory-details__quantity-section">
							<h4 className="inventory-details__subheaders">QUANTITY:</h4>
							<p className="inventory-details__text inventory-details__text--quantity">{quantity}</p>
						</section>
					</section>
					<h4 className="inventory-details__subheaders">WAREHOUSE:</h4>
					<p className="inventory-details__text">{warehouse_name}</p>
				</section>
			</section>
		</main>
	);
}

export default InventoryDetails;
