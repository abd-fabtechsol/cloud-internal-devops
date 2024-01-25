import { Box } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { grey } from '@mui/material/colors';
import apply from '../../assets/Apply/apply.png'
import './styles/apply.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Apply = () => {

    const words = ['Adventure', 'Career', 'Opportunity'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }, 2000);
        return () => clearTimeout(timer);
    }, [currentWordIndex]);


    return (
        <div className='container-fluid bg-info mb-30' style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
            <Helmet>
                <title>Apply</title>
            </Helmet>
            <Box ml={5} pb={5}
                sx={{
                    width: '90%',
                    height: '100%',
                    backgroundColor: 'grey.A100',
                    borderRadius: 10,
                    // '&:hover': {
                    //     opacity: [0.9, 0.8, 0.7],
                    // },
                }}
            >َِ
                <div className='d-flex justify-content-center' style={{ paddingTop: '5rem', paddingRight: '2rem' }}>
                    <div className='justify-content-center apply' style={{ paddingRight: '2rem' }}>
                        <img src={apply} alt="apply" className='img_'/>
                    </div>
                    <div className='d-flex flex-column justify-content-center' >
                        <h1>Start</h1>
                        <h1>Exploring</h1>
                        <h1>Your Next</h1>
                        <div style={{ width: '200px' }}>
                            <h1 className=' p-3 letter text-info'>{words[currentWordIndex]}</h1>
                        </div>
                        <Link to="job-type/"><button type="button" class="btn btn-outline-primary">Let's Go!</button></Link>
                    </div>
                </div>
            </Box>
        </div>);
}

export default Apply;