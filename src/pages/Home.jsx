import '../styles/home.css';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import View from '../components/View.jsx';


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


	return (
		
		<div className="home">

			
			<View/>

		</div>
		
	);
}; 