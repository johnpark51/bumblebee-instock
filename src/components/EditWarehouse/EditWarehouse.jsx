import "./EditWarehouse.scss";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";

function EditWarehouse() {
	return (
		<form className="edit-warehouse">
			<section className="edit-warehouse__top">
				<img className="edit-warehouse__arrow" src={arrowLeft}></img>
				<h1 className="edit-warehouse__title">Edit Warehouse</h1>
			</section>
			<div className="border"></div>
			<section className="edit-warehouse__bottom">
				<section className="edit-warehouse__warehouse">
					<h2 className="edit-warehouse__header">Warehouse Details</h2>
					<label className="edit-warehouse__subheader">Warehouse Name</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Washington"
						name="warehouseName"></input>
					<label className="edit-warehouse__subheader">Street Address</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="33 Pearl Street SW"
						name="streetAddress"></input>
					<label className="edit-warehouse__subheader">City</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Washington"
						name="city"></input>
					<label className="edit-warehouse__subheader">Country</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="USA"
						name="country"></input>
				</section>
				<div className="border border--middle"></div>
				<section className="edit-warehouse__contact">
					<h2 className="edit-warehouse__header">Contact Details</h2>
					<label className="edit-warehouse__subheader">Contact Name</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Graeme Lyon"
						name="contactName"></input>
					<label className="edit-warehouse__subheader">Position</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Warehouse Manager"
						name="position"></input>
					<label className="edit-warehouse__subheader">Phone Number</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="+1(647)504-0911"
						name="phoneNumber"></input>
					<label className="edit-warehouse__subheader">Email</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="glyon@instock.com"
						name="email"></input>
				</section>
			</section>
			<section className="edit-warehouse__buttons">
				<button className="edit-warehouse__button edit-warehouse__button--cancel">
					Cancel
				</button>
				<button
					className="edit-warehouse__button edit-warehouse__button--submit"
					type="submit">
					Save
				</button>
			</section>
		</form>
	);
}

export default EditWarehouse;
