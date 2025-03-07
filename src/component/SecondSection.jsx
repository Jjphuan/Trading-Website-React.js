import '../style/global_font.css';
import '../style/global_color.css';
import '../style/head.css';

export default function SecondSection() {
    return(
        <div className='my-5' style={{position:'relative'}}>
            <div className="d-flex justify-content-between" style={{position:'relative', right:'10%',width:'115%'}}>
                <img className="ani-img1" src={`assets/bull.png`} alt="" />
                <img className="ani-img2" src={`assets/bear.png`} alt="" />
            </div>
            <div className="service-border rounded-4 w-75 bg-white py-4 px-5">
                <div className='w-50'>
                    <p className='H1 ft-red'>Brand Introduce</p>
                    <p className='H1'>100% Stocks & <br />0% Commission</p>
                    <p className='H3S'>Get exactly what you're paying for the commission-free stock investing</p>
                </div>
                <button className='rounded-1 PM btn-grey btn-bg-red btn-pd mt-5'>
                    Explore
                </button>
            </div>
            <div className='serviece-sub-border1 rounded-4 px-4 py-3 bg-white'>
                <p className='PB'>The Perfect Environment For Expert Advisors(EA)</p>
                <p className='PM'>We've built the perfect environment for EAs to thrive - we allow scalping, 
                hedging, news trading and more. No requotes and no minimum stop loss distance.</p>
            </div>
            <div className='serviece-sub-border2 rounded-4 px-4 py-3 bg-white'>
                <p className='PB'>Instant Deposits <br/>Fast Withdrawals</p>
                <p className='PM'>Fund your account easily and security through our wide range of payment options. 
                Your funds are held security in Tier 1 banks.</p>
            </div>
        </div>
    )
};
