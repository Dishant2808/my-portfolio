import BannerLayout from "../components/Common/BannerLayout";
import Exp_Card from "../components/Background/Exp_Card";
import PageHero from "../components/Common/PageHero";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

export default function Experience() {
    const { isLoading, data } = useQuery('background', () =>
        axios.get('api/background').then(({ data }) => data)
    );

    const companiesCount = data && data[1]?.expCards ? [...new Set(data[1].expCards.map(c => c.title))].length : 0;
    const heroStats = [
        { value: `${companiesCount}+`, label: 'Companies', colorClass: 'text-Green' },
        { value: '4+', label: 'Years Experience', colorClass: 'text-ElectricBlue' },
        { value: 'Full-Stack', label: 'Specialization', colorClass: 'text-NeonPurple' },
    ];

    return (
        <BannerLayout>
            <div className="px-4 sm:px-6 pt-6 pb-6">
                <PageHero
                    title="Professional Journey"
                    description="A timeline of my professional growth, showcasing the roles and responsibilities I've held, the challenges I've overcome, and the impactful outcomes I've delivered throughout my career."
                    icon={
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                    }
                    stats={heroStats}
                />

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


