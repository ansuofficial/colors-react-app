import { useState } from "react";

const Callback = ({ getColor }) => {
  const [activecolor, steActivecolor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    steActivecolor(value);
    getColor(value);
  };

  return (
    <div className="content-wrapper">
      <div>
        <div>
          <h3>
            This application accepts any valid color, example,
            <br /> color name, hexcidecimals color code, rgb, etc
          </h3>
          <div>
            <p>
              Enter a valid color below to change <br />
              the background of the web page 😎️
            </p>
          </div>
        </div>
      </div>
      <input
        type="text"
        onChange={handleChange}
        value={activecolor}
        placeholder="Enter any valid color name"
      />

      <footer>
        <div>
          &copy;{" "} All rights reserved &nbsp;
          <a href="https://ansucoder.vercel.app/" target="_blank">
            Ansu
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Callback;
