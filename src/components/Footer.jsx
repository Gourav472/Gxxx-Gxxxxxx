import React from 'react'
import Logo1 from '../assets/images/dextools.png'
import Logo2 from '../assets/images/x_logo.png'
import Logo3 from '../assets/images/telegram.png'
const Footer = () => {
    return (
        <>
            <footer className=' bg-black'>
                <div className=' container'>
                    <div className="row footer-py">
                        <div className="col-12 col-md-4 col-lg-3 d-flex" >
                            <div className=' d-flex flex-column '>
                                <p className=' mb-0 white ff-inter fw-900 text-79 lh-95 cp'>G<span className=' color-yellow'>G</span></p>
                                <p className=' mb-0 white ff-inter fw-400 text-16 lh-25 mt-copyright text-center cp'>@copyright2024</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-md-center mt-5 mt-md-0 ">
                            <div className=' d-flex align-items-center align-items-sm-start gap-footer-links'>
                                <div className=' footer-line'></div>
                                <ul className=' m-0 p-0 d-flex flex-column gap-17'>
                                    <li className=' ff-inter fw-700 text-16 lh-25 white mb-13'>QUICK LINKS</li>
                                    <li><a href="https://x.com/?lang=en" target='_blank' className=' ff-inter fw-400 text-16 lh-25 white  link_hover '>Twitter</a></li>
                                    <li><a href="https://web.telegram.org/z/" target='_blank' className=' ff-inter fw-400 text-16 lh-25 white link_hover '>Telegram</a></li>
                                    <li><a href="https://www.dextools.io/app/en/pairs" target='_blank' className=' ff-inter fw-400 text-16 lh-25 white link_hover '>DexTools</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 align-items-end justify-content-end justify-content-md-start mb-3 mb-md-0 mt-5 mt-md-0 d-flex flex-column align-items-lg-end">
                            <div className=' d-flex align-items-center  gap-21'>
                                <a className='footer-logo-hover ' href="https://www.dextools.io/app/en/pairs" target='_blank'><img className='footer-logo' src={Logo1} alt="logo" /></a>
                                <a className='footer-logo-hover ' href="https://x.com/?lang=en" target='_blank'><img className='footer-logo' src={Logo2} alt="logo2" /></a>
                                <a className='footer-logo-hover ' href="https://telegram.org/" target='_blank'> <img className='footer-logo' src={Logo3} alt="logo3" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer