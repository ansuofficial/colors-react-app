import { useState } from "react";
import Callback from "./callback.jsx";

const App = () => {
  const [UIcolor, srtUIcolor] = useState(null);

  const getColor = (color) => {
    srtUIcolor(color);
  };

  return (
    <div className="App-content" style={{ backgroundColor: `${UIcolor}` }}>
      <Callback getColor={getColor} />
    </div>
  );
};

export default App;
