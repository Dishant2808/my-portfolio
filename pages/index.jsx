import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
// import { Link } from 'react-scroll';
import Link from 'next/link';

const home = () => {
    const stats = [
        { number: "4", label: "Years Experience", color: "text-Green" },
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
        <div className="Home-Page -z-10">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-Green/10 via-ElectricBlue/10 to-NeonPurple/10"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-Green/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-ElectricBlue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-NeonPurple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-8">
                    <div className="text-center">
                        {/* Profile Image */}
                        <div className="relative inline-block mb-8 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-Green via-ElectricBlue to-NeonPurple rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img src="/images/profile.jpg" alt="Dishant Thakur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-Green to-ElectricBlue rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-lg">👨‍💻</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-Snow mb-6 font-circular-bold">
                            Hello, I'm{' '}
                            <span className="bg-gradient-to-r from-Green via-ElectricBlue to-NeonPurple bg-clip-text text-transparent">
                                Dishant
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <div className="text-xl md:text-2xl lg:text-3xl text-LightGray mb-8 font-circular-normal">
                            <span className="inline-block mr-2">I'm a</span>
                            <span className="text-Green font-bold">Full-Stack Developer</span>
                            <span className="inline-block ml-2">building amazing digital experiences</span>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-SilverGray max-w-3xl mx-auto mb-12 leading-relaxed font-circular-normal">
                            I craft exceptional web applications with clean code, modern technologies, and user-centric design. 
                            Let's turn your ideas into reality with scalable, performant solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link 
                                href="projects" 
                                className="cta-primary inline-flex items-center gap-2 group"
                            >
                                <span>Explore My Work</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="cta-secondary inline-flex items-center gap-2 group">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Get In Touch</span>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-SilverGray text-sm md:text-base font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-LightGray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-16 bg-gradient-to-br from-MidNightBlack/50 to-EveningBlack/50">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-Snow mb-4 font-circular-bold">Explore My World</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-Green to-ElectricBlue rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index} 
                                href={link.link}
                                className="card_stylings p-6 group hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </div>
                                <h3 className="text-Snow text-lg font-bold mb-2 group-hover:text-Green transition-colors duration-300">
                                    {link.title}
                                </h3>
                                <p className="text-LightGray text-sm">
                                    {link.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section id="expertise" className="py-16">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-Snow mb-4 font-circular-bold">My Expertise</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-NeonPurple to-Green rounded-full mx-auto"></div>
                        <p className="text-LightGray text-lg mt-4 max-w-2xl mx-auto">
                            Technologies and skills I use to bring your ideas to life
                        </p>
                    </div>
                    <MyExpertise />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-Green/5 via-ElectricBlue/5 to-NeonPurple/5">
                <div className="container mx-auto px-4 sm:px-8 text-center">
                    <div className="card_stylings p-8 md:p-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-Snow mb-6 font-circular-bold">
                            Ready to Start Your Next Project?
                        </h2>
                        <p className="text-LightGray text-lg mb-8 max-w-2xl mx-auto">
                            Let's collaborate and create something amazing together. I'm here to help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="cta-primary inline-flex items-center gap-2 group">
                                <span>Start a Project</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            {/* <a href="/portfolio" className="cta-secondary inline-flex items-center gap-2 group">
                                <span>View Portfolio</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    )
}

export default home