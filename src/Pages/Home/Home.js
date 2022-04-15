import imagen from "../../Assets/Images/fondo.jpg";
import "../css/Home.css";

const Home = () =>
{  
    return (        
        <div className="home-main">
            <img src={imagen} className="img-fluid rounded mx-auto d-block"/>        
        </div>
    )   
}

export default Home;
