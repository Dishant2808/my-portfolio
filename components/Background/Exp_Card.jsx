import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="card_stylings transition px-8 py-10 ">
                <div className="flex justify-between items-center">
                    <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                    <div className="flex items-center justify-center text-SilverGray bg-MidNightBlack ml-2 h-8 px-3 text-xs rounded-full font-medium border border-DarkGray/60">
                        {data.year}
                    </div>
                </div>
                <div className="text-sm text-LightGray font-normal italic mt-1 ">
                    {data.role}
                </div>
                <div className="text-LightGray text-xs opacity-50 font-normal italic">
                    <a href={`${data.url}`} target="_blank" rel="noreferrer">
                        {data.url}
                    </a>
                </div>
                <div className="text-SilverGray text-sm font-normal mt-4 text-justify">
                    {data.desc}
                </div>
                <div className="flex justify-between text-SilverGray bg-MidNightBlack w-full h-auto text-xs rounded-full py-2 px-6 mt-4 font-medium border border-DarkGray/60">
                    <div>{data.location}</div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card