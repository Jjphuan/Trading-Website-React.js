import '../style/section.css';
import '../style/animation.css';

export default function Advertise() {
    
    return(
        <div className='bg-img' style={{position:'relative',overflow:'hidden'}}>
            <div>
                <img className='w-100' src="../assets/background.webp" alt="backgound" />
            </div>
            <div className='mountain'>
                <img className='w-100' src="../assets/mountain.png" alt="mountain" />
            </div>
            <div className='santa'>
                <img className='w-50' src="../assets/santa.png" alt="santa" />
            </div>
        </div>
    )
};
