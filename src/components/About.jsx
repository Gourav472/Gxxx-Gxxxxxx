import React from 'react'
import cartoon1 from '../assets/images/cartoon1.webp'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import Specs from '../assets/images/specs.png'
const About = () => {
    return (
        <>
            <section className=' bg-coloumn-about position-relative'>
                <div className=' container'>
                    <div className=' row py-about'>
                        <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-start mt-col-about position-relative" data-aos="fade-up-right">
                            <div className=' max-688'>
                                <img className=' w-100' src={cartoon1} alt="cartoon" />
                            </div>
                            <p className=' ff-grands d-none d-sm-block mb-0 fw-900 text-32 lh-32 black op-54 position-absolute fuding-position'>I love FUDing</p>
                            <p className=' ff-grands d-none d-sm-block mb-0 fw-900 text-32 lh-32 black op-54 position-absolute fuding-position-2'>I love FUDing</p>
                            <p className=' ff-grands d-none d-sm-block mb-0 fw-900 text-32 lh-32 black op-54 position-absolute fuding-position-3'>I love FUDing</p>
                        </div>
                        <div className="col-12 col-xl-6 mt-4 mt-md-5 mt-xl-0 d-flex justify-content-xl-end" data-aos="fade-up-left">
                            <div className=' d-flex flex-column'>
                                <div className=' d-flex flex-wrap justify-content-center justify-content-xl-start align-items-center gap-logo-about'>
                                    <a href="https://www.dextools.io/app/" target='_blank'><img className=' max-about-svg' src={img1} alt="image1" /></a>
                                    <a href="https://shop.unicornstore.in/" target='_blank'><img className=' max-about-svg' src={img2} alt="image2" /></a>
                                    <a href="https://x.com/?lang=en" target='_blank'><img className=' max-about-svg' src={img3} alt="image3" /></a>
                                    <a href="https://web.telegram.org/a/" target='_blank'><img className=' max-about-svg' src={img4} alt="image4" /></a>
                                    <a href="https://www.investopedia.com/trading-4427765" target='_blank'><img className=' max-about-svg' src={img5} alt="image5" /></a>
                                </div>
                                <h3 className=' mb-0 ff-inter fw-900 text-64 lh-77 black pt-26 text-center text-xl-start'>ABOUT US</h3>
                                <div className=' d-flex flex-column gap-between-text-about'>
                                    <p className=' max-550 mb-0 op-80 ff-inter fw-400 text-16 lh-25 black pt-text-about text-center text-xl-start'>In the ever-evolving landscape of cryptocurrency, where markets can swing on a tweet and sentiments wield as much power as technical analysis, one figure has recently stepped into the spotlight: Gary Gensler, or as we affectionately call him, GG. With his recent comments on Bitcoin, Gensler stirred the pot of fear, uncertainty, and doubt (FUD), sending shockwaves through the crypto community.</p>
                                    <p className=' max-550 mb-0 op-80 ff-inter fw-400 text-16 lh-25 black text-center text-xl-start'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</p>
                                    <p className=' max-550 mb-0 op-80 ff-inter fw-400 text-16 lh-25 black text-center text-xl-start'>ou see, we believe that in times of uncertainty, a good laugh can be the best antidote. And what better way to address fear than with a hug—from behind, of course! Our slogan, "If you sell your BTC, we'll let you hug GG from behind so tightly," embodies our playful approach to tackling the anxiety surrounding Bitcoin and the broader crypto market.</p>
                                    <p className=' max-550 mb-0 op-80 ff-inter fw-400 text-16 lh-25 black text-center text-xl-start'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs, and maybe even a few profitable trades along the way. Because in the world of $LHGG, laughter isn't just the best medicine—it's the best investment strategy.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className=' position-absolute specs-position-about d-none d-sm-block' src={Specs} alt="spectacles" />
            </section>
        </>
    )
}

export default About