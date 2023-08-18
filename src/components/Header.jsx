import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const ff = useSelector((state) => state.cart);
  console.log(ff.cartItems.length);
  return (
    <nav>
      <h2>Logo Here.</h2>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{ff.cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
