import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../style/navbar.module.css";
import { GiShoppingCart } from "react-icons/gi";

export default function Navbar() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const car = localStorage.getItem("car");
    if (car) {
      setCart(JSON.parse(car));
      console.log(setCount);
    }
  }, []);

  console.log(cart);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.link_itens}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
      <div className="cart">
        <p>
          <GiShoppingCart />
          {`  Carrinho: ${cart.length} Itens `}
        </p>
      </div>
    </nav>
  );
}
