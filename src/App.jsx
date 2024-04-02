import './App.css'
import Home from "./component/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Support from "./component/Support/Support.jsx";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/support'} element={<Support/>}/>
            <Route path={'*'} element={<Home/>}/>
        </Routes>
    )
}

export default App
