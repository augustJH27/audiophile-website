import React from "react";
import "./DetailHeadphones.css";
import Mark2 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import Example1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import Example2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import Example3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

const detailHeadphone = () => {
  return (
    <div>
      <span>Go Back</span>

      <div className="container-mark2">
        <div className="mark2-image">
          <img src={Mark2} alt="img" />
        </div>
        <div className="mark2-spect">
          <h3>NEW PRODUCT</h3>
          <h1>XX99 MARK I</h1>
          <h1>HEADPHONES</h1>

          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <span>$ 1,750</span>
          <div className="mark2-button">
            <div>1</div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="container-mark2">
        <div className="features-mark2">
          <h1>FEATURES</h1>
          <p>
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz. From the
            handcrafted microfiber ear cushions to the robust metal headband
            with inner damping element, the components work together to deliver
            comfort and uncompromising sound. Its closed-back design delivers up
            to 27 dB of passive noise cancellation, reducing resonance by
            reflecting sound to a dedicated absorber. For connectivity, a
            specially tuned cable is included with a balanced gold connector.
          </p>
        </div>

        <div className="include-mark2">
          <h1>IN THE BOX</h1>
          <p>
            <span>1x</span> Headphone Unit
          </p>
          <p>
            <span>2x</span> Replacement Earcups
          </p>
          <p>
            <span>1x</span> User Manual
          </p>
          <p>
            <span>1x</span> 3.5mm 5m Audio Cable
          </p>
        </div>
      </div>

      <div className="mark2-example">
        <div className="mark2-row">
          <img src={Example1} alt="img" />
          <img src={Example2} alt="img" />
        </div>

        <div>
          <img src={Example3} alt="img" />
        </div>
      </div>

      <div>YOU MAY ALSO LIKE</div>

      <div>
        <div>
          XX99 MARK II
          <button>SEE PRODUCT</button>
        </div>

        <div>
          XX59
          <button>SEE PRODUCT</button>
        </div>

        <div>
          ZX9 SPEAKER
          <button>SEE PRODUCT</button>
        </div>
      </div>

      <div>
        <div>
          <h4>HEADPHONES</h4>
          <span>SHOP</span>
        </div>
        <div>
          <h4>SPEAKER</h4>
          <span>SHOP</span>
        </div>
        <div>
          <h4>EARPHONE</h4>
          <span>SHOP</span>
        </div>
      </div>

      <div>
        <div>
          <h1>Bringing you the </h1>
          <h1>best audio gear</h1>

          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>gambarOrang</div>
      </div>
    </div>
  );
};

export default detailHeadphone;
