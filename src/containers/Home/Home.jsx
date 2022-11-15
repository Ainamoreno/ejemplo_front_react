import './Home.css'
import { useNavigate } from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();

    
return(
    <div className='homeDesign'>
        <div>
       <h2 className="divHome">¿Te apetece alquilar una película o serie?</h2> 
      </div>
    <div onClick={()=>navigate('./movies')}>Películas</div> 
    </div>
)
}

export default Home