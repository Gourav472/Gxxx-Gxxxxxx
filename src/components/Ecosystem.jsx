import React from 'react'
import Cartoon3 from '../assets/images/cartoon3.webp'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import Newspaper from '../assets/images/newspaper.png'
import Specs from '../assets/images/specs.png'
const Ecosystem = () => {
    return (
        <>
            <section className=' bg-ecosystem position-relative'>
                <div className=' container'>
                    <div className="row py-eco">
                        <div className="col-12 d-flex justify-content-center justify-content-xl-start col-xl-6" data-aos="zoom-out-right">
                            <img className=' w-100 max-565' src={Cartoon3} alt="cartoon-third" />
                        </div>
                        <div className="col-12 mt-4 mt-md-5 d-flex justify-content-center col-xl-6 mt-xl-4 d-flex justify-content-xl-end" data-aos="zoom-out-left">
                            <div className=' d-flex flex-column align-items-center align-items-xl-start'>
                                <div className=' d-flex flex-wrap justify-content-center justify-content-xl-start align-items-center gap-logo-about'>
                                    <a href="https://www.dextools.io/app/" target='_blank'><img src={img1} alt="image1" /></a>
                                    <a href="https://shop.unicornstore.in/" target='_blank'><img src={img2} alt="image2" /></a>
                                    <a href="https://x.com/?lang=en" target='_blank'><img src={img3} alt="image3" /></a>
                                    <a href="https://web.telegram.org/a/" target='_blank'><img src={img4} alt="image4" /></a>
                                    <a href="https://www.investopedia.com/trading-4427765" target='_blank'><img src={img5} alt="image5" /></a>
                                </div>
                                <h6 className=' mb-0 black ff-inter fw-900 text-64 lh-77 pt-13 text-center text-xl-start'>ECOSYSTEM</h6>
                                <p className=' mb-0 black ff-inter fw-400 text-16 lh-25 op-80 max-550 pt-20 text-center text-xl-start'>The $LHGG ecosystem is built upon the principles of inclusivity, humor, and innovation. Our community-driven approach empowers members to actively participate in governance, decision-making, and promotional activities. Through social media campaigns, memes, and creative content, we seek to amplify the message of embracing humor in the crypto space and challenging conventional narratives. Together, we aspire to foster a vibrant and engaging ecosystem where laughter reigns supreme.</p>
                                <button className=' btn-third max-205 w-100 text-nowrap ff-inter fw-600 text-16 lh-1936 mt-33'>Buy $GrayGensler</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className=' position-absolute eco-position1 d-none d-sm-block' src={Newspaper} alt="news-paper" />
                <img className=' position-absolute eco-position2 d-none d-sm-block' src={Specs} alt="spectacles" />
            </section>
        </>
    )
}

export default Ecosystem