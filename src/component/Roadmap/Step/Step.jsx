export default function Step({text, position, last}) {
    return (
        <div className={'step'}>
            <img src="src/assets/roadmap/icon.svg" alt="" className="step__icon"/>
            <div className={last ? `step__lineLast` : 'step__line'}></div>
            <div className={'step-point ' + 'step-point_' + position}>
                <div className="step-point__title gradRedToYel">{text.title}</div>
                <div className={'step-point-wrapper'}>
                    {
                        text.descr.map((e, i) => <div key={i} className={'step-point__descr'}>{e}</div>)
                    }
                </div>
            </div>
        </div>
    )
}