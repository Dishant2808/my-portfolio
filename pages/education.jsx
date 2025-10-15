import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Edu_Card from "../components/Background/Edu_Card";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import Link from "next/link";

export default function Education() {
    const { isLoading, data } = useQuery('background', () =>
        axios.get('api/background').then(({ data }) => data)
    );

    return (
        <BannerLayout>
            <div className="px-2 sm:px-6 pt-6 pb-6">
                {/* Hero Section */}
                <div className="relative overflow-hidden mb-8 md:mb-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-NeonPurple/5 via-Green/5 to-ElectricBlue/5 rounded-3xl"></div>
                    <div className="relative card_stylings p-8 md:p-12 mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-NeonPurple to-Green rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-Snow text-3xl md:text-4xl font-bold font-circular-bold">Academic Journey</h1>
                                <div className="w-16 h-1 bg-gradient-to-r from-NeonPurple to-Green rounded-full mt-2"></div>
                            </div>
                        </div>
                        <p className="text-LightGray text-base md:text-lg leading-relaxed max-w-4xl font-circular-normal">
                            A comprehensive overview of my educational background, showcasing the institutions I've attended, 
                            degrees I've earned, and the knowledge foundation that has shaped my professional expertise.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-NeonPurple mb-1">{data && data[0]?.eduCards?.length || 0}</div>
                                <div className="text-SilverGray text-sm font-medium">Institutions</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-Green mb-1">2</div>
                                <div className="text-SilverGray text-sm font-medium">Degrees</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-ElectricBlue mb-1">9+</div>
                                <div className="text-SilverGray text-sm font-medium">Years Study</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-NeonPurple mb-1">IT/CSE</div>
                                <div className="text-SilverGray text-sm font-medium">Focus Area</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Timeline */}
                <div className="relative mt-4 md:mt-6">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-NeonPurple via-Green to-ElectricBlue hidden md:block"></div>
                    
                    <div className="space-y-8">
                        {isLoading ? (
                            [1, 2, 3, 4].map((k) => (
                                <div key={k} className="relative">
                                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-white border-4 border-NeonPurple rounded-full z-10"></div>
                                    <ParagraphSkeleton className={"p-8 h-full w-full relative ml-0 md:ml-16"} />
                                </div>
                            ))
                        ) : (
                            data && data[0]?.eduCards?.map((item, key) => (
                                <div key={key} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-white border-4 border-NeonPurple rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>
                                    
                                    {/* Education Card */}
                                    <div className="ml-0 md:ml-16 transform group-hover:scale-[1.02] transition-all duration-300">
                                        <Edu_Card data={item} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 md:mt-16 text-center">
                    <div className="card_stylings p-8 md:p-12">
                        <h3 className="text-Snow text-xl md:text-2xl font-bold mb-4">Ready to Learn More?</h3>
                        <p className="text-LightGray text-sm md:text-base mb-6 max-w-2xl mx-auto">
                           Check out my projects to see what I’ve been working on and how I build ideas into reality.
                        </p>
                        <Link href="/projects" className="cta-primary inline-flex items-center gap-2">
                            <span>View Projects</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}


