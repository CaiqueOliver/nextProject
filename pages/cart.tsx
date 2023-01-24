import React, { useState, useEffect, ReactNode } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import styles from "../style/cart.module.css";
import Navbar from "../components/navbar";
import Head from "next/head";

interface CartItem {
  title: string;
  thumbnail: string;
  id: string;
  name: string;
  price: number;
}

function cart() {
  const [data, setData] = useState<CartItem[]>([]);
  useEffect(() => {
    const cart: any = localStorage.getItem("car");
    if (cart) {
      setData(JSON.parse(cart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("car", JSON.stringify(data));
  }, [data]);

  const removeItem = (obj: string) => {
    const newRemoveItem = data.filter((e) => e.id !== obj);
    setData(newRemoveItem);
    localStorage.setItem("car", JSON.stringify(newRemoveItem));
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);
  const total = subTotal.toFixed(2);

  return (
    <>
      <Head>
        <title>Checkout Cart - Loja</title>
      </Head>
      <Navbar />
      <div>
        <h5 className={styles.Total}>{`Subtotal: R$ ${total}`}</h5>
        <div className={styles.Cart}>
          {data.map((e) => (
            <div key={e.id} className={styles.newCart}>
              <h6>{e.title}</h6>
              <img src={e.thumbnail} alt={e.title} />
              <h6>{`R$ ${e.price}`}</h6>

              <button
                onClick={() => removeItem(e.id)}
                className={styles.cartButton}
              >
                <BsFillCartDashFill />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default cart;
