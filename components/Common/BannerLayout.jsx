import React from 'react'

const BannerLayout = ({ children }) => {
    return (
        <div
            className="relative w-full h-80 bg-fixed z-10"
            style={{
                background: '#ffffff',
            }}>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full">
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BannerLayout