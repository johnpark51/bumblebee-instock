import "./DeleteWarehouse.scss";
import axios from 'axios';
import { useState } from "react";

function DeleteWarehouse() {
    const deleteWarehouse = (event) => {
        event.preventDefault();
        axios.delete("http://localhost:8080/warehouses/1");
    }

	return (
		<form onSubmit={deleteWarehouse} className="delete-warehouse">
			<div className="delete-warehouse__top">
				<h1 className="delete-warehouse__header">
					Delete Washington warehouse?
				</h1>
				<p className="delete-warehouse__description">
					Please confirm that you'd like to delete the Washington from the list
					of warehouses. You won't be able to undo this action.
				</p>
			</div>
			<div className="delete-warehouse__buttons">
				<button className="delete-warehouse__button delete-warehouse__button--cancel">
					Cancel
				</button>
				<button type="submit" className="delete-warehouse__button delete-warehouse__button--delete">
					Delete
				</button>
			</div>
		</form>
	);
}

export default DeleteWarehouse;
