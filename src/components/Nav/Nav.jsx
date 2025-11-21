import { Link } from "react-router-dom";
import { useCartContext} from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"category/dulce"}>Dulce</Link>
                </li>
                <li>
                    <Link to={"category/salado"}>Salado</Link>
                </li>
                <li>
                    <Link>Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};