import './charactercarousel.css'
import CharacterCard from './CharacterCard';

const CharacterView = () => {

    return (

        <div className="carousel">


            <div className="list">

                <div className="item" style={{ backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/luke-skywalker.jpg')" }} >
                </div>



                <div className="item"
                    style={{
                        backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/Yoda.jpg')"
                    }} >

                    <div className="content">

                       
                        <div className='name'> Name: </div>
                        <div className='des'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </div>

                        <div className='btn'>
                        <button className= "btn1"> Favorites </button>
                        <button className= "btn2"> See More </button>
                        </div>

                    </div>


                </div>

                <div className="item" style={{ backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/casian.jpeg')" }} >
                </div>

                <div
                    className="item"
                    style={{
                        backgroundImage: "uhttps://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/R2D2.jpg')"
                    }} >
                </div>

                <div
                    className="item"
                    style={{
                        backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/vader.jpg')"
                    }} >



                </div>
            </div>

        </div>
    )
};




export default CharacterView;