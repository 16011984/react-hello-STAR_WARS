import './charactercarousel.css'
import React from 'react';



const CharacterCarousel = () => {

    return (



        <div className="carousel">


            <div className="list">

                / ----NEXT----PREV----BUTTONS----//

                <div className='arrows'>
                    <bustton className='prev'> A </bustton>
                    <button className='next'> AA </button>
                    <div />
                </div>


                <div className="item" style={{ backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/luke-skywalker.jpg')" }} >
                    <div className="content">

                        <div className='name'> luke skywalker </div>
                        <div className='des'> Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </div>

                        <div className='btn'>
                            <button> Add to Favorites </button>
                            <button> Read More </button>
                        </div>
                    </div>
                </div>



                <div className="item"
                    style={{
                        backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/Yoda.jpg')"
                    }} >

                    <div className="content">

                        <div className='name'> Yoda </div>
                        <div className='des'> Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </div>

                        <div className='btn'>
                            <button> Add to Favorites </button>
                            <button> Read More </button>
                        </div>
                    </div>


                </div>

                <div className="item" style={{ backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/casian.jpeg')" }} >
                    <div className="content">

                        <div className='name'> Casian </div>
                        <div className='des'> Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </div>

                        <div className='btn'>
                            <button> Add to Favorites </button>
                            <button> Read More </button>
                        </div>
                    </div>
                </div>

                <div
                    className="item"
                    style={{
                        backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/R2D2.jpg')"
                    }} >

                    <div className="content">

                        <div className='name'> R2D2 </div>
                        <div className='des'> Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </div>

                        <div className='btn'>
                            <button> Add to Favorites </button>
                            <button> Read More </button>
                        </div>

                    </div>

                </div>

                <div
                    className="item"
                    style={{
                        backgroundImage: "url('https://raw.githubusercontent.com/16011984/react-hello-STAR_WARS/refs/heads/master/src/assets/img/vader.jpg')"
                    }} >

                    <div className="content">

                        <div className='name'> Darth Vader </div>
                        <div className='des'> Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </div>

                        <div className='btn'>
                            <button> Add to Favorites </button>
                            <button> Read More </button>
                        </div>

                    </div>
                </div>/





                // ----TIME----RUNNING---- //

                <div className='timeRunning'></div>


            </div>
        </div>
    )
};




export default CharacterCarousel;