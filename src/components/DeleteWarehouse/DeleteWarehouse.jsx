import "./DeleteWarehouse.scss";
import axios from "axios";

function DeleteWarehouse({ open, onClose, id, warehouse_name }) {

	const deleteWarehouse = (event) => {
		axios.delete(`http://localhost:8080/warehouses/${id}`);
	};

	if (!open) return null;

	return (
		<div onSubmit={deleteWarehouse} onClick={onClose} className="overlay" data-aos="fade-down">
			<form
				onClick={(e) => {
					e.stopPropagation();
				}}
				onSubmit={deleteWarehouse}
				className="delete-warehouse">
				<div className="delete-warehouse__top">
					<h1 className="delete-warehouse__header">
						Delete {warehouse_name} warehouse?
					</h1>
					<p className="delete-warehouse__description">
						Please confirm that you'd like to delete the {warehouse_name} warehouse from
						the list of warehouses. You won't be able to undo this action.
					</p>
				</div>
				<div className="delete-warehouse__buttons">
					<button
						onClick={onClose}
						className="delete-warehouse__button delete-warehouse__button--cancel">
						Cancel
					</button>
					<button
						type="submit"
						className="delete-warehouse__button delete-warehouse__button--delete">
						Delete
					</button>
				</div>
			</form>
		</div>
	);
}

export default DeleteWarehouse;
