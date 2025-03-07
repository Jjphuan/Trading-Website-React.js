import bank_image from '../Json/bank_image.json';
import service from '../Json/service.json';
import '../style/section.css';
import '../style/global_font.css';

export default function FirstSection() {

    let brand = bank_image.path;
    let services = service.service;

    return(
        <div className='w-100'>
            <div className='d-flex w-100 justify-content-center pt-1'>
                {
                    brand.map((img,index)=>(
                        <div key={index}>
                            <img className='bank-img' src={`/assets/brands/${img}`} alt={img} />
                        </div>
                    ))
                }
            </div>
            <div className='w-100 pb-5'>
                <div className='w-50 d-flex flex-column align-items-center pt-5'>
                    <div>
                        <p className='H2 ft-red' style={{margin:0}}>Access To The Most</p>
                        <p className='head-tagline'>POPULAR INSTRUMENTS</p>
                    </div>
                </div>
                <div className="d-grid pt-2" style={{gridTemplateColumns:"repeat(2,1fr)",placeItems:"center"}}>
                    {
                        services.map((srv,index)=>(
                            <div key={index} className='d-flex w-75'>
                                <img className='service-icon pe-4' src={`/assets/icon/${srv.img_path}`} alt={srv.img_path} />
                                <div>
                                    <p className='PB' style={{margin:0}}>{srv.name}</p>
                                    <p className='PR'>{srv.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
