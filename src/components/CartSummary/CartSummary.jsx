import { faCancel, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CartSummary.css'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
const CartSummary = ({data, removeItem}) =>{
    
    return (
        <div className="cart-details">
                    <img className="cart-item-image" src={data.image} alt={data.name}/>
                <div className="cart-item-detail">
                    <h3>{data.name}</h3>
                    <p>{data.quantity} X {data.price}</p>
                </div>
                <FontAwesomeIcon style={{cursor: "pointer"}} onClick={() => removeItem(data.id)} icon={faTimes}/>
            </div>
    )
}
export default CartSummary;