import '../styles/home.css';
import CharacterCarousel from '../components/Character/CharacterCarousel';



export const Home = () => {

  return (

    <div className='content'>

      
        <CharacterCarousel />
    
        <CharacterCarousel />
     
        <CharacterCarousel />
     
      

    </div>
  );
};

export default Home;