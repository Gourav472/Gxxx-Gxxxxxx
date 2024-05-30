import React from 'react'
import Hero from '../assets/images/header.webp'
const Header = () => {
    return (
        <>
            <header className=' bg-black position-relative mt-decrease '>
                <div className=' container position-relative z-1'>
                    <div className=' d-flex flex-column py-header'>
                        <h1 className=' ff-inter mb-0 white text-108 fw-900 lh-130 text-center text-sm-start '>G<span className=' color-yellow'>G</span></h1>
                        <p className=' ff-inter mb-0 fw-600 text-20 lh-24 white max-538 text-center text-sm-start'>Join The <span className=' color-yellow'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
                        <div className=' d-flex flex-wrap align-items-center gap-20 pt-header-btn'>
                            <button className=' btn-second max-205 w-100 text-nowrap ff-inter fw-600 text-16 lh-1936'>Buy $GrayGensler</button>
                            <button className=' btn-buy max-164 w-100 text-nowrap ff-inter fw-600 text-16 lh-1936'>How To Buy?</button>
                        </div>
                        <button className=' btn-text  d-flex w-100 justify-content-center align-items-center text-nowrap ff-inter fw-400 text-20 lh-30'>dwqjddj324dnewdne3dewrrets <span><svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.3499 14.4018C31.2753 14.2311 31.171 14.0751 31.0417 13.9411L21.6073 4.50661C21.4732 4.37733 21.3172 4.27297 21.1465 4.19842C21.0994 4.17641 21.049 4.16383 20.9987 4.14653C20.8672 4.10176 20.7302 4.07479 20.5915 4.06634C20.5585 4.06319 20.5286 4.0459 20.4956 4.0459H9.4887C7.75434 4.0459 6.34389 5.45635 6.34389 7.19071V32.3492C6.34389 34.0836 7.75434 35.4941 9.4887 35.4941H28.3576C30.092 35.4941 31.5024 34.0836 31.5024 32.3492V15.0528C31.5024 15.0197 31.4851 14.9899 31.482 14.9553C31.4743 14.8164 31.4473 14.6794 31.4018 14.548C31.3861 14.4977 31.3719 14.449 31.3499 14.4018ZM26.1342 13.4803H22.068V9.4141L26.1342 13.4803ZM9.4887 32.3492V7.19071H18.9232V15.0528C18.9232 15.4698 19.0888 15.8697 19.3837 16.1646C19.6786 16.4595 20.0785 16.6252 20.4956 16.6252H28.3576L28.3607 32.3492H9.4887Z" fill="white" />
                            <path d="M12.6338 19.7701H25.2131V22.9149H12.6338V19.7701ZM12.6338 26.0597H25.2131V29.2045H12.6338V26.0597ZM12.6338 13.4805H15.7786V16.6253H12.6338V13.4805Z" fill="white" />
                        </svg>
                        </span></button>
                    </div>
                </div>
                <div className=' position-absolute header-image'>
                    <img className='max-576 w-100' src={Hero} alt="man" />
                </div>
            </header>
        </>
    )
}

export default Header