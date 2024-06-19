import "./EditWarehouse.scss";
import arrowLeft from "@/assets/Icons/arrow_back-24px.svg";
import { useRef, useState } from "react";
import axios from "axios";

function EditWarehouse() {
	const inputWarehouse = useRef();
	const inputAddress = useRef();
	const inputCity = useRef();
	const inputCountry = useRef();
	const inputContact = useRef();
	const inputPosition = useRef();
	const [phoneNumber, setPhoneNumber] = useState("");
	const inputEmail = useRef();

	const formatPhoneNumber = (phoneNumber) => {
		const cleaned = ("" + phoneNumber).replace(/\D/g, "");
		const match = cleaned.match(/^(\d{1,1})(\d{1,3})(\d{1,3})?(\d{1,4})?$/);
		if (match) {
			const part0 = match[1] ? "+" + match[1] : "";
			const part1 = match[2] ? " (" + match[2] : "";
			const part2 = match[3] ? ") " + match[3] : "";
			const part3 = match[4] ? "-" + match[4] : "";
			return [part0, part1, part2, part3].join("");
		}
		return phoneNumber;
	};

	const handleInputChange = (event) => {
		const formattedPhoneNumber = formatPhoneNumber(event.target.value);
		setPhoneNumber(formattedPhoneNumber);
	};

	const putWarehouse = (event) => {
		event.preventDefault();
		const updatedWarehouse = {
			warehouse_name: inputWarehouse.current.value,
			address: inputAddress.current.value,
			city: inputCity.current.value,
			country: inputCountry.current.value,
			contact_name: inputContact.current.value,
			contact_position: inputPosition.current.value,
			contact_phone: phoneNumber,
			contact_email: inputEmail.current.value,
		};
		axios.put("http://localhost:8080/warehouses/1", updatedWarehouse);
	};

	return (
		<form onSubmit={putWarehouse} className="edit-warehouse">
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
						value={phoneNumber}
						onChange={handleInputChange}></input>
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
