import Step from "./Step/Step.jsx";

export default function Roadmap() {

    return (
        <div className={'roadmap'}>
            <div className="roadmap__title">Roadmap</div>
            <Step text={{
                title: 'Sep 2021',
                descr: ['Land NFT sale (BEP 721)']
            }}
                  position={'left'}/>

            <Step text={{
                title: 'Oct 2021',
                descr: ['Land staking', 'Governance token']
            }}
                  position={'right'}/>

            <Step text={{
                title: 'November 2021',
                descr: ['Marketplace', 'Introducing MRS token']
            }}
                  position={'left'}/>

            <Step text={{
                title: 'December 2021',
                descr: ['Use MRS token to', 'build stations and breeding pods', 'MRS Staking & rewards']
            }}
                  position={'right'}/>

            <Step text={{
                title: 'Jan -Mar 2022',
                descr: ['Marketplace', 'Breed humanoids', 'PVP humanoid battles']
            }}
                  position={'left'}/>

            <Step text={{
                title: 'April - May 2022',
                descr: ['Daily Challenges', 'Characters upgrades']
            }}
                  position={'right'} last={true}/>

        </div>
    )
}












