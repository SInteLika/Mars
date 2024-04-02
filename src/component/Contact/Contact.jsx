import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {useState} from "react";
import ButtonFill from "../utils/ButtonFill.jsx";

export default function Contact() {
    const [name, setName] = useState('')
    return (
        <>
            <Header/>
            <div className={'contact'}>

                <div className="contact-header">
                    <div className="contact-header__title gradRedToYel">Contact Us Now</div>
                </div>
                <form action="" className={'contact-form'}>
                    <input type="text" className={'contact-form__name'}
                           placeholder={'Enter your name'}
                           maxLength={50}
                    />
                    <input type="text" className={'contact-form__email'}
                           placeholder={'Enter your Email'}
                           maxLength={50}
                    />
                    <div className="contact-form-message">
                        <textarea name="" id="" cols="30" rows="10"
                                  placeholder={'Message...'}></textarea>
                    </div>
                </form>

                <ButtonFill text={'Send'} className={'contact__btn'}/>


            </div>

            <Footer/>
        </>

    )
}
// C50E57