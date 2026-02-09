export default function gallery(){
    return (
        
        <div style={{
                backgroundColor: "#898989",
                width: "265px",
                height: "265px",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "10px"
            }}>

            <div style={{
              marginLeft: "20px",
              marginTop: "15px",
            }}>
                <img src="https://placecats.com/100/100"></img>
                <div>TITLE</div>
            </div>

            <div style={{
            marginLeft: "20px",
            marginTop: "15px",
            }}>
                <img src="https://placecats.com/100/100"></img>
                <div>TITLE</div>
            </div>

            <div style={{
            marginLeft: "20px",
            }}>
                <img src="https://placecats.com/100/100"></img>
                <div>TITLE</div>
            </div>

            <div style={{
            marginLeft: "20px",
            }}>
                <img src="https://placecats.com/100/100"></img>
                <div>TITLE</div>
            </div>
        </div>
    )
}