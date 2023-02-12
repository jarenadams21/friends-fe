import { Container } from "react-bootstrap";
import logo from "./map.png";
import safety from "./safety-icon.png";
import snowboard from "./robots.png";
import world from "./world.png";

function WhyTAPCard() {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
            <a
                className="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl no-underline"
            >
                <div className="logo">
          <img src={logo} width="26" />
        </div>

                <h3 className="mt-3 text-xl font-bold text-white">Location Based</h3>

                <p className="mt-4 text-sm text-gray-300">
                    TAP uses geolocation to find plans and potential friends near you.
                </p>
            </a>
            </div>
            <div>
            <a
                className="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl no-underline"
            >
                <div className="safety">
          <img src={safety} width="37" />
        </div>

                <h3 className="mt-3 text-xl font-bold text-white">Freedom of Selection</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Not only can you create plans with locations and time, you can choose who joins.
                </p>
            </a>
            </div>
            <div>
            <a
                className="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl no-underline"
            >
                <div className="snowboard">
          <img src={snowboard} width="41" />
        </div>

                <h3 className="mt-3 text-xl font-bold text-white">Tailored To Your Interests</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Select your interests to generate a curated feed that suits your taste.
                </p>
            </a>
            </div>
            <div>
            <a
                className="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl no-underline"
            >
                <div className="world">
          <img src={world} width="41" />
        </div>

                <h3 className="mt-3 text-xl font-bold text-white">Build Community</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Discover meaningful relationships and build a network of your new friends!
                </p>
            </a>
            </div>
            </div>

        </Container>
        

    );
}

export default WhyTAPCard;