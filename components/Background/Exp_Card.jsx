import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="group relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-Green/5 via-ElectricBlue/5 to-NeonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main Card */}
                <div className="relative card_stylings transition-all duration-300 hover:shadow-xl hover:border-Green/30 px-8 py-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-Green to-ElectricBlue rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-Snow text-xl font-bold font-circular-bold group-hover:text-Green transition-colors duration-300">
                                        {data.title}
                                    </h3>
                                    <div className="text-Green text-sm font-medium font-circular-medium">
                                        {data.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Year Badge */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center text-SilverGray bg-gradient-to-r from-MidNightBlack to-EveningBlack px-4 py-2 text-sm rounded-full font-medium border border-DarkGray/60 shadow-sm">
                                <svg className="w-4 h-4 mr-2 text-Green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {data.year}
                            </div>
                        </div>
                    </div>

                    {/* Company URL */}
                    <div className="mb-4">
                        <a 
                            href={data.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-ElectricBlue hover:text-Green text-sm font-medium transition-colors duration-300 group/link"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="group-hover/link:underline">Visit Company</span>
                            <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Description */}
                    <div className="text-SilverGray text-sm leading-relaxed mb-6 font-circular-normal">
                        {data.desc}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t border-DarkGray/30">
                        <div className="flex items-center gap-2 text-SilverGray text-sm font-medium">
                            <svg className="w-4 h-4 text-Green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{data.location}</span>
                        </div>
                        
                        {/* Status Indicator */}
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-Green rounded-full animate-pulse"></div>
                            <span className="text-xs text-LightGray font-medium">
                                {data.year.includes('Present') ? 'Current Position' : 'Previous Role'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card