import React from 'react'

const BannerLayout = ({ children }) => {
    return (
        <div className="relative w-full min-h-full bg-DeepNightBlack z-10">
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default BannerLayout