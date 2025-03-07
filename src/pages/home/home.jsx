import React from "react";
import CardPizza from "../cardPizza/cardPizza";
import './homeStyle.css'
import Header from "../header/header";
import { useState,useEffect, useContext } from "react";
import pizzaCard from "../pizzaCard/pizzaCard";
const pizzas = await pizzaCard() 
import { CartContext } from "../../contexts/cartContext";
function Home(){
    const {pizzasCliente,sumaTotal} = useContext(CartContext)

    useEffect(() => {
        console.log(pizzasCliente)
        sumaTotal(pizzasCliente)
      }, [pizzasCliente]);

    return(
        <>
        <div>
        <Header />
      </div>
        <div className="grilla">
    {pizzas.map((pizza,indice) =>
    <CardPizza  key={pizza.id} className="card"
    name={pizza.name}
    price={pizza.price}
    desc={pizza.desc}
    img={pizza.img}
    ingrediets={pizza.ingredients}
    id={pizza.id}
    lista={pizzasCliente}
    pizzas={pizzas}

    />
    )}
    </div>
   
</>   
    )}
 
export default Home;