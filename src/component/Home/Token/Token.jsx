export default function Token() {

    return (
        <div className={'token'}>
            <div className="container">
                <div className="token-wrapper">
                    <div className="token-header">
                        <img src="/images/token/icon-left.svg" alt="" className="token-header__left"/>
                        <div className="token-header__title">MRS token</div>
                        <img src="/images/token/2.svg" alt="" className="token-header__right"/>
                    </div>
                    <div className="token__text">
                        MRS token is the main in-game currency. It will be used for trading, exchanging, improving the
                        humanoids and their special qualities, mainly in the first phase.
                    </div>
                    <div className="token__contact">
                        Official Contract address: <span
                        className={'gradRedToYel'}>xx0xfb62ae373aca027177d1c<wbr/>18ee0862817f9080d08</span>
                    </div>
                </div>
            </div>
        </div>
    )
}