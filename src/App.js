import "./style/index.css";
import Floor from "./component/Floor";
import { useEffect, useState } from "react";

const authFloor = [2, 4];
const authToken = "lift";

export default function App() {
  const [inputfloor, setInputFloor] = useState(5);
  const [totalFloor, setFloor] = useState(5);
  const [liftPosition, setLiftPosition] = useState(0);

  useEffect(() => {
    localStorage.setItem("authToken", authToken);
  }, []);

  const onHandleAddFloor = (inputfloor) => {
    if (!inputfloor.match(/[-]/)) {
      setFloor(5 + Number(inputfloor));

      liftPosition > 4 + Number(inputfloor) &&
        setLiftPosition(4 + Number(inputfloor));
    } else {
      alert("Please enter more than 0");
    }
  };

  const handleLiftPress = (floor) => {
    if (authFloor.includes(floor)) {
      const userInput = prompt("please enter toker");
      const originalToken = localStorage.getItem("authToken");
      if (userInput === originalToken) {
        setLiftPosition(floor);
      } else alert("Wrong Token");
    } else setLiftPosition(floor);
  };

  const showFloor = (inputfloor) => {
    let totalFloorArr = [];
    for (let i = 0; i < inputfloor; i++) {
      totalFloorArr.push(
        <Floor
          floorNumber={i}
          inputfloor={inputfloor}
          isLift={liftPosition === i}
          onUpCall={handleLiftPress}
          onDownCall={handleLiftPress}
        />
      );
    }
    return totalFloorArr.reverse();
  };

  return (
    <div className="App">
      <input
        type="number"
        value={inputfloor}
        onChange={(e) => setInputFloor(e.target.value)}
      />
      <button onClick={() => onHandleAddFloor(inputfloor)}>Add Floor</button>
      <div className="building">{showFloor(totalFloor)}</div>
    </div>
  );
}
