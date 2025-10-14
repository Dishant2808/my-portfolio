import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaMapMarkerAlt, FaHeart, FaPaperPlane } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Footer from '../components/Footer';

const Contact = () => {

    const contactMethods = [
        {
            icon: FaPhone,
            title: "Phone & Mobile",
            details: ["+91 86289 24100", "+91 85447 31330"],
            color: "from-Green to-ElectricBlue",
            bgColor: "bg-Green/10",
            borderColor: "border-Green/30"
        },
        {
            icon: HiMail,
            title: "Email",
            details: ["dishantthakur8282@gmail.com"],
            color: "from-ElectricBlue to-NeonPurple",
            bgColor: "bg-ElectricBlue/10",
            borderColor: "border-ElectricBlue/30"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            details: ["Mohali, Punjab", "India"],
            color: "from-NeonPurple to-Green",
            bgColor: "bg-NeonPurple/10",
            borderColor: "border-NeonPurple/30"
        },
        {
            icon: FaHeart,
            title: "Social Media",
            details: ["@dishantthakur"],
            color: "from-Green to-NeonPurple",
            bgColor: "bg-Green/10",
            borderColor: "border-Green/30",
            social: true
        }
    ]

    return (
        <BannerLayout>
            <div className="relative min-h-screen px-4 py-8">
                {/* Background with animated gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-Green/5 via-ElectricBlue/5 to-NeonPurple/5"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-Green/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-ElectricBlue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-NeonPurple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>
                
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-Green to-ElectricBlue rounded-xl flex items-center justify-center">
                                <FaPaperPlane className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-Snow font-circular-bold">
                                    Let's Connect
                                </h1>
                                <div className="w-16 h-1 bg-gradient-to-r from-Green to-ElectricBlue rounded-full mt-2"></div>
                            </div>
                        </div>
                        <p className="text-LightGray text-lg md:text-xl max-w-2xl mx-auto font-circular-normal">
                            Ready to bring your ideas to life? I'm here to help you create something amazing. 
                            Let's start a conversation about your next project.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Quick Response Card */}
                            <div className="card_stylings p-8 group hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-Green to-ElectricBlue rounded-lg flex items-center justify-center">
                                        <FaPhone className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-Snow text-xl font-bold font-circular-bold">Quick Response</h3>
                                </div>
                                <p className="text-SilverGray leading-relaxed mb-4">
                                    I typically respond to messages within 24 hours. For urgent projects, 
                                    feel free to call me directly.
                                </p>
                                <div className="space-y-2">
                                    <a href="tel:+918628924100" className="flex items-center gap-2 text-Green hover:text-Green/80 transition-colors">
                                        <FaPhone className="w-4 h-4" />
                                        <span>+91 86289 24100</span>
                                    </a>
                                    <a href="tel:+918544731330" className="flex items-center gap-2 text-Green hover:text-Green/80 transition-colors">
                                        <FaPhone className="w-4 h-4" />
                                        <span>+91 85447 31330</span>
                                    </a>
                                </div>
                            </div>

                            {/* Email Me Card */}
                            <div className="card_stylings p-8 group hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-ElectricBlue to-NeonPurple rounded-lg flex items-center justify-center">
                                        <HiMail className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-Snow text-xl font-bold font-circular-bold">Email Me</h3>
                                </div>
                                <p className="text-SilverGray leading-relaxed mb-4">
                                    Prefer email? Send me a detailed message about your project and I'll get back to you soon.
                                </p>
                                <a href="mailto:dishantthakur8282@gmail.com" className="flex items-center gap-2 text-ElectricBlue hover:text-ElectricBlue/80 transition-colors">
                                    <HiMail className="w-4 h-4" />
                                    <span>dishantthakur8282@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Methods Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <div key={index} className="card_stylings p-6 group hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <div className="flex flex-col items-center text-center">
                                            <div className={`w-16 h-16 rounded-full ${method.bgColor} flex items-center justify-center mb-4 border-2 ${method.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className={`text-2xl text-Green`} />
                                            </div>
                                            <h3 className="text-Snow font-bold text-lg mb-3 group-hover:text-Green transition-colors duration-300">
                                                {method.title}
                                            </h3>
                                            <div className="space-y-1">
                                                {method.details.map((detail, detailIndex) => (
                                                    <p key={detailIndex} className="text-LightGray text-sm">
                                                        {detail}
                                                    </p>
                                                ))}
                                                {method.social && (
                                                    <div className="flex justify-center space-x-3 mt-3">
                                                        <a 
                                                            href="https://www.linkedin.com/in/dishant-thakur-43609b200" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-Green hover:text-Green/70 transition-colors cursor-pointer hover:scale-110 transform duration-300"
                                                        >
                                                            <FaLinkedin className="text-xl" />
                                                        </a>
                                                        <a 
                                                            href="https://github.com/Dishant2808/" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-Green hover:text-Green/70 transition-colors cursor-pointer hover:scale-110 transform duration-300"
                                                        >
                                                            <FaGithub className="text-xl" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Call to Action */}
                        <div className="text-center">
                            <div className="card_stylings p-8 md:p-12">
                                <h3 className="text-Snow text-2xl md:text-3xl font-bold mb-4 font-circular-bold">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-LightGray text-lg mb-8 max-w-2xl mx-auto">
                                    Let's discuss your ideas and create something amazing together. 
                                    I'm excited to hear about your vision!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:+918628924100" className="cta-primary inline-flex items-center gap-2 group">
                                        <FaPhone className="w-4 h-4" />
                                        <span>Call Now</span>
                                    </a>
                                    <a href="mailto:dishantthakur8282@gmail.com" className="cta-secondary inline-flex items-center gap-2 group">
                                        <HiMail className="w-4 h-4" />
                                        <span>Send Email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </BannerLayout>
    )
}

export default Contact