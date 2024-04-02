import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ButtonFill from "../utils/ButtonFill.jsx";
import Question from "./Question/Question.jsx";

export default function Support() {

    return (
        <>
            <Header/>

            <div className="support">
                <div className="support-header">
                    <div className="support-header__title gradRedToYel">Get Our Support</div>
                </div>

                <div className="support-hello">
                    <div className="support-hello__title">Hello how can we help ?</div>
                    <div className="support-hello__subTitle">We are available 24/7</div>
                    <input type="text" className="support-hello__input" placeholder={'Enter your query'}
                           maxLength={95}/>
                    <ButtonFill text={'Get Support'} className={'support-hello__btn'}/>
                </div>

                <div className="support-faq">
                    <div className="support-faq__title gradRedToYel">FAQ’s</div>
                    <div className="support-faq-questions">
                        <Question
                            text={'1. What is Mars colonization, and why are humans planning to establish a presence on Mars?'}/>
                        <Question text={'2. How will humans survive on Mars? What challenges do they face?'}/>}
                        <Question
                            text={'3. How will colonization affect Mars\' environment and potential for future scientific research?'}/>
                        <Question text={'4. What are the timelines and international cooperation involved in Mars colonization?'} />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
