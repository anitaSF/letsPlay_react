import { Link } from "react-router-dom";

import logoTxt from '../../images/logo-text.webp';
import icon from '../../images/logo-img.webp';

function Welcome() {
    return (
        <>
            <main>
                <div className="head home">
                    <img className="logo-home" src={logoTxt} />
                    <img className="icon" src={icon} />
                </div>
                <div className="body">
                    <h2>Wellcome</h2>
                    <h3>Enter Let's Play and check the results of your favorite competitions!!!</h3>
                    <button>
                        <Link to="/results">See results</Link>
                    </button>
                </div>

            </main>
        </>
    )
}

export default Welcome;