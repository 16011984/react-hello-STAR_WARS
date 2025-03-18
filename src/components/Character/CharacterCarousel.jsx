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