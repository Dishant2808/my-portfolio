import React from 'react'
import CardLayout from '../Common/CardLayout'

const Edu_Card = ({ data }) => {
    return (
        <CardLayout className='keepItEmpty'>
            <div className="card_stylings transition px-8 py-10">
                <div className="flex justify-between items-center">
                    <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                    <div className="flex items-center justify-center text-SilverGray bg-MidNightBlack ml-2 w-32 lg:w-28 h-8 text-xs rounded-full px-3 font-medium border border-DarkGray/60">
                        {" "}
                        {data.year}{" "}
                    </div>
                </div>
                <div className="text-xs text-LightGray font-normal italic mt-1 ">
                    {data.degree}
                </div>
                <div className="text-SilverGray text-sm font-normal mt-4 ">
                    {data.detail}
                </div>
            </div>
        </CardLayout>
    )
}

export default Edu_Card