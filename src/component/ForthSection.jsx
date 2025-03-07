import { Box, Step, StepContent, StepLabel, Stepper, styled } from '@mui/material';
import '../style/section.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ForthSection() {
    
    const ColorlibStepIconRoot = styled('div')(() => ({
        backgroundColor: '#FF1A50',
        position: 'relative',
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        left:'-25%',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
       
    }));

    
    function ColorlibStepIcon(props) {
    
        const icons = {
            1: "1",
            2: "2",
            3: "3",
            4: "4"
        };
  
        return (
        <ColorlibStepIconRoot>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
        );
    } 

    const ColorlibStepIconRoot2 = styled('div')(() => ({
        backgroundColor: '#D2D2D2',
        position: 'relative',
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        left:'-25%',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
       
    }));

    
    function ColorlibStepIcon2(props) {
    
        const icons = {
            1: "1",
            2: "2",
            3: "3",
            4: "4"
        };
    
        return (
        <ColorlibStepIconRoot2>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot2>
        );
    }

    return(
        <div className='pb-5'>
            <div className="mt-5 phone-side">
                <img
                    src={`assets/images-2.jpg`}
                    style={{width:'120%',height:'100%',position:'relative',top:'50%',left:'-5%'}}    
                />
                <div>    
                    <img 
                        src={`assets/mobile-phone.png`}
                        style={{width:'22%',height:'180%',position:'absolute',top:'0',right:'14%'}}  
                    />
                </div>
                <div className='border rounded-3 bg-white phone-content px-5 py-5'>
                    <p className='ft-red head-tagline' style={{margin:0}}>Make Your Move</p>
                    <p className='H1' style={{margin:0}}>
                        Make Smart Investment Decisions <br />With Logo.
                    </p>
                    <p className='H3M'>
                        Daily Market Reviews <ArrowRightAltIcon/><br />
                        Exclusive Trading Tools <ArrowRightAltIcon/><br />
                        Technical Analysis From Central <ArrowRightAltIcon/><br />
                        Economic Data Earnings Calendar <ArrowRightAltIcon/><br />
                    </p>
                </div>
            </div>
            <div className='d-flex pt-5'>
                <div>
                    <p className='ft-red H2' style={{margin:0}}>How To Get Started</p>
                    <p className='H1'>Start Free In 4 Steps</p>
                    <img className='w-75' src="./assets/images-3.png" alt="" />
                </div>
                <div>
                    <Box>
                        <Stepper orientation="vertical">
                            <Step >
                                <StepLabel slots={{ stepIcon: ColorlibStepIcon }}>
                                    Register
                                </StepLabel>
                                <StepContent  className='H4R ps-5'>
                                    Open an account by filling in your details.
                                </StepContent>
                            </Step>
                            <Step active>
                                <StepLabel slots={{ stepIcon: ColorlibStepIcon2 }}>
                                    Verify
                                </StepLabel>
                                <StepContent className='H4R ps-5'>
                                    Upload you document(s)for fast verification.
                                </StepContent>
                            </Step>
                            <Step  active>
                                <StepLabel slots={{ stepIcon: ColorlibStepIcon2 }}>
                                    Fund
                                </StepLabel>
                                <StepContent  className='H4R ps-5'>
                                    Fund your account with your chosen payment method.
                                </StepContent>
                            </Step>
                            <Step  active>
                                <StepLabel slots={{ stepIcon: ColorlibStepIcon2 }}>
                                    Trade
                                </StepLabel>
                                <StepContent  className='H4R ps-5'>
                                    Unlock thousands of instruments and start investing.
                                </StepContent>
                            </Step>
                        </Stepper>
                        
                    </Box>
                </div>
            </div>
        </div>
    )
};
