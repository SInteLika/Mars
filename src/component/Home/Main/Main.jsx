import Button from "../../utils/Button.jsx";
import Features from "./Features/Features.jsx";
import ButtonFill from "../../utils/ButtonFill.jsx";

export default function Main() {
    return (
        <div className="home-main">
            <div className="container">
                <div className="home-main__line"></div>
                <div className="home-main__title gradRedToYel">Mars Colonization</div>
                <div className="home-main__description">Red Planet, New Frontier: Pioneering Mars for
                    a Better Tomorrow.
                </div>
                <div className="home-main-footer">
                    <div className="home-main-footer__line"></div>
                    <div className="home-main-footer__btn">
                        <ButtonFill />
                    </div>
                </div>
                <div className="home-land">
                    <img src="src/assets/landIcon.svg" alt="" className="home-land__icon"/>
                    <div className="home-land__title">Land in MarsColony</div>
                    <div className="home-land__text">
                        Mars land is split into twenty-one thousand tokenized plots of land, called MarsColony MC
                        tokens, which can be claimed by players and early investors starting from September 2021.
                        Owners of the land can upgrade and customize their territory to build base stations and breeding
                        pods
                        Resources spread across MarsColony land can be used to upgrade both objects built on land and
                        characters.
                    </div>
                    <div className="home-land-buttons">
                        <Button text={'Whitepaper'}/>
                        <Button text={'Token Metrics '}/>
                    </div>
                </div>
                {/*<Features/>*/}
            </div>
        </div>
    )
}