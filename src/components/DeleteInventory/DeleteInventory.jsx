import "./DeleteInventory.scss";
import axios from "axios";

function DeleteInventory({ open, onClose, id, item_name }) {

	const deleteInventory = (event) => {
		axios.delete(`http://localhost:8080/inventories/${id}`);
	};

	if (!open) return null;

	return (
		<div onSubmit={deleteInventory} onClick={onClose} className="overlay" data-aos="fade-down">
			<form
				onClick={(e) => {
					e.stopPropagation();
				}}
				onSubmit={deleteInventory}
				className="delete-inventory">
				<div className="delete-inventory__top">
					<h1 className="delete-inventory__header">
						Delete {item_name} inventory?
					</h1>
					<p className="delete-inventory__description">
						Please confirm that you'd like to delete the {item_name} inventory from
						the list of inventory. You won't be able to undo this action.
					</p>
				</div>
				<div className="delete-inventory__buttons">
					<button
						onClick={onClose}
						className="delete-inventory__button delete-inventory__button--cancel">
						Cancel
					</button>
					<button
						type="submit"
						className="delete-inventory__button delete-inventory__button--delete">
						Delete
					</button>
				</div>
			</form>
		</div>
	);
}

export default DeleteInventory;
