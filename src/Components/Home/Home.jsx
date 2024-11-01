import { Outlet , useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'

const Home = () => {

    let navigation = useNavigation() ;

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' 
                ? 'Loading...' 
                : <div className="outlet"> <Outlet></Outlet> </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;