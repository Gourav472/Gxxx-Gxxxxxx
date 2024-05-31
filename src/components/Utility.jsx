import React from 'react'
import cartoon2 from '../assets/images/carton2.webp'
import Page from '../assets/images/page.png'
const Utility = () => {
    return (
        <>
            <section className=' bg-second-image position-relative'>
                <div className=' container position-relative'>
                    <div className="row flex-column-reverse flex-xl-row py-utility">
                        <div className="col-12 col-xl-6 mt-4 mt-lg-5 mt-xl-0 d-flex align-items-center position-relative" data-aos="zoom-in-right">
                            <div className=' d-flex flex-column align-items-center align-items-xl-start'>
                                <h5 className=' mb-0 black ff-inter fw-900 text-64 lh-77 text-center text-xl-start'>UTILITY</h5>
                                <p className=' mb-0 black op-80 ff-inter fw-400 text-16 lh-25 max-550 pt-utility-text text-center text-xl-start'>The utility of $LHGG extends beyond its humorous appeal. Holders of $LHGG gain access to exclusive merchandise, events, and community perks. Furthermore, $LHGG serves as a medium of exchange within our ecosystem, facilitating transactions and interactions among community members. Through strategic partnerships and integrations, we aim to expand the utility of $LHGG, creating additional avenues for adoption and growth.</p>
                                <button className=' btn-third max-205 w-100 text-nowrap ff-inter fw-600 text-16 lh-1936 mt-27'>Buy $GrayGensler</button>
                                <p className=' ff-grands d-none d-xl-block mb-0 fw-900 text-32 lh-32 black op-54 position-absolute utility-position3'>I love FUDing</p>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-end position-relative" data-aos="zoom-in-left">
                            <img className=' w-100 max-441' src={cartoon2} alt="cartoon-second" />
                            <p className=' ff-grands d-none d-sm-block mb-0 fw-900 text-32 lh-32 black op-54 position-absolute utility-position2 '>I love FUDing</p>
                            <p className=' ff-grands d-none d-sm-block d-xl-none mb-0 fw-900 text-32 lh-32 black op-54 position-absolute utility-position4'>I love FUDing</p>
                        </div>
                    </div>
                    <p className=' ff-grands d-none d-sm-block mb-0 fw-900 text-32 lh-32 black op-54 position-absolute utility-position '>I love FUDing</p>
                </div>
                <img className=' d-none d-sm-block position-absolute page-1' src={Page} alt="page-1" />
            </section>
        </>
    )
}

export default Utility