import Link from "next/link";
import BannerLayout from "../components/Common/BannerLayout";
import PageHero from "../components/Common/PageHero";

export default function About() {
    const skills = [
        { name: "React", level: 95, color: "from-ElectricBlue to-Green" },
        { name: "Next.js", level: 90, color: "from-Green to-NeonPurple" },
        { name: "Node.js", level: 85, color: "from-NeonPurple to-ElectricBlue" },
        { name: "PHP/Laravel", level: 88, color: "from-ElectricBlue to-Green" },
        { name: "TypeScript", level: 82, color: "from-Green to-NeonPurple" },
        { name: "TailwindCSS", level: 92, color: "from-NeonPurple to-ElectricBlue" }
    ];

    const techStack = [
        { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "TailwindCSS"], icon: "🎨" },
        { name: "Backend", techs: ["Node.js", "PHP", "Laravel", "Express"], icon: "⚙️" },
        { name: "Database", techs: ["MySQL", "MongoDB", "Firebase"], icon: "🗄️" },
        { name: "Tools", techs: ["Git", "Docker", "AWS", "Vercel"], icon: "🛠️" }
    ];

    const heroStats = [
        { value: '4+', label: 'Years Experience', colorClass: 'text-Green' },
        { value: '20+', label: 'Projects Delivered', colorClass: 'text-ElectricBlue' },
        { value: '5+', label: 'Technologies', colorClass: 'text-NeonPurple' },
    ];

    return (
        <BannerLayout>
            <div className="px-4 sm:px-6 pt-6 pb-6 lg:pb-10">
                <PageHero
                    title="About Me"
                    description="I craft exceptional digital experiences through clean, performant web applications. With a passion for developer experience and user-centric design, I transform ideas into scalable, maintainable solutions."
                    icon={
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    }
                    stats={heroStats}
                />

                {/* Profile + CTAs */}
                <div className="card_stylings p-6 md:p-8 mb-8 md:mb-12 rounded-2xl">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="relative group flex-shrink-0">
                            <div className="absolute -inset-1 bg-Green/20 rounded-2xl blur group-hover:bg-Green/30 transition-colors" />
                            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-DarkGray">
                                <img src="/images/profile.jpg" alt="Dishant Thakur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                <span className="pill">Team Leader</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-Green rounded-full animate-pulse" />
                                    <span className="text-xs text-LightGray">Available</span>
                                </div>
                            </div>
                            <h2 className="text-Snow text-2xl md:text-3xl font-bold font-circular-bold mb-2">Dishant Thakur</h2>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                                <Link href="/projects" className="cta-primary inline-flex items-center justify-center gap-2 group">
                                    <span>View My Work</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                                <Link href="/resume.pdf" target="_blank" rel="noreferrer" className="cta-secondary inline-flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    <span>Download CV</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-8 md:mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-Snow text-3xl md:text-4xl font-bold font-circular-bold mb-4">Technical Expertise</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-Green to-ElectricBlue rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="card_stylings p-6 group hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-Snow font-medium">{skill.name}</span>
                                    <span className="text-LightGray text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-MidNightBlack rounded-full h-2 overflow-hidden">
                                    <div 
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8 md:mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-Snow text-3xl md:text-4xl font-bold font-circular-bold mb-4">Tech Stack</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-NeonPurple to-Green rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((stack, index) => (
                            <div key={index} className="card_stylings p-6 group hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">{stack.icon}</div>
                                    <h3 className="text-Snow text-lg font-bold mb-3">{stack.name}</h3>
                                    <div className="space-y-2">
                                        {stack.techs.map((tech, techIndex) => (
                                            <div key={techIndex} className="text-SilverGray text-sm bg-MidNightBlack px-3 py-1 rounded-full">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Content */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                    <div className="card_stylings p-8 group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-Green to-ElectricBlue rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-Snow text-2xl font-bold font-circular-bold">What I Do</h2>
                        </div>
                        <p className="text-SilverGray leading-relaxed font-circular-normal">
                            I specialize in creating full-stack web applications that are both beautiful and functional. 
                            From concept to deployment, I focus on clean architecture, optimal performance, and exceptional 
                            user experiences that drive business results.
                        </p>
                    </div>

                    <div className="card_stylings p-8 group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-NeonPurple to-Green rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-Snow text-2xl font-bold font-circular-bold">My Approach</h2>
                        </div>
                        <p className="text-SilverGray leading-relaxed font-circular-normal">
                            I believe in writing code that tells a story. Clean, readable, and maintainable code is my priority. 
                            I follow best practices, embrace modern development workflows, and always consider the long-term 
                            scalability of every solution I build.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-6 md:mt-10">
                    <div className="card_stylings p-8 md:p-12">
                        <h3 className="text-Snow text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing Together</h3>
                        <p className="text-LightGray text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences.
                        </p>
                        <div>
                            <a href="/contact" className="cta-primary inline-flex items-center gap-2 group">
                                <span>Contact Me</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}


