import React, { useState, useEffect } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import styles from "../style/styles.module.css";

export async function getStaticProps() {
  let data = [];
  const url = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=celular"
  );
  const res = await url.json();
  data = res.results;
  return {
    props: {
      data,
    },
    revalidate: 30,
  };
}

export default function Home({ data }) {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const car = localStorage.getItem("car");
    if (car) {
      setCart(JSON.parse(car));
    }
  }, []);

  useEffect(() => {
    const favorite = localStorage.getItem("favorite");
    if (favorite) {
      setFavorite(JSON.parse(favorite));
    }
  }, []);
  const handleClick = (obj: any) => {
    if (!obj.id) return;
    const element = cart.find((e) => e.id === obj.id);
    if (!element) {
      setCart([obj, ...cart]);
      localStorage.setItem("car", JSON.stringify([obj, ...cart]));
    } else {
      const arrayFilter = cart.filter((e: { id: any }) => e.id !== obj.id);
      setCart(arrayFilter);
      localStorage.setItem("car", JSON.stringify(arrayFilter));
    }
  };

  const handleClicke = (obj: any) => {
    if (!obj.id) return;
    const element = favorite.find((e) => e.id === obj.id);
    if (!element) {
      setFavorite([obj, ...favorite]);
      localStorage.setItem("favorite", JSON.stringify([obj, ...favorite]));
    } else {
      const arrayFilter = favorite.filter((e: { id: any }) => e.id !== obj.id);
      setFavorite(arrayFilter);
      localStorage.setItem("favorite", JSON.stringify(arrayFilter));
    }
  };

  return (
    <div className={styles.Product}>
      {data.map(
        (e: {
          id: React.Key;
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal;
          thumbnail: string;
          price: number;
        }) => (
          <div key={e.id} className={styles.newProduct}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="Cel Photo" />
            <h4>{`R$ ${e.price}`}</h4>

            <div className={styles.Container}>
              <button onClick={() => handleClick(e)} className={styles.Button}>
                {cart.some(
                  (itemCart: { id: React.Key }) => itemCart.id === e.id
                ) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartPlusFill />
                )}
              </button>
              <button onClick={() => handleClicke(e)} className={styles.Button}>
                {favorite.some(
                  (itemFavorite: { id: React.Key }) => itemFavorite.id === e.id
                ) ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
