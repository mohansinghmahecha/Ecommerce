import React from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import SingleProduct from "../SingleProduct";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";

const AddToCard = ({ product }) => {
  const [color, setColor] = useState(null);
   const colors = product[0].colors;
   const stock = product[0].stock;
   const images = product[0].images;

  //const { id, colors, stock } = product;
  

  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  




  return (
    <Wrapper>
      <div>
      
       Colors:
       
        {colors.map((colord, ind) => {
          return (
            <button
              onClick={() => setColor(colord)}
              className={product === colord ? "btnStyle active" : "btnStyle"}
              key={ind}
              style={{
                backgroundColor: colord,
                width: "30px",
                height: "30px",
                margin: "5px",
                marginTop: "10px",
                borderRadius: "50%",
              }}
              
            >
            {color === colord ? <FaCheck className="checkStyle" /> : null}
              

            </button>
          );
        })}
      </div>

      {/* add to card is here */}

      <CartAmountToggle
      amount = {amount}
      setDecrease={setDecrease}
      setIncrease={setIncrease}
      />

      <NavLink to="/cart">
        <Button className="btn">Add To Cart</Button>
      </NavLink>

    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 3rem;
    color: #fff;
  }
  .activeclass {
    display: none;
  }
  .hideclass {
    display: block;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCard;
