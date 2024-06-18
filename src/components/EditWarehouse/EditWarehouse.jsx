import "./EditWarehouse.scss";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";
import { useRef } from "react";

function EditWarehouse() {
	const inputWarehouse = useRef();
	const inputAddress = useRef();
	const inputCity = useRef();
	const inputCountry = useRef();
	const inputContact = useRef();
	const inputPosition = useRef();
	const inputPhoneNumber = useRef();
	const inputEmail = useRef();

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
						name="warehouseName"
						ref={inputWarehouse}></input>
					<label className="edit-warehouse__subheader">Street Address</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="33 Pearl Street SW"
						name="streetAddress"
						ref={inputAddress}></input>
					<label className="edit-warehouse__subheader">City</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Washington"
						name="city"
						ref={inputCity}></input>
					<label className="edit-warehouse__subheader">Country</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="USA"
						name="country"
						ref={inputCountry}></input>
				</section>
				<div className="border border--middle"></div>
				<section className="edit-warehouse__contact">
					<h2 className="edit-warehouse__header">Contact Details</h2>
					<label className="edit-warehouse__subheader">Contact Name</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Graeme Lyon"
						name="contactName"
						ref={inputContact}></input>
					<label className="edit-warehouse__subheader">Position</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="Warehouse Manager"
						name="position"
						ref={inputPosition}></input>
					<label className="edit-warehouse__subheader">Phone Number</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="+1(647)504-0911"
						name="phoneNumber"
						ref={inputPhoneNumber}></input>
					<label className="edit-warehouse__subheader">Email</label>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder="glyon@instock.com"
						name="email"
						ref={inputEmail}></input>
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
