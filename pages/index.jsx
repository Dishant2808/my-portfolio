import Link from 'next/link';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Reveal from '../components/Common/Reveal';

const home = () => {
    const stats = [
        { number: "4+", label: "Years Experience", color: "text-Green" },
        { number: "20+", label: "Projects Delivered", color: "text-ElectricBlue" },
        { number: "5+", label: "Technologies", color: "text-NeonPurple" },
        { number: "100%", label: "Client Satisfaction", color: "text-Green" }
    ];

    const quickLinks = [
        { title: "About Me", description: "Learn about my journey", link: "/about", icon: "👨‍💻" },
        { title: "My Work", description: "View my projects", link: "/projects", icon: "💼" },
        { title: "Experience", description: "Professional background", link: "/experience", icon: "🚀" },
        { title: "Contact", description: "Get in touch", link: "/contact", icon: "📧" }
    ];

    return (
        <div className="Home-Page -z-10 bg-DeepNightBlack">
            {/* Hero – dark theme, lime accent, floating orbs */}
            <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden py-12 md:py-16">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(163,230,53,0.08),transparent_50%)]" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(56,189,248,0.06),transparent)]" aria-hidden="true" />
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(250,250,250,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,250,.15)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden="true" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-Green/15 rounded-full blur-3xl animate-pulse hero-float" />
                    <div className="absolute bottom-20 right-10 w-56 h-56 md:w-96 md:h-96 bg-ElectricBlue/10 rounded-full blur-3xl animate-pulse hero-float-delay-1" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-NeonPurple/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <div className="relative inline-block mb-6 md:mb-8 group">
                            <div className="absolute -inset-2 bg-Green/20 rounded-full blur-2xl opacity-60" />
                            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-DarkGray bg-EveningBlack shadow-xl">
                                <img
                                    src="/images/profile.jpg"
                                    alt="Dishant Thakur"
                                    width={208}
                                    height={208}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-Snow mb-3 md:mb-5 font-circular-bold tracking-tight">
                            Hello, I'm <span className="text-Green">Dishant Thakur</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-LightGray mb-4 md:mb-6 font-circular-normal">
                            <span className="inline-flex items-center font-bold text-Green px-2 py-0.5 rounded-md bg-Green/10 border border-Green/30">Team Leader</span>
                        </p>

                        <p className="text-sm sm:text-base md:text-lg text-SilverGray max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed font-circular-normal px-1">
                            I lead development teams and build production-grade web applications with modern stacks, clean architecture, and a focus on performance and maintainability. From concept to deployment, I help turn business goals into reliable software.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10">
                            <Link href="/projects" className="cta-primary inline-flex items-center justify-center gap-2 group min-h-[44px] px-6 py-3 text-sm md:text-base rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                                <span>Explore My Work</span>
                                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="cta-secondary inline-flex items-center justify-center gap-2 group min-h-[44px] px-6 py-3 text-sm md:text-base rounded-xl border border-DarkGray hover:border-Green/50 hover:bg-Green/10 hover:text-Snow transition-all duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Get In Touch</span>
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="inline-flex items-baseline gap-1.5 px-4 py-2 rounded-full bg-EveningBlack border border-DarkGray hover:border-Green/30 transition-colors">
                                    <span className={`text-lg md:text-xl font-bold ${stat.color}`}>{stat.number}</span>
                                    <span className="text-SilverGray text-xs md:text-sm font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Reveal>
                <section className="py-10 md:py-16 bg-MidNightBlack border-t border-DarkGray">
                    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-Snow mb-3 font-circular-bold">Explore My World</h2>
                            <div className="w-20 h-1 sm:w-24 bg-Green rounded-full mx-auto" aria-hidden="true" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                            {quickLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.link}
                                    className="group flex flex-col rounded-2xl border border-DarkGray bg-EveningBlack p-6 transition-all duration-300 hover:border-Green/50 hover:shadow-lg min-h-[180px]"
                                >
                                    <span className="text-3xl mb-4 block w-fit group-hover:scale-110 transition-transform" aria-hidden="true">{link.icon}</span>
                                    <h3 className="text-Snow font-bold text-lg group-hover:text-Green transition-colors">{link.title}</h3>
                                    <p className="text-LightGray text-sm mt-1 flex-1">{link.description}</p>
                                    <span className="mt-4 text-Green text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all w-fit">
                                        Learn more
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal>
                <section id="expertise" className="py-10 md:py-16 border-t border-DarkGray">
                    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-Snow mb-3 font-circular-bold">My Expertise</h2>
                            <div className="w-20 h-1 sm:w-24 bg-Green rounded-full mx-auto" aria-hidden="true" />
                            <p className="text-LightGray text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto px-2">
                                Technologies and skills I use to bring your ideas to life
                            </p>
                        </div>
                        <MyExpertise />
                    </div>
                </section>
            </Reveal>

            <Reveal>
                <section className="py-10 md:py-16 bg-MidNightBlack border-t border-DarkGray">
                    <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
                        <div className="relative card_stylings p-6 sm:p-8 md:p-12 max-w-4xl mx-auto rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-Green/5 pointer-events-none" aria-hidden="true" />
                            <div className="relative">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-Snow mb-4 md:mb-6 font-circular-bold">
                                    Ready to Start Your Next Project?
                                </h2>
                                <p className="text-LightGray text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                                    Let's collaborate and create something amazing together. I'm here to help you achieve your goals.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                    <a href="/contact" className="cta-primary inline-flex items-center justify-center gap-2 group min-h-[44px] px-6 py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                                        <span>Start a Project</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* <Footer /> */}
        </div>
    )
}

export default home