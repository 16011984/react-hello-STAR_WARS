import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'// Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global 
import Home from './pages/Home';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';


const Main = () => {
    return (
        <React.StrictMode>

            <StoreProvider>

                <RouterProvider router={router}>

                    <Navbar />
                    <Footer />
                    <Home />

                </RouterProvider>

            </StoreProvider>

        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
