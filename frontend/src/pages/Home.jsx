import Banner from "../assets/components/Banner/Banner";
import MyParallax from "../assets/components/Banner/Parallax";
import Navbar from "../assets/components/Navbar/Navbar";

function Home () {
    return(
        <div>
        <main className="principal">
            <Navbar />
            <Banner />
            <MyParallax />
        </main>
        
    </div>  
        
    )
    
}

export default Home