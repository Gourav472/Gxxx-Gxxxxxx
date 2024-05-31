import React, { useState } from 'react'
import Logo1 from '../assets/images/dextools.png'
import Logo2 from '../assets/images/x_logo.png'
import Logo3 from '../assets/images/telegram.png'
const Navbar = () => {
    const [nav, setnav] = useState(false)

    return (
        <>
            <nav className=' bg-black pb-1 ' >
                <div className=' container' data-aos="fade-down">
                    <div className=' navbox bg-black '>
                        <div className=' d-flex justify-content-between align-items-center '>
                            <h2 className=' mb-0 text-white ff-inter fw-900 lh-48 text-40 cp'>Gxxx Gxxxxxx</h2>
                            <div className={` ${nav ? "end-0" : "right_100"} d-flex align-items-center gap-46 mobile_view  `}>
                                <div className=' d-flex align-items-center gap-21'>
                                    <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img src={Logo1} alt="logo" /></a>
                                    <a href="https://x.com/?lang=en" target='_blank'><img src={Logo2} alt="logo2" /></a>
                                    <a href="https://telegram.org/" target='_blank'> <img src={Logo3} alt="logo3" /></a>
                                </div>
                                <button className=' btn-buy text-nowrap ff-inter fw-600 text-16 lh-1936'>Buy On Uniswap</button>
                            </div>
                            <div onClick={() => { setnav(!nav) }} class="menu d-block d-lg-none ">
                                <span></span>
                                <span class="my-2"></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar