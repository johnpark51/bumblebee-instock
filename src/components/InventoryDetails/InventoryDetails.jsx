import "./InventoryDetails.scss";
import axios from "axios";
import arrowLeft from "@/assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import EditIcon from "@/components/Icons/EditIcon";

function InventoryDetails() {
    
    // const navigation = useNavigate();

    // function handleEdit() {
    //   navigation(`/warehouse/edit/${id}`)
    // };
    //need to destructure id from inventory list before you can use this

    // onClick={() => { handleEdit() }} 
    //above goes into edit button

	return (
		<main className="inventory-details">
			<section className="inventory-details__top">
				{/* <Link to="/"> */}
					<img className="inventory-details__arrow" src={arrowLeft}></img>
				{/* </Link> */}
				<h1 className="inventory-details__title">Television</h1>
                <button className="inventory-details__button"><EditIcon color='#FFFFFF'/> <span className="inventory-details__button-text">Edit</span></button>
			</section>
			<div className="border"></div>
			<section className="inventory-details__bottom">
				<section className="inventory-details__left">
					<h4 className="inventory-details__subheaders">ITEM DESCRIPTION:</h4>
					<p className="inventory-details__text">
						This 50", 4K LED TV provides a crystal-clear picture and vivid
						colors.
					</p>
					<h4 className="inventory-details__subheaders">CATEGORY:</h4>
					<p className="inventory-details__text">Electronics</p>
				</section>
				<section className="inventory-details__right">
					<section className="inventory-details__right--top">
						<section className="inventory-details__status-section">
							<h4 className="inventory-details__subheaders">STATUS:</h4>
							<div className="inventory-details__status">
								<p className="inventory-details__text--status">IN STOCK</p>
							</div>
						</section>
						<section className="inventory-details__quantity-section">
							<h4 className="inventory-details__subheaders">QUANTITY:</h4>
							<p className="inventory-details__text">500</p>
						</section>
					</section>
					<h4 className="inventory-details__subheaders">WAREHOUSE:</h4>
					<p className="inventory-details__text">Manhattan</p>
				</section>
			</section>
		</main>
	);
}

export default InventoryDetails;
