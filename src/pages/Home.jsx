import '../styles/home.css';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


	return (
		
		<div className="home">

			<Card/>

		</div>
		
	);
}; 