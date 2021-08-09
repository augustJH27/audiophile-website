import React, { useEffect, useRef, useState } from "react";
import "./checkout.css";
import { Formik, Form } from "formik";
import ft1 from "../../assets/ft1.jpg";
import ft2 from "../../assets/ft2.jpg";
import ft3 from "../../assets/ft3.jpg";
import Modal from "react-modal";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [emoneyNo, setEmoneyNo] = useState("");
  const [emoneyPin, setEmoneyPin] = useState("");
  const [payment, setPayment] = useState("");
  const [checkModal, setCheckModal] = useState(false);

  const nameRef = useRef();

  if (name === "") {
  }

  return (
    <div>
      <p className="checkout-go">Go Back</p>
      <div className="main">
        <div className="container">
          <p className="checkout-title">CHECKOUT</p>
          <p className="checkout-bil">BILLING DETAILS</p>
          <div className="sec-1">
            <div className="checkout-name">
              <p className="lbl-name">Name</p>
              <input
                value={name}
                ref={nameRef}
                type="text"
                className="input-name"
                placeholder="Alexei Ward"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-email">
              <p className="lbl-email">Email Address</p>
              <input
                type="text"
                className="input-email"
                placeholder="Alexei@mail.com"
              />
            </div>
          </div>
          <div className="checkout-phone">
            <label className="lbl-phone">Phone Number</label>
            <br />
            <input
              type="text"
              className="input-phone"
              placeholder="+1 202-555-0136"
            />
          </div>
          <p className="checkout-ship">SHIPPING INFO</p>
          <div className="checkout-address">
            <label className="lbl-address">Address</label>
            <br />
            <input
              className="input-address"
              placeholder="1137 Williams Avenue"
              type="text"
            />
          </div>
          <div className="sec-1">
            <div className="checkout-zip">
              <label className="lbl-zip">ZIP Code</label>
              <br />
              <input type="text" className="input-zip" placeholder="11011" />
            </div>
            <div className="checkout-city">
              <label className="lbl-city">City</label>
              <br />
              <input
                type="text"
                className="input-city"
                placeholder="New York"
              />
            </div>
          </div>
          <div className="checkout-country">
            <label className="lbl-country">Country</label>
            <br />
            <input
              type="text"
              className="input-country"
              placeholder="United State"
            />
          </div>
          <p className="checkout-pay">PAYMENT DETAILS</p>
          <div className="sec-1">
            <p className="checkout-method">Payment Method</p>
            <div
              className="radio-sec1"
              style={
                payment === "E-Money"
                  ? { border: "1px solid rgba(216, 125, 74, 1)" }
                  : { border: "1px solid #cfcfcf" }
              }
            >
              <input
                checked={payment === "E-Money"}
                value="E-Money"
                onClick={() => setPayment("E-Money")}
                type="radio"
                className="radio-emo"
                name="method"
              />
              <label className="radio-lbl-emo" for="emoney">
                e-Money
              </label>
            </div>
          </div>
          <div>
            <div
              className="radio-sec2"
              style={
                payment === "Cash on Delivery"
                  ? { border: "1px solid rgba(216, 125, 74, 1)" }
                  : { border: "1px solid #cfcfcf" }
              }
            >
              <input
                checked={payment === "Cash on Delivery"}
                value="Cash on Delivery"
                onClick={() => setPayment("Cash on Delivery")}
                type="radio"
                className="radio-cod"
                name="method"
              />
              <label className="radio-lbl-cod" for="cod">
                Cash on Delivery
              </label>
            </div>
          </div>
          <div className="sec-1">
            <div className="checkout-zip">
              <label className="lbl-zip">e-Money Number</label>
              <br />
              <input type="text" className="input-zip" placeholder="11011" />
            </div>
            <div className="checkout-city">
              <label className="lbl-city">e-Money PIN</label>
              <br />
              <input
                type="password"
                className="input-city"
                placeholder="2251"
              />
            </div>
          </div>
        </div>
        <div className="container-2">
          <p className="summ">SUMMARY</p>
          <div className="sum1">
            <img src={ft1} className="ft1" alt="ft1" />
            <p className="prod-name">
              XX99 MK II<p className="prod-hrg">$ 2,999</p>
            </p>
            <p className="prod-qty"> x1</p>
          </div>
          <div className="sum1">
            <img src={ft2} className="ft1" alt="ft1" />
            <p className="prod-name">
              XX59<p className="prod-hrg">$ 899</p>
            </p>
            <p className="prod-qty1"> x2</p>
          </div>
          <div className="sum1">
            <img src={ft3} className="ft1" alt="ft1" />
            <p className="prod-name">
              XY1<p className="prod-hrg">$ 599</p>
            </p>
            <p className="prod-qty2"> x1</p>
          </div>
          <div className="prod-1">
            <p className="prod-p">TOTAL</p>
            <p className="prod-h">$ 5,396</p>
          </div>
          <div className="prod-2">
            <p className="prod-p">SHIPPING</p>
            <p className="prod-h1"> $ 40</p>
          </div>
          <div className="prod-3">
            <p className="prod-p">VAT (INCLUDE)</p>
            <p className="prod-h2"> $ 1,079</p>
          </div>
          <div className="prod-4">
            <p className="prod-p">GRAND TOTAL</p>
            <p className="prod-h3"> $ 5,446</p>
          </div>
          <button onClick={() => setCheckModal(true)} className="prod-5">
            CONTINUE & PAY
          </button>
        </div>
      </div>
      <Modal isOpen={checkModal} onRequestClose={() => setCheckModal(false)}>
        <div className="circle">
          <p className="check-check">✔</p>
        </div>
        <p className="check-ty">
          THANK YOU <br /> FOR YOUR ORDER
        </p>
        <p className="check-you">
          You will receive an email confirmation shortly.
        </p>
        <div className="check-fl">
          <div className="check-kiri">
            <div className="check-kr">
              <img src={ft1} className="ff1" alt="ff1" />
              <p className="check-kr1">
                XX99 MK II<p className="check-kr3">$ 2,999</p>
              </p>
              <p className="check-kr2">x1</p>
            </div>
            <hr />
            <p className="andtwo">and 2 other item(s)</p>
          </div>

          <div className="check-kanan">
            <p className="check-gr">GRAND TOTAL</p>
            <p className="check-gra">$ 5,446</p>
          </div>
        </div>
        <div className="btn-back">
          <p className="tul-back">BACK TO HOME</p>
        </div>
      </Modal>
    </div>
  );
}

export default Checkout;
