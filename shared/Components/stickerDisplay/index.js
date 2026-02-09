export default function DisplayUi(){
    return(
        <div class="mainBox" style={{
            backgroundColor: "#dcbbdf",
            width: "380px",
            height: "450px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            padding: "30px"
        }}>
            <img src="https://i.pinimg.com/1200x/4c/60/f7/4c60f76d59e46b6a93898fbd0677e43c.jpg" alt="image" style={{
                backgroundColor: "white",
                alignItems: "flex-start",
                width: "100%",
                height: "70%",
                borderRadius: "10px",
                border: "10px solid white"
            }}></img>
            <div class="titleName" style={{
                padding: "10px",
            }}>Title</div>
            <div class="descriptionName" style={{
                padding: "10px"
            }}>Description</div>
        </div>
    )
}