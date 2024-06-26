import React from 'react'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
const Dextools = () => {
    return (
        <>
            <section className='bg_yellow mt-decrease overflow-hidden'>
                <div className=' container'>
                    <div className=' d-flex align-items-center flex-wrap justify-content-center gap-3 gap-md-4 justify-content-lg-between py-logo'>
                        <div className=' d-flex align-items-center gap-22' data-aos="fade-up">
                            <a href="https://x.com/?lang=en" target='_blank'> <img src={logo1} alt="twitter" /></a>
                            <p className=' mb-0 white ff-inter fw-600 text-48 lh-589'>twitter</p>
                        </div>
                        <div className=' d-flex align-items-center gap-22' data-aos="fade-up">
                            <a href="https://telegram.org/" target='_blank'>  <img src={logo2} alt="telegram" /></a>
                            <p className=' mb-0 white ff-inter fw-600 text-48 lh-589'>Telegram</p>
                        </div>
                        <div className=' d-flex align-items-center gap-22' data-aos="fade-up">
                            <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img src={logo3} alt="dextools" /></a>
                            <p className=' mb-0 white ff-inter fw-600 text-48 lh-589'>DEXTOOLS</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dextools