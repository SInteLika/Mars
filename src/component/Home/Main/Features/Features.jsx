export default function Features() {

    return (
        <div className={'features'}>
            <div className="features__title">Features</div>
            <div className="features__img">
                <img src="src/assets/features/title.png" alt=""/>
            </div>
            <div className="features-list">
                <div className="features-list-item-wrapper">
                    <div className="features-list-item features-list-item_yellow">
                        <img src="src/assets/features/own.png" alt="" className="features-list-item__img"/>
                        <div className="features-list-item__title gradRedToYel"> Own & govern</div>
                        <div className="features-list-item__text">Your land is securely stored on the blockchain in the
                            form
                            of an NFT.
                        </div>
                    </div>
                    <img src="src/assets/features/orange1.png" alt="" className="features-list-item__orange1"/>
                </div>
                <div className="features-list-item features-list-item_yellow">
                    <img src="src/assets/features/build.png" alt="" className="features-list-item__img"/>
                    <div className="features-list-item__title gradRedToYel">Build</div>
                    <div className="features-list-item__text">You can create build any objects on your land such as
                        teleport dos, base stations, and breeding pods. To build on Land you need MRS token
                    </div>
                </div>
                <div className="features-list-item features-list-item_yellow">
                    <img src="src/assets/features/breed.png" alt="" className="features-list-item__img"/>
                    <div className="features-list-item__title gradRedToYel">Breed</div>
                    <div className="features-list-item__text">Take part in daily challenges and win rewards</div>
                </div>

                <div className="features-list-item features-list-item_red">
                    <img src="src/assets/features/battle.png" alt="" className="features-list-item__img"/>
                    <div className="features-list-item__title gradRedToYel"> Battle</div>
                    <div className="features-list-item__text">Unique battle mode in next seasons & Win ultra-rare
                        rewards.
                    </div>
                </div>
                <div className="features-list-item features-list-item_red">
                    <img src="src/assets/features/daily.png" alt="" className="features-list-item__img"/>
                    <div className="features-list-item__title gradRedToYel ">Daily Bonus</div>
                    <div className="features-list-item__text">Claim daily bonus by playing the game by playing daily

                    </div>
                </div>
                <div className="features-list-item-wrapper">
                    <div className="features-list-item features-list-item_red">
                        <img src="src/assets/features/trade.png" alt="" className="features-list-item__img"/>
                        <div className="features-list-item__title gradRedToYel">Trade</div>
                        <div className="features-list-item__text">You can buy and sell humanoids and other resources via
                            marketplaces
                        </div>
                    </div>
                    <img src="src/assets/features/orange1.png" alt="" className="features-list-item__orange2"/>
                </div>
            </div>

        </div>
    )
}