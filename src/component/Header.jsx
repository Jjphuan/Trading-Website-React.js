import '../style/global_font.css';
import '../style/global_color.css';
import '../style/head.css';

export default function Header() {
    return (
        <div>
            <div className='d-flex w-100 header-height justify-content-between align-items-center py-3'>
                <div className='w-25 head-tagline h-100 d-flex align-items-center justify-content-center ps-5'>
                    LOGO
                </div>
                <div className='d-flex w-50 justify-content-center'>
                    <button className='rounded-1 PM bg-white btn-grey btn-pd me-3'>
                        Demo
                    </button>
                    <button className='rounded-1 PM bg-white btn-grey btn-pd me-3'>
                        Login
                    </button>
                    <button className='rounded-1 PM btn-grey btn-bg-red btn-pd'>
                        Sign up
                    </button>
                </div>
            </div>
            <hr style={{margin:0}}/>
            <div className='w-100 d-flex justify-content-center pt-2 pb-3'>
                <div className='d-flex PR w-50 justify-content-between'>
                    <p>Trading</p>
                    <p>Platforms</p>
                    <p>Client Tools</p> 
                    <p>Promotions</p>
                    <p>Research</p>
                    <p>Partnerships</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
};
