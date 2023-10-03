import React, { useState } from 'react'

function Icon({ image, hoverText }) {
    const [show, setShow] = useState(false);

    const showText = () => {
        setShow(true);
    }

    const hideText  = () => {
        setShow(false);
    }

    return (
        <div className="relative" onMouseOver={showText} onMouseLeave={hideText}>
            {show && (
                <div className="triangle absolute bottom-[120%] bg-black rounded text-white opacity-80 left-1/2 -translate-x-1/2 text-center px-5 py-2">
                    {hoverText}
                </div>
            )}
            <img className="border-black w-[50px]" src={image} />
        </div>
    )
}

export default Icon
