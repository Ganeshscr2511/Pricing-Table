export function Pricing(props) {
  return (
    <div className="Price-component">
      <div className="header">
        <h3 className="title">{props.name}</h3>
        <h2 className="titlePrice">{props.price}</h2><span>/ month</span>
        <hr />
      </div>
      <div className="main">
        {props.type.map((type) => (

          <div className="sub-list">
            {(type.available) ?
              <>
                <img src="./tick.png" alt="available-icon"  className="available-icon" />
                <span className="">{type.name}</span>
              </> :
              <>
                <img src="./close.png" alt="available-icon" className="available-icon unavailable-icon" />
                <span className="unavailable-icon">{type.name}</span>
              </>}

          </div>
        ))}
        
      </div>
      <button className="btn"> Button </button>
    </div>
  );
}
