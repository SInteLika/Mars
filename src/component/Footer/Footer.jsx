import Logo1 from '../../assets/footer/logo1.svg?react'
import Logo2 from '../../assets/footer/logo2.svg?react'
import Logo3 from '../../assets/footer/logo3.svg?react'
import Logo4 from '../../assets/footer/logo4.svg?react'

export default function Footer() {

    return (
        <div className={'footer'}>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer__title">PARTNERS</div>
                    <div className="footer-company">
                        <Logo1 className={'footer-company__logo'}/>
                        <Logo2 className={'footer-company__logo'}/>
                        <Logo3 className={'footer-company__logo'}/>
                        <Logo4 className={'footer-company__logo'}/>
                    </div>
                    <div className="footer-mars">
                        <div className="footer-mars__text">Mars Colonization</div>
                        <div className="footer-mars-logo">
                            <img src="src/assets/footer/fb.svg" alt="" className="footer-mars-logo__img"/>
                            <img src="src/assets/footer/twitter.svg" alt="" className="footer-mars-logo__img"/>
                            <img src="src/assets/footer/in.svg" alt="" className="footer-mars-logo__img"/>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}