import "./AddWarehouse.scss";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddWarehouse() {
  const navigation = useNavigate();

  const inputWarehouse = useRef("");
  const inputAddress = useRef("");
  const inputCity = useRef("");
  const inputCountry = useRef("");
  const inputContact = useRef("");
  const inputPosition = useRef("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputEmail = useRef("");

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
	}
  };

  const handleInputChange = (event) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const postWarehouse = (event) => {
    event.preventDefault();
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if(validRegex.test(inputEmail.current.value.trim(""))) {
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
		  axios.post("http://localhost:8080/warehouses", updatedWarehouse);
      navigation("/")
	} else {
		return false;
	}
      };

  function handleCancel(e) {
    e.preventDefault();
    navigation("/");
  }

  return (
    <form onSubmit={postWarehouse} className="add-warehouse">
      <section className="add-warehouse__top">
        <Link  className="add-warehouse__link" to="/">
          <img className="add-warehouse__arrow" src={arrowLeft}></img>
        </Link>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </section>
      <div className="border"></div>
      <section className="add-warehouse__bottom">
        <section className="add-warehouse__warehouse">
          <h2 className="add-warehouse__header">Warehouse Details</h2>
          <label className="add-warehouse__subheader">Warehouse Name</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="Washington"
            name="warehouseName"
            ref={inputWarehouse}
			required
          ></input>
          <label className="add-warehouse__subheader">Street Address</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="33 Pearl Street SW"
            name="streetAddress"
            ref={inputAddress}
			required
          ></input>
          <label className="add-warehouse__subheader">City</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="Washington"
            name="city"
            ref={inputCity}
			required
          ></input>
          <label className="add-warehouse__subheader">Country</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="USA"
            name="country"
            ref={inputCountry}
			required
          ></input>
        </section>
		<div className="border border--middle"></div>
        <section className="add-warehouse__contact">
          <h2 className="add-warehouse__header">Contact Details</h2>
          <label className="add-warehouse__subheader">Contact Name</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="Graeme Lyon"
            name="contactName"
            ref={inputContact}
			required
          ></input>
          <label className="add-warehouse__subheader">Position</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="Warehouse Manager"
            name="position"
            ref={inputPosition}
			required
          ></input>
          <label className="add-warehouse__subheader">Phone Number</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="+1(647)504-0911"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
			required
          ></input>
          <label className="add-warehouse__subheader">Email</label>
          <input
            className="add-warehouse__input"
            type="text"
            placeholder="glyon@instock.com"
            name="email"
            ref={inputEmail}
			required
          ></input>
        </section>
      </section>
      <section className="add-warehouse__buttons">
        <button
          onClick={(e) => {
            handleCancel(e);
          }}
          className="add-warehouse__button add-warehouse__button--cancel"
        >
          Cancel
        </button>
        <button
          className="add-warehouse__button add-warehouse__button--submit"
          type="submit"
        >
          + Add Warehouse
        </button>
      </section>
    </form>
  );
}

export default AddWarehouse;
