import "./EditWarehouse.scss";
import arrowLeft from "@/assets/Icons/arrow_back-24px.svg";
import { useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useWarehouse from "@/utils/hooks/useWarehouse.js";
import axios from "axios";

function EditWarehouse() {
	const { id } = useParams();
	const navigation = useNavigate();
	const { warehouse, error } = useWarehouse();
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
		} else {
			return phoneNumber;
		}
	};

	const handleInputChange = (event) => {
		const formattedPhoneNumber = formatPhoneNumber(event.target.value);
		setPhoneNumber(formattedPhoneNumber);
	};

	const putWarehouse = (event) => {
		event.preventDefault();
		const updatedWarehouse = {
			warehouse_name: inputWarehouse.current.value.trim(" "),
			address: inputAddress.current.value.trim(" "),
			city: inputCity.current.value.trim(" "),
			country: inputCountry.current.value.trim(" "),
			contact_name: inputContact.current.value.trim(" "),
			contact_position: inputPosition.current.value.trim(" "),
			contact_phone: phoneNumber.trim(" "),
			contact_email: inputEmail.current.value.trim(" "),
		};
		axios.put(`http://localhost:8080/warehouses/${id}`, updatedWarehouse);
		navigation("/");
	};

	function handleCancel(e) {
		e.preventDefault();
		navigation("/");
	}

	if (error) return <p>{error}</p>;

	if (warehouse)
		return (
			<form onSubmit={putWarehouse} className="edit-warehouse">
				<section className="edit-warehouse__top">
					<Link to="/">
						<img className="edit-warehouse__arrow" src={arrowLeft}></img>
					</Link>
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
							placeholder={warehouse.warehouse_name}
							name="warehouseName"
							required
							ref={inputWarehouse}
							></input>
						<label className="edit-warehouse__subheader">Street Address</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.address}
							name="streetAddress"
							required
							ref={inputAddress}></input>
						<label className="edit-warehouse__subheader">City</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.city}
							name="city"
							required
							ref={inputCity}></input>
						<label className="edit-warehouse__subheader">Country</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.country}
							name="country"
							required
							ref={inputCountry}></input>
					</section>
					<div className="border border--middle"></div>
					<section className="edit-warehouse__contact">
						<h2 className="edit-warehouse__header">Contact Details</h2>
						<label className="edit-warehouse__subheader">Contact Name</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.contact_name}
							name="contactName"
							required
							ref={inputContact}></input>
						<label className="edit-warehouse__subheader">Position</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.contact_position}
							name="position"
							required
							ref={inputPosition}></input>
						<label className="edit-warehouse__subheader">Phone Number</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.contact_phone}
							name="phoneNumber"
							required
							value={phoneNumber}
							onChange={handleInputChange}></input>
						<label className="edit-warehouse__subheader">Email</label>
						<input
							className="edit-warehouse__input"
							type="text"
							placeholder={warehouse.contact_email}
							name="email"
							required
							ref={inputEmail}></input>
					</section>
				</section>
				<section className="edit-warehouse__buttons">
					<button
						onClick={(e) => {
							handleCancel(e);
						}}
						className="edit-warehouse__button edit-warehouse__button--cancel">
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
