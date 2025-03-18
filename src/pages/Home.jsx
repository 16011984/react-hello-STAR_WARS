import '../styles/home.css';
import CharacterView from '../components/Character/CharacterCarousel';



export const Home = () => {

    return (
        <div className="carrousel">

            <div className="list">
                <div 
                    className="item"
                    style={{
                        backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/Star_Wars_Logo.svg.png')"
                    }}
                >
                    <CharacterView />
                </div>
            </div>
        </div>
    );
};

export default Home;