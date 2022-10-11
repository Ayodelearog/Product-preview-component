import "./preview-card.css"
import { BrowserRouter as Router, Link } from "react-router-dom"



export const PreviewCard = () => {



    return (
        <div className="main">
            
            <div className="preview-card-container">
                <div className="preview-card-main">

                    <div className="preview-card-image">
                    </div>

                    <div className="preview-card-text">
                        <p id="perfume">PERFUME</p>
                        <h1 id="main-text">Gabrielle Essence Eau De Parfum</h1>
                        <p id="long-text">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                            Perfumer-Creator for the House of CHANEL.
                        </p>
                        <div className="prices">
                            <h1 id="new-price">$149.99</h1>
                            <p id="old-price">$169.99</p>
                        </div>
                        <button type="button" id="add-to-cart">Add to Cart</button>
                    </div>

                </div>

                <Router>
                <div className="attribution">
                    <p id="challenge">Challenge by <Link to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link></p>
                    <p id="name-of-dev">Coded by <Link to="https://github.com/Ayodelearog">Ayodele Arogundade</Link></p>
                </div>
                </Router>
                
            </div>
        </div>
    )
}