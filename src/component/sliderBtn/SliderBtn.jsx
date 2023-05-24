import React from 'react'


export function NextSlideBtn(props) {
    return (
        <>
            <button className={`slider-btn ${props.btnClassName}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.4248 16.6004L12.8581 11.1671C13.4998 10.5254 13.4998 9.47539 12.8581 8.83372L7.4248 3.40039" stroke="#54576D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </>
    )
}

export function PrevSlideBtn(props) {
    return (
        <>
            <button className={`slider-btn ${props.btnClassName}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4995 16.6004L7.06621 11.1671C6.42454 10.5254 6.42454 9.47539 7.06621 8.83372L12.4995 3.40039" stroke="#1A1E26" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </>
    )
}

