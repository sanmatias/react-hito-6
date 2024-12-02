import React from 'react';
import Card from 'react-bootstrap/Card';
import './cardStyle.css'
import Button from 'react-bootstrap/Button';
import { PiEyesFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { useContext,useEffect } from 'react';
import { CartContext } from '../../contexts/cartContext';
function CardPizza(props){
  const {agregar} = useContext(CartContext)



      return (       
          <Card style={{ width: '18rem' ,height:'620px'}}>
            <Card.Img className='img' variant="top" src={props.img} />
            <Card.Body>
            <Card.Text className='titulo'>
           {props.name} 
              </Card.Text>
              <Card.Text className='titulo'>
           {props.desc} 
              </Card.Text>
              <Card.Text >
                <div className='subTitulo'>
                Ingredientes</div> <br />
                <div className='texto'>
                {props.ingrediets.join(", ")}
                </div>
              </Card.Text>
              <Card.Title className='precio'>Precio: ${props.price}</Card.Title>
<Card.Text className='botones'>
             
              <div>
            <Button variant="dark"  className=''> 
            Ver Más <PiEyesFill /></Button></div>
            <div>
            <Button variant="dark"  className='boton' onClick={() =>agregar(props.id,props.lista,props.pizzas)}> 
            Añadir <GiShoppingCart /> </Button>
            </div>
            </Card.Text>
            </Card.Body>    
          </Card>
      );
}

export default CardPizza