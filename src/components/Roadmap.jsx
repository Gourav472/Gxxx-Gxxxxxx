import React from 'react'
import cloud1 from '../assets/images/c1.webp'
import cloud2 from '../assets/images/c22.webp'
import line1 from '../assets/images/line1.png'
import line2 from '../assets/images/line2.png'
import line3 from '../assets/images/line3.png'
import line4 from '../assets/images/line4.png'
import line5 from '../assets/images/line5.png'
import Slider from "react-slick";
const Roadmap = () => {
    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
    };
    return (
        <>
            <section>
                <img className=' w-100' src={cloud1} alt="cloud" />
                <div className=' bg-black mt-decrease mb-decrease' >
                    <div className=' container'>
                        <div className=' d-flex flex-column justify-content-center align-items-center py-roadmap'>
                            <p className=' mb-0 white text-center ff-inter fw-900 text-64 lh-77' data-aos="zoom-out-up">ROADMAP</p>
                            <p className=' mb-0 white op-70 max-894 ff-inter fw-400 text-16 lh-30 text-center pt-roadmap' data-aos="zoom-out-up">Our roadmap isn't just a journey; it's a comedic adventure through the cryptoverse, filled with twists, turns, and plenty of laughs along the way. Here's a glimpse into what the future holds for Let's Hug GG ($LHGG)</p>
                        </div>
                    </div>
                    <Slider {...settings} className=' d-flex  py-slider max-1440'>
                        <div className=' d-flex gap_7 align-items-end'>
                            <img src={line1} alt="line-one" />
                            <div className=' d-flex flex-column pb-4'>
                                <p className=' ff-inter fw-900 text-24 lh-29 white mb-0 max-185'>Token Launch (Q1 2024)</p>
                                <p className=' mb-0 white op-70 ff-inter fw-400 text-16 lh-30 pt_9 max-196'>Launch $LHGG token, establish initial liquidity.</p>
                            </div>

                        </div>
                        <div className=' d-flex gap-18 align-items-center pl-30'>
                            <img src={line2} alt="line-two" />
                            <div className=' d-flex flex-column '>
                                <p className=' ff-inter fw-900 text-24 lh-29 white mb-0 max-237'>Community Building (Q2 2024)</p>
                                <p className=' mb-0 white op-70 ff-inter fw-400 text-16 lh-30 pt_9 max-196'>Grow vibrant community through humor and engagement.</p>
                            </div>

                        </div>
                        <div className=' d-flex gap-18 align-items-start pl_5 '>
                            <img src={line3} alt="line-three" />
                            <div className=' d-flex flex-column pt-13 '>
                                <p className=' ff-inter fw-900 text-24 lh-29 white mb-0 max-237'>Governance Implementation (Q3 2024)</p>
                                <p className=' mb-0 white op-70 ff-inter fw-400 text-16 lh-30 pt_9 max-196'>Introduce community governance mechanisms.</p>
                            </div>
                        </div>
                        <div className=' d-flex gap-30 align-items-end  '>
                            <img className='mb-31' src={line4} alt="line-three" />
                            <div className=' d-flex flex-column '>
                                <p className=' ff-inter fw-900 text-24 lh-29 white mb-0 max-237'>Partnerships and Influencer Collaborations (Q4 2024)</p>
                                <p className=' mb-0 white op-70 ff-inter fw-400 text-16 lh-30 pt_9 max-237'>Forge strategic partnerships and collaborations.</p>
                            </div>
                        </div>
                        <div className=' d-flex gap-21 align-items-center pl-30 '>
                            <img src={line5} alt="line-three" />
                            <div className=' d-flex flex-column'>
                                <p className=' ff-inter fw-900 text-24 lh-29 white mb-0 max-237'>Utility Expansion (Q1 2025)</p>
                                <p className=' mb-0 white op-70 ff-inter fw-400 text-16 lh-30 pt_9 max-237'>Explore new use cases and integrations for $LHGG.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <img className=' w-100' src={cloud2} alt="cloud-two" />
            </section>
        </>
    )
}

export default Roadmap