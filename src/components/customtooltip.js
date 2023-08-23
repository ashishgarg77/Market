export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div>
            {payload.map((pld) => (
              <div style={{ display: "inline-block", padding: 10 , backgroundColor: "#182D64", color: "white"}}>
                <div style={{ color:"#E5E5EF", fontSize:"14px" , fontWeight:"400"}}>{pld.name}</div>
                <div style={{fontweight:"700", fontSize:"16px", color:"white" }}>{pld.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };