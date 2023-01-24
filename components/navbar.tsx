import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../style/navbar.module.css";
import { GiShoppingCart } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar() {
  const [count, setCount] = useState<any>(0);

  useEffect(() => {
    const checkCart: any = localStorage.getItem("car");
    if (checkCart) {
      setCount(JSON.parse(checkCart));
    }
  }, [count]);

  return (
    <nav className={styles.navbar}>
      <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link href="/cart" legacyBehavior>
            <a>Cart</a>
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
      <div className={styles.SuperCart}>
        <p className={styles.Cart}>
          <GiShoppingCart />
        </p>
        <p className={styles.CartName}>{`Carrinho: ${count.length} Itens`}</p>
      </div>
    </nav>
  );
}
