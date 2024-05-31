import React from 'react'
import Joe from '../assets/images/joe.png'
import Bluetick from '../assets/images/svg/tick.svg'
import Svg1 from '../assets/images/svg/svg1.svg'
import Svg2 from '../assets/images/svg/svg2.svg'
import Svg3 from '../assets/images/svg/svg3.svg'
import Svg4 from '../assets/images/svg/svg4.svg'
import Slider from "react-slick";
import elipse1 from '../assets/images/last1.png'
import elipse2 from '../assets/images/last2.png'
const Latest = () => {
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
            <section className='latest-bg-image position-relative'>
                <div className=' container'>
                    <div className=' py-latest-news'>
                        <h3 className=' mb-0 black ff-inter fw-900 text-64 lh-77 text-center' data-aos="zoom-out-up">LATEST NEWS</h3>
                    </div>
                    <div className=' row latest-row-py d-none d-xl-flex'>
                        <div className="col-6 col-lg-6 col-xl-4  " data-aos="flip-left">
                            <div className=' latest-box d-flex flex-column w-100'>
                                <div className=' d-flex gap-14 align-items-center'>
                                    <img src={Joe} alt="biden" />
                                    <div className=' d-flex flex-column gap_4'>
                                        <div className=' d-flex align-items-center gap_3'>
                                            <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                            <img src={Bluetick} alt="tick" />
                                        </div>
                                        <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg1} alt="svg1" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg2} alt="svg2" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg3} alt="svg3" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                    </div>
                                    <img className='cp op-80' src={Svg4} alt="svg4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-xl-4 " data-aos="fade-up">
                            <div className=' latest-box d-flex flex-column w-100'>
                                <div className=' d-flex gap-14 align-items-center'>
                                    <img src={Joe} alt="biden" />
                                    <div className=' d-flex flex-column gap_4'>
                                        <div className=' d-flex align-items-center gap_3'>
                                            <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                            <img src={Bluetick} alt="tick" />
                                        </div>
                                        <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg1} alt="svg1" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg2} alt="svg2" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg3} alt="svg3" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                    </div>
                                    <img className='cp op-80' src={Svg4} alt="svg4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-xl-4 mt-4 mt-xl-0" data-aos="flip-right">
                            <div className=' latest-box d-flex flex-column w-100'>
                                <div className=' d-flex gap-14 align-items-center'>
                                    <img src={Joe} alt="biden" />
                                    <div className=' d-flex flex-column gap_4'>
                                        <div className=' d-flex align-items-center gap_3'>
                                            <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                            <img src={Bluetick} alt="tick" />
                                        </div>
                                        <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg1} alt="svg1" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg2} alt="svg2" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg3} alt="svg3" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                    </div>
                                    <img className='cp op-80' src={Svg4} alt="svg4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-xl-4  mt-4" data-aos="flip-left">
                            <div className=' latest-box d-flex flex-column w-100'>
                                <div className=' d-flex gap-14 align-items-center'>
                                    <img src={Joe} alt="biden" />
                                    <div className=' d-flex flex-column gap_4'>
                                        <div className=' d-flex align-items-center gap_3'>
                                            <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                            <img src={Bluetick} alt="tick" />
                                        </div>
                                        <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg1} alt="svg1" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg2} alt="svg2" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg3} alt="svg3" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                    </div>
                                    <img className='cp op-80' src={Svg4} alt="svg4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-xl-4 mt-4" data-aos="fade-up">
                            <div className=' latest-box d-flex flex-column w-100'>
                                <div className=' d-flex gap-14 align-items-center'>
                                    <img src={Joe} alt="biden" />
                                    <div className=' d-flex flex-column gap_4'>
                                        <div className=' d-flex align-items-center gap_3'>
                                            <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                            <img src={Bluetick} alt="tick" />
                                        </div>
                                        <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg1} alt="svg1" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg2} alt="svg2" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg3} alt="svg3" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                    </div>
                                    <img className='cp op-80' src={Svg4} alt="svg4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-xl-4 mt-4" data-aos="flip-right">
                            <div className=' latest-box d-flex flex-column w-100'>
                                <div className=' d-flex gap-14 align-items-center'>
                                    <img src={Joe} alt="biden" />
                                    <div className=' d-flex flex-column gap_4'>
                                        <div className=' d-flex align-items-center gap_3'>
                                            <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                            <img src={Bluetick} alt="tick" />
                                        </div>
                                        <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg1} alt="svg1" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg2} alt="svg2" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                    </div>
                                    <div className=' d-flex align-items-center gap_3 op-80'>
                                        <img className='cp' src={Svg3} alt="svg3" />
                                        <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                    </div>
                                    <img className='cp op-80' src={Svg4} alt="svg4" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <img className='elipse-latest d-none d-md-block position-absolute' src={elipse1} alt="elipse" />
                <img className='elipse-latest2 d-none d-lg-block position-absolute' src={elipse2} alt="elipse-2" />
                <div className="slider-height">
                    <Slider {...settings} className='latest-row-py d-xl-none   '>
                        <div className=' latest-slider d-flex flex-column w-100 mx-2 mx-sm-3'>
                            <div className=' d-flex gap-14 align-items-center'>
                                <img src={Joe} alt="biden" />
                                <div className=' d-flex flex-column gap_4'>
                                    <div className=' d-flex align-items-center gap_3'>
                                        <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                        <img src={Bluetick} alt="tick" />
                                    </div>
                                    <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg1} alt="svg1" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg2} alt="svg2" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg3} alt="svg3" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                </div>
                                <img className='cp op-80' src={Svg4} alt="svg4" />
                            </div>
                        </div>
                        <div className=' latest-slider d-flex flex-column w-100 mx-2 mx-sm-3'>
                            <div className=' d-flex gap-14 align-items-center'>
                                <img src={Joe} alt="biden" />
                                <div className=' d-flex flex-column gap_4'>
                                    <div className=' d-flex align-items-center gap_3'>
                                        <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                        <img src={Bluetick} alt="tick" />
                                    </div>
                                    <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg1} alt="svg1" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg2} alt="svg2" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg3} alt="svg3" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                </div>
                                <img className='cp op-80' src={Svg4} alt="svg4" />
                            </div>
                        </div>
                        <div className=' latest-slider d-flex flex-column w-100 mx-2 mx-sm-3'>
                            <div className=' d-flex gap-14 align-items-center'>
                                <img src={Joe} alt="biden" />
                                <div className=' d-flex flex-column gap_4'>
                                    <div className=' d-flex align-items-center gap_3'>
                                        <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                        <img src={Bluetick} alt="tick" />
                                    </div>
                                    <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg1} alt="svg1" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg2} alt="svg2" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg3} alt="svg3" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                </div>
                                <img className='cp op-80' src={Svg4} alt="svg4" />
                            </div>
                        </div>
                        <div className=' latest-slider d-flex flex-column w-100 mx-2 mx-sm-3'>
                            <div className=' d-flex gap-14 align-items-center'>
                                <img src={Joe} alt="biden" />
                                <div className=' d-flex flex-column gap_4'>
                                    <div className=' d-flex align-items-center gap_3'>
                                        <p className=' mb-0 black ff-inter fw-900 text-16 lh-1936'>Joe Bidenn</p>
                                        <img src={Bluetick} alt="tick" />
                                    </div>
                                    <p className=' mb-0 black op-80 ff-inter fw-400 text-14 lh-25'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 pt-20 max-321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pt-joe-logo pe-2'>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg1} alt="svg1" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg2} alt="svg2" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap_3 op-80'>
                                    <img className='cp' src={Svg3} alt="svg3" />
                                    <p className=' mb-0 black ff-sf-font fw text-14 lh-17'>21</p>
                                </div>
                                <img className='cp op-80' src={Svg4} alt="svg4" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Latest