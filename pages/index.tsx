import React, { useState, useEffect } from "react";
import { getItem, setItem } from "../services/localStorage";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Product } from "../style/style";

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
  };
}

export default function Home({ data }, key: string, fallbackValue: string) {
  const [dados, setDados] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  // useEffect(() => {
  //   const item = localStorage.getItem("key");
  //   setCart(item ? JSON.parse(item) : fallbackValue);
  // }, [fallbackValue, key]);

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(cart));
  // }, [key, cart]);

  const handleClick = (obj: any) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrayFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrayFilter);
    } else {
      setCart([...cart, obj]);
      setItem("car", [...cart, obj]);
    }
  };

  const handleClicke = (obj: { id: any }) => {
    const element = favorite.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = favorite.filter((e) => e.id !== obj.id);
      setFavorite(arrFilter);
      setItem("favorite", arrFilter);
    } else {
      setFavorite([...favorite, obj]);
      setItem("favorite", [...favorite, obj]);
    }
  };
  return (
    <div>
      <Product>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="Cel Photo" />
            <h4>{`R$ ${e.price}`}</h4>
            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
            <button onClick={() => handleClicke(e)}>
              {favorite.some((itemFavorite) => itemFavorite.id === e.id) ? (
                <MdOutlineFavorite />
              ) : (
                <MdFavoriteBorder />
              )}
            </button>
          </div>
        ))}
      </Product>
    </div>
  );
}
