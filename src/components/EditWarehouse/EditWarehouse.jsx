import "./EditWarehouse.scss";

function EditWarehouse() {
	return (
		<form className="edit-warehouse">
			<section>
                <img className=""></img>
				<h1 className="edit-warehouse__title">Edit Warehouse Component</h1>
				<div className="border"></div>
			</section>
			<section className="edit-warehouse__warehouse">
				<h3 className="edit-warehouse__header">Warehouse Details</h3>
				<h4 className="edit-warehouse__subheader">Warehouse Name</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="Washington"
					name="warehouseName"></input>
				<h4 className="edit-warehouse__subheader">Street Address</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="33 Pearl Street SW"
					name="streetAddress"></input>
				<h4 className="edit-warehouse__subheader">City</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="Washington"
					name="city"></input>
				<h4 className="edit-warehouse__subheader">Country</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="USA"
					name="country"></input>
			</section>
			<section className="edit-warehouse__contact">
				<h3 className="edit-warehouse__header">Contact Details</h3>
				<h4 className="edit-warehouse__subheader">Contact Name</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="Graeme Lyon"
					name="contactName"></input>
				<h4 className="edit-warehouse__subheader">Position</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="Warehouse Manager"
					name="position"></input>
				<h4 className="edit-warehouse__subheader">Phone Number</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="+1(647)504-0911"
					name="phoneNumber"></input>
				<h4 className="edit-warehouse__subheader">Email</h4>
				<input
					className="edit-warehouse__input"
					type="text"
					placeholder="glyon@instock.com"
					name="email"></input>
			</section>
			<section>
				<button>Cancel</button>
				<button type="submit">Save</button>
			</section>
		</form>
	);
}

export default EditWarehouse;
