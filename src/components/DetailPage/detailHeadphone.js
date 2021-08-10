import React, { Fragment } from "react";
import "./DetailHeadphones.css";
import Mark2 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import Example1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import Example2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import Example3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import Headphone2 from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import Headphone3 from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import Speaker1 from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import Product1 from "../assets/category-headphones/desktop/image-xx99-mark-one.png";
import Product2 from "../assets/category-speakers/desktop/image-zx9.png";
import Product3 from "../assets/category-earphones/desktop/image-yx1-earphones.png";
import { product } from "prelude-ls";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const detailHeadphone = () => {
  return (
    <div className="detail">
      <div className="kembali">
        <span>Go Back</span>
      </div>

      <div className="container-mark2">
        <div className="mark2-image">
          <img src={Mark2} alt="img" />
        </div>
        <div className="mark2-spect">
          <h6>NEW PRODUCT</h6>
          <h1>XX99 MARK I</h1>
          <h1>HEADPHONES</h1>

          <p className="spect">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <div className="price-mark2">$ 1,750</div>

          <div className="mark2-button">
            <div className="btn-jumlah">
              <div className="counter">
                <div className="counter-min">-</div>
                <div>1</div>
                <div className="counter-max">+</div>
              </div>
            </div>
            <button className="btn-add">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="container-features-mark2">
        <div className="features-mark2">
          <h1 className="features-titel">FEATURES</h1>
          <p className="features-desc">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        <div className="include-mark2">
          <h1 className="features-titel">IN THE BOX</h1>
          <p>
            <span className="include-item">1x</span> Headphone Unit
          </p>
          <p>
            <span className="include-item">2x</span>Replacement Earcups
          </p>
          <p>
            <span className="include-item">1x</span> User Manual
          </p>
          <p>
            <span className="include-item">1x</span> 3.5mm 5m Audio Cable
          </p>
        </div>
      </div>

      <div className="mark2-example">
        <div className="mark2-row">
          <img src={Example1} className="example1img" alt="img" />
          <img src={Example2} className="example3img" alt="img" />
        </div>

        <div>
          <img src={Example3} className="example2img" alt="img" />
        </div>
      </div>

      <div className="like-item-titel">YOU MAY ALSO LIKE</div>

      <div className="card-item-container">
        <div className="card-like">
          <img src={Headphone2} alt="1" className="like-item" />
          <p className="item-name">XX99 MARK I</p>
          <button className="btn-add">SEE PRODUCT</button>
        </div>

        <div className="card-like">
          <img src={Headphone3} alt="1" className="like-item" />
          <p className="item-name">XX59</p>
          <button className="btn-add">SEE PRODUCT</button>
        </div>

        <div className="card-like">
          <img src={Speaker1} alt="1" className="like-item" />
          <p className="item-name">ZX9 SPEAKER</p>
          <button className="btn-product">SEE PRODUCT</button>
        </div>
      </div>

      <div className="card-produk">
        <div className="card-bg">
          <img src={Product1} alt="pict" className="produck-lain" />

          <div className="card-name">
            <h4>HEADPHONES</h4>
            <span>SHOP</span>
          </div>
        </div>
        <div className="card-bg">
          <img src={Product2} alt="pict" className="produck-lain" />

          <div className="card-name">
            <h4>SPEAKER</h4>
            <span>SHOP</span>
          </div>
        </div>
        <div className="card-bg">
          <img src={Product3} alt="pict" className="produck-lain" />

          <div className="card-name">
            <h4>EARPHONE</h4>
            <span>SHOP</span>
          </div>
        </div>
      </div>

      <div className="marketing">
        <div className="marketing-desc">
          <h4>
            bringing you the <span className="kataWarna">best</span> audio gear
          </h4>
          <p className="marketing-word">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img src={Example1} alt="pict" className="orang" />
        </div>
      </div>
    </div>
  );
};

export default detailHeadphone;
