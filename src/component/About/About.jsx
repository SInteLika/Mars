import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Our from "./Our/Our.jsx";
import Features from "./Features/Features.jsx";

export default function About(){

    return (
        <div className={'about'}>
            <Header/>
            <Our/>
            <Features/>
            <Footer/>
        </div>
    )
}