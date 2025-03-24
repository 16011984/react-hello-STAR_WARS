import '../styles/home.css';
import  '../components/Character/Character.js';
import CharacterView from '../components/Character/CharacterCarousel';



export const Home = () => {

    return (

        <div className='content'>
          <CharacterView />
        </div>
    );
};

export default Home;