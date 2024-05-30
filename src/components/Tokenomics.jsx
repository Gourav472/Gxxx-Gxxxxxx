import React from 'react'
import clouds from '../assets/images/black-clouds.png'
import clouds2 from '../assets/images/black-clouds-2.png'
const Tokenomics = () => {
    return (
        <>
            <section>
                <img className=' w-100' src={clouds} alt="black-clouds" />
                <div className=' bg-black mt-decrease mb-decrease'>
                    <div className=' container'>
                        <div className=" row token-py">
                            <div className=" col-xl-5" data-aos="zoom-in">
                                <div className='d-flex flex-column'>
                                    <h4 className=' mb-0 white ff-inter fw-900 text-64 lh-77 text-center text-xl-start'>TOKENOMICS</h4>
                                    <p className=' mb-0 white op-80 ff-inter fw-400 text-16 lh-30 max-453 pt-20 text-center text-xl-start'>Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin. With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders.</p>
                                    <div className=' d-flex justify-content-center justify-content-xl-start '>
                                        <div className=' token-box w-100 mt-20'>
                                            <div className=' d-flex align-items-center gap-15'>
                                                <div className=' d-flex flex-column gap-12'>
                                                    <p className=' mb-0 ff-inter fw-400 text-20 lh-30 white text-nowrap_xxl'>Token Name:</p>
                                                    <p className=' mb-0 ff-inter fw-400 text-20 lh-30 white text-nowrap_xxl'>Token Symbol:</p>
                                                    <p className=' mb-0 ff-inter fw-400 text-20 lh-30 white text-nowrap_xxl'>Total Supply:</p>
                                                    <p className=' mb-0 ff-inter fw-400 text-20 lh-30 white text-nowrap_xxl'>Total Type:</p>
                                                </div>
                                                <div className=' d-flex flex-column gap-12'>
                                                    <p className=' mb-0 ff-inter fw-700 text-20 lh-30 white text-nowrap_xxl'>Let’s Hug GG</p>
                                                    <p className=' mb-0 ff-inter fw-700 text-20 lh-30 white text-nowrap_xxl'>$LHGG</p>
                                                    <p className=' mb-0 ff-inter fw-700 text-20 lh-30 white text-nowrap_xxl'>1 Billion $LHGG</p>
                                                    <p className=' mb-0 ff-inter fw-700 text-20 lh-30 white text-nowrap_xxl'>TSolana SPL Token</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-100   col-xl-7 justify-content-center mt-token-col d-flex" data-aos="zoom-in">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-xl-6  ">
                                        <div className=' orangebox-1  w-100 d-flex flex-column gap_8 '>
                                            <p className=' mb-0 black ff-inter fw-600 text-20 lh-30 text-center'>Marketing & Partnerships</p>
                                            <p className=' mb-0 black ff-inter fw-600 text-32 lh-30 text-center'>5%</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-xl-3 mt-3 mt-sm-0 d-flex">
                                        <div className=' orangebox-1  w-100 d-flex flex-column gap_8 '>
                                            <p className=' mb-0 black ff-inter fw-600 text-20 lh-30 text-center'>Reserve</p>
                                            <p className=' mb-0 black ff-inter fw-600 text-32 lh-30 text-center'>5%</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-xl-3  mt-3 mt-xl-0">
                                        <div className=' orangebox-1 h-100 w-100 d-flex flex-column gap_8 '>
                                            <p className=' mb-0 black ff-inter fw-600 text-20 lh-30 text-nowrap text-center'>Public Sale</p>
                                            <p className=' mb-0 black ff-inter fw-600 text-32 lh-30 text-center'>45%</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-xl-6  mt-3 mt-xl-4">
                                        <div className=' orangebox-1  w-100 d-flex flex-column gap_8 '>
                                            <p className=' mb-0 black ff-inter fw-600 text-20 lh-30 text-center'>Marketing & Partnerships</p>
                                            <p className=' mb-0 black ff-inter fw-600 text-32 lh-30 text-center'>5%</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-xl-6 ps-xl-4 mt-3 mt-xl-4">
                                        <div className=' orangebox-1  w-100 d-flex flex-column gap_8 '>
                                            <p className=' mb-0 black ff-inter fw-600 text-20 lh-30 text-center'>Marketing & Partnerships</p>
                                            <p className=' mb-0 black ff-inter fw-600 text-32 lh-30 text-center'>5%</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-xl-6  mt-3 mx-xl-auto mt-xl-3">
                                        <div className=' orangebox-1  w-100 d-flex flex-column gap_8 '>
                                            <p className=' mb-0 black ff-inter fw-600 text-20 lh-30 text-center'>Marketing & Partnerships</p>
                                            <p className=' mb-0 black ff-inter fw-600 text-32 lh-30 text-center'>5%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className=' w-100' src={clouds2} alt="blackcloud" />
            </section>
        </>
    )
}

export default Tokenomics