import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Exp_Card from "../components/Background/Exp_Card";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

export default function Experience() {
    const { isLoading, data } = useQuery('background', () =>
        axios.get('api/background').then(({ data }) => data)
    );

    return (
        <BannerLayout>
            <div className="px-2 sm:px-6 pt-6 pb-6">
                {/* Hero Section */}
                <div className="relative overflow-hidden mb-8 md:mb-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-Green/5 via-ElectricBlue/5 to-NeonPurple/5 rounded-3xl"></div>
                    <div className="relative card_stylings p-8 md:p-12 mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-Green to-ElectricBlue rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-Snow text-3xl md:text-4xl font-bold font-circular-bold">Professional Journey</h1>
                                <div className="w-16 h-1 bg-gradient-to-r from-Green to-ElectricBlue rounded-full mt-2"></div>
                            </div>
                        </div>
                        <p className="text-LightGray text-base md:text-lg leading-relaxed max-w-4xl font-circular-normal">
                            A timeline of my professional growth, showcasing the roles and responsibilities I've held, 
                            the challenges I've overcome, and the impactful outcomes I've delivered throughout my career.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-Green mb-1">{data && data[1]?.expCards?.length || 0}+</div>
                                <div className="text-SilverGray text-sm font-medium">Companies</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-ElectricBlue mb-1">3+</div>
                                <div className="text-SilverGray text-sm font-medium">Years Experience</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-NeonPurple mb-1">Full-Stack</div>
                                <div className="text-SilverGray text-sm font-medium">Specialization</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="relative mt-4 md:mt-6">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-Green via-ElectricBlue to-NeonPurple hidden md:block"></div>
                    
                    <div className="space-y-8">
                        {isLoading ? (
                            [1, 2].map((k) => (
                                <div key={k} className="relative">
                                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-white border-4 border-Green rounded-full z-10"></div>
                                    <ParagraphSkeleton className={"p-8 h-full w-full relative ml-0 md:ml-16"} />
                                </div>
                            ))
                        ) : (
                            data && data[1]?.expCards?.map((item, key) => (
                                <div key={key} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-white border-4 border-Green rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>
                                    
                                    {/* Experience Card */}
                                    <div className="ml-0 md:ml-16 transform group-hover:scale-[1.02] transition-all duration-300">
                                        <Exp_Card data={item} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 md:mt-16 text-center">
                    <div className="card_stylings p-8 md:p-12">
                        <h3 className="text-Snow text-xl md:text-2xl font-bold mb-4">Ready to Work Together?</h3>
                        <p className="text-LightGray text-sm md:text-base mb-6 max-w-2xl mx-auto">
                            Let's discuss how my experience can contribute to your next project.
                        </p>
                        <a href="/contact" className="cta-primary inline-flex items-center gap-2">
                            <span>Get In Touch</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}


