const Floor = ({ isLift, onDownCall, onUpCall, floorNumber, inputfloor }) => {
  return (
    <div className="floor">
      <div className="liftContainer">
        {isLift && <div className="lift"></div>}
      </div>
      {`Floor number - ${floorNumber === 0 ? "ground" : floorNumber}`}
      <div className="btnGroup">
        {inputfloor - 1 !== floorNumber && (
          <button onClick={() => onUpCall(floorNumber)}>up</button>
        )}
        {floorNumber !== 0 && (
          <button onClick={() => onDownCall(floorNumber)}>down</button>
        )}
      </div>
    </div>
  );
};

export default Floor;
