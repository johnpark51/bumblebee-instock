import "./EditWarehouse.scss";
import arrowLeft from "@/assets/Icons/arrow_back-24px.svg";
import { useRef, useState, useEffect } from "react";
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

	useEffect(() => {
		if (warehouse) {
			setPhoneNumber(warehouse.contact_phone)
		inputWarehouse.current.value = warehouse.warehouse_name
		inputAddress.current.value = warehouse.address
		inputCity.current.value = warehouse.city
		inputCountry.current.value = warehouse.country
		inputContact.current.value = warehouse.contact_name
		inputPosition.current.value = warehouse.contact_position
		inputEmail.current.value = warehouse.contact_email
		}
	}, [warehouse])

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
		axios.put(`http://localhost:8080/warehouses/${id}`, updatedWarehouse);
    navigation("/");
	};

  function handleCancel() {
    navigation("/");
  };

  if (error) return <p>{error}</p>

  if (warehouse)
	return (
		<form onSubmit={putWarehouse} className="edit-warehouse" data-aos="fade-up">
			<section className="edit-warehouse__top">
				<Link to="/"><img className="edit-warehouse__arrow" src={arrowLeft}></img></Link>
				<h1 className="edit-warehouse__title">Edit Warehouse</h1>
			</section>
			<div className="border"></div>
			<section className="edit-warehouse__bottom">
				<section className="edit-warehouse__warehouse">
					<h2 className="edit-warehouse__header">Warehouse Details</h2>
					<h3 className="edit-warehouse__subheader">Warehouse Name</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.warehouse_name}
						name="warehouseName"
						ref={inputWarehouse}></input>
					<h3 className="edit-warehouse__subheader">Street Address</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.address}
						name="streetAddress"
						ref={inputAddress}></input>
					<h3 className="edit-warehouse__subheader">City</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.city}
						name="city"
						ref={inputCity}></input>
					<h3 className="edit-warehouse__subheader">Country</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.country}
						name="country"
						ref={inputCountry}></input>
				</section>
				<div className="border border--middle"></div>
				<section className="edit-warehouse__contact">
					<h2 className="edit-warehouse__header">Contact Details</h2>
					<h3 className="edit-warehouse__subheader">Contact Name</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.contact_name}
						name="contactName"
						ref={inputContact}></input>
					<h3 className="edit-warehouse__subheader">Position</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.contact_position}
						name="position"
						ref={inputPosition}></input>
					<h3 className="edit-warehouse__subheader">Phone Number</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.contact_phone}
						name="phoneNumber"
						value={phoneNumber}
						onChange={handleInputChange}></input>
					<h3 className="edit-warehouse__subheader">Email</h3>
					<input
						className="edit-warehouse__input"
						type="text"
						placeholder={warehouse.contact_email}
						name="email"
						ref={inputEmail}></input>
				</section>
			</section>
			<section className="edit-warehouse__buttons">
				<button onClick={() => {
          handleCancel()
        }} className="edit-warehouse__button edit-warehouse__button--cancel">
					Cancel
				</button>
				<button
					className="edit-warehouse__button edit-warehouse__button--submit"
					type="submit">
					Save
				</button>
			</section>
		</form>
	)
}

export default EditWarehouse;
