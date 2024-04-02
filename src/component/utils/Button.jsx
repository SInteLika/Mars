import {useEffect, useRef} from "react";

export default function Button({text}) {
    const rhombus = useRef()
    let anim
    useEffect(() => {
        anim = rhombus.current.animate([
            {
                translate: '0 0'
            },
            {
                translate: '0 -5px'
            },
            {
                translate: '0 0'
            }

        ], {
            duration: 1500,
            easing: 'ease-out',
            iterations: Infinity
        })
        anim.pause()
    }, [])


    function startAnimate() {
        anim.play()
        anim.effect.updateTiming({
            iterations: Infinity
        })
    }

    function endAnimate() {
        anim.effect.updateTiming({
            iterations: anim.effect.getComputedTiming().currentIteration + 1
        })
    }

    return (
        <div className={'btn-wrapper'}>
            <svg onMouseEnter={startAnimate}
                 onMouseLeave={endAnimate}
                 className={'btn'} width="237" height="84" viewBox="0 0 237 84" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_3_403" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M190.48 22.9087C191.731 22.9087 192.797 23.7487 193.681 24.6328L203.889 34.8409C205.841 36.7935 209.007 36.7935 210.96 34.8409L221.168 24.6328C222.052 23.7487 223.118 22.9087 224.368 22.9087H231.727C234.488 22.9087 236.727 25.1473 236.727 27.9087V78.9995C236.727 81.761 234.488 83.9995 231.727 83.9995H5C2.23858 83.9995 0 81.761 0 78.9995V27.9087C0 25.1473 2.23858 22.9087 5 22.9087H190.48Z"/>
                </mask>
                <path
                    d="M193.681 24.6328L192.267 26.047L192.267 26.047L193.681 24.6328ZM203.889 34.8409L202.475 36.2551L202.475 36.2551L203.889 34.8409ZM210.96 34.8409L212.374 36.2551L212.374 36.2551L210.96 34.8409ZM221.168 24.6328L222.582 26.047L222.582 26.047L221.168 24.6328ZM190.48 24.9087C190.85 24.9087 191.401 25.1819 192.267 26.047L195.095 23.2186C194.192 22.3155 192.611 20.9087 190.48 20.9087V24.9087ZM192.267 26.047L202.475 36.2551L205.303 33.4266L195.095 23.2186L192.267 26.047ZM202.475 36.2551C205.208 38.9887 209.64 38.9887 212.374 36.2551L209.546 33.4266C208.374 34.5982 206.475 34.5982 205.303 33.4266L202.475 36.2551ZM212.374 36.2551L222.582 26.047L219.754 23.2186L209.546 33.4266L212.374 36.2551ZM222.582 26.047C223.447 25.1819 223.999 24.9087 224.368 24.9087V20.9087C222.237 20.9087 220.657 22.3155 219.754 23.2186L222.582 26.047ZM224.368 24.9087H231.727V20.9087H224.368V24.9087ZM231.727 24.9087C233.384 24.9087 234.727 26.2518 234.727 27.9087H238.727C238.727 24.0427 235.593 20.9087 231.727 20.9087V24.9087ZM234.727 27.9087V78.9995H238.727V27.9087H234.727ZM234.727 78.9995C234.727 80.6564 233.384 81.9995 231.727 81.9995V85.9995C235.593 85.9995 238.727 82.8655 238.727 78.9995H234.727ZM231.727 81.9995H5V85.9995H231.727V81.9995ZM5 81.9995C3.34315 81.9995 2 80.6564 2 78.9995H-2C-2 82.8655 1.13401 85.9995 5 85.9995V81.9995ZM2 78.9995V27.9087H-2V78.9995H2ZM2 27.9087C2 26.2518 3.34315 24.9087 5 24.9087V20.9087C1.13401 20.9087 -2 24.0427 -2 27.9087H2ZM5 24.9087H190.48V20.9087H5V24.9087Z"
                    fill="url(#paint0_linear_3_403)" mask="url(#path-1-inside-1_3_403)"/>
                <rect ref={rhombus} x="192.436" y="15.1194" width="21.3818" height="21.3818" rx="5"
                      transform="rotate(-45 192.436 15.1194)" fill="url(#paint1_linear_3_403)"/>
                <defs>
                    <linearGradient id="paint0_linear_3_403" x1="2.03437" y1="58.6905" x2="236.751" y2="54.9277"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C71458"/>
                        <stop offset="1" stopColor="#FEDF67"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3_403" x1="192.62" y1="27.643" x2="213.825" y2="27.5553"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C71458"/>
                        <stop offset="1" stopColor="#FEDF67"/>
                    </linearGradient>
                </defs>

                <text className={'btn__text'} x="50%" y="70%" textAnchor={'middle'} fill={'white'}>
                    {text}
                </text>
            </svg>
        </div>
    )
}


