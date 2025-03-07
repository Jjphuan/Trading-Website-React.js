import FirstSection from "./component/FirstSection";
import Footer from "./component/Footer";
import ForthSection from "./component/ForthSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";

export default function Content() {
    return(
        <div className="w-100 d-flex justify-content-center mt-5">
            <div className="w-75 border border-top-0 border-bottom-0 border-grey">
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <ForthSection/>
                <Footer/>
            </div>
        </div>
    )
};
