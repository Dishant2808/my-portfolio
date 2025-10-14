import React from 'react'

const Badge = ({ title }) => {
    return (
        <span className='py-1.5 px-3 text-xs text-SilverGray bg-MidNightBlack rounded-full border border-DarkGray/60'>
            {title}
        </span>
    )
}

export default Badge