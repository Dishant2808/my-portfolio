import React from 'react'
import CardLayout from '../Common/CardLayout'

const Edu_Card = ({ data }) => {
    // Determine education level and icon based on degree
    const getEducationLevel = (degree) => {
        if (degree.toLowerCase().includes('mba') || degree.toLowerCase().includes('master')) {
            return { level: 'Graduate', icon: '🎓', color: 'from-NeonPurple to-ElectricBlue' };
        } else if (degree.toLowerCase().includes('b.e') || degree.toLowerCase().includes('bachelor')) {
            return { level: 'Undergraduate', icon: '🎓', color: 'from-Green to-NeonPurple' };
        } else if (degree.toLowerCase().includes('12th') || degree.toLowerCase().includes('senior')) {
            return { level: 'Secondary', icon: '📚', color: 'from-ElectricBlue to-Green' };
        } else {
            return { level: 'Primary', icon: '📖', color: 'from-Green to-ElectricBlue' };
        }
    };

    const educationInfo = getEducationLevel(data.degree);

    return (
        <CardLayout className='keepItEmpty'>
            <div className="group relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-NeonPurple/5 via-Green/5 to-ElectricBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main Card */}
                <div className="relative card_stylings transition-all duration-300 hover:shadow-xl hover:border-NeonPurple/30 px-8 py-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`w-10 h-10 bg-gradient-to-br ${educationInfo.color} rounded-lg flex items-center justify-center`}>
                                    <span className="text-lg">{educationInfo.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-Snow text-xl font-bold font-circular-bold group-hover:text-NeonPurple transition-colors duration-300">
                                        {data.title}
                                    </h3>
                                    <div className="text-NeonPurple text-sm font-medium font-circular-medium">
                                        {data.degree}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Year Badge */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center text-SilverGray bg-gradient-to-r from-MidNightBlack to-EveningBlack px-4 py-2 text-sm rounded-full font-medium border border-DarkGray/60 shadow-sm">
                                <svg className="w-4 h-4 mr-2 text-NeonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {data.year}
                            </div>
                        </div>
                    </div>

                    {/* Education Level Badge */}
                    <div className="mb-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-NeonPurple/10 to-Green/10 text-NeonPurple text-xs font-medium rounded-full border border-NeonPurple/20">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            {educationInfo.level}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="text-SilverGray text-sm leading-relaxed mb-6 font-circular-normal">
                        {data.detail}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t border-DarkGray/30">
                        <div className="flex items-center gap-2 text-SilverGray text-sm font-medium">
                            <svg className="w-4 h-4 text-NeonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Educational Institution</span>
                        </div>
                        
                        {/* Completion Status */}
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-Green rounded-full"></div>
                            <span className="text-xs text-LightGray font-medium">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Edu_Card