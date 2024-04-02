import Header from "../Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Token from "./Token/Token.jsx";
import Roadmap from "../Roadmap/Roadmap.jsx";
import Footer from "../Footer/Footer.jsx";
export default function Home() {
    return (
        <div className="home">
            <Header/>
            <Main/>
            <Token/>
            <Roadmap/>
            <Footer/>
        </div>
    )
}

