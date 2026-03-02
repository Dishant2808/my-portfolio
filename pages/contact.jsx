import BannerLayout from '../components/Common/BannerLayout';
import PageHero from '../components/Common/PageHero';
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaShareAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <BannerLayout>
            <div className="relative min-h-screen px-4 sm:px-6 py-6">
                <PageHero
                    title="Let's Connect"
                    description="Ready to bring your ideas to life? I'm here to help you create something amazing. Reach me using any of the options below."
                    icon={<FaPaperPlane className="w-6 h-6 md:w-7 md:h-7" />}
                />

                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    {/* 4 cards in one row – wider layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                        {/* Phone */}
                        <div className="card_stylings p-6 min-h-[200px] flex flex-col group hover:shadow-lg hover:border-Green/30 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-Green/15 border border-Green/30 flex items-center justify-center mb-4 text-Green flex-shrink-0">
                                <FaPhone className="w-6 h-6" />
                            </div>
                            <h3 className="text-Snow font-bold text-lg mb-3 group-hover:text-Green transition-colors">Phone</h3>
                            <div className="space-y-2 mt-auto">
                                <a href="tel:+918628924100" className="block text-Green hover:text-Green/80 text-sm font-medium transition-colors">+91 86289 24100</a>
                                <a href="tel:+918544731330" className="block text-Green hover:text-Green/80 text-sm font-medium transition-colors">+91 85447 31330</a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="card_stylings p-6 min-h-[200px] flex flex-col group hover:shadow-lg hover:border-Green/30 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-Green/15 border border-Green/30 flex items-center justify-center mb-4 text-Green flex-shrink-0">
                                <HiMail className="w-6 h-6" />
                            </div>
                            <h3 className="text-Snow font-bold text-lg mb-3 group-hover:text-Green transition-colors">Email</h3>
                            <div className="space-y-2 mt-auto overflow-hidden">
                                <a href="mailto:dishantthakur7016@gmail.com" className="block text-Green hover:text-Green/80 text-sm font-medium transition-colors break-all">dishantthakur7016@gmail.com</a>
                                <a href="mailto:dishantthakur8282@gmail.com" className="block text-Green hover:text-Green/80 text-sm font-medium transition-colors break-all">dishantthakur8282@gmail.com</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="card_stylings p-6 min-h-[200px] flex flex-col group hover:shadow-lg hover:border-Green/30 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-Green/15 border border-Green/30 flex items-center justify-center mb-4 text-Green flex-shrink-0">
                                <FaMapMarkerAlt className="w-6 h-6" />
                            </div>
                            <h3 className="text-Snow font-bold text-lg mb-3 group-hover:text-Green transition-colors">Location</h3>
                            <div className="mt-auto">
                                <p className="text-LightGray text-sm">Mohali, Punjab</p>
                                <p className="text-LightGray text-sm">India</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="card_stylings p-6 min-h-[200px] flex flex-col group hover:shadow-lg hover:border-Green/30 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-Green/15 border border-Green/30 flex items-center justify-center mb-4 text-Green flex-shrink-0">
                                <FaShareAlt className="w-6 h-6" />
                            </div>
                            <h3 className="text-Snow font-bold text-lg mb-3 group-hover:text-Green transition-colors">Social</h3>
                            <div className="flex gap-4 mt-auto">
                                <a href="https://www.linkedin.com/in/dishant-thakur-43609b200" target="_blank" rel="noopener noreferrer" className="text-Green hover:text-Green/80 transition-colors hover:scale-110 inline-block" aria-label="LinkedIn">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a href="https://github.com/Dishant2808/" target="_blank" rel="noopener noreferrer" className="text-Green hover:text-Green/80 transition-colors hover:scale-110 inline-block" aria-label="GitHub">
                                    <FaGithub className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* One CTA – no repeated numbers/emails */}
                    <div className="card_stylings p-8 md:p-10 text-center rounded-2xl">
                        <h3 className="text-Snow text-xl md:text-2xl font-bold mb-2 font-circular-bold">Have a project in mind?</h3>
                        <p className="text-LightGray text-sm md:text-base mb-6 max-w-xl mx-auto">
                            Use the details above to call, email, or connect. I'm excited to hear about your vision.
                        </p>
                        <a href="mailto:dishantthakur7016@gmail.com" className="cta-primary inline-flex items-center justify-center gap-2">
                            <HiMail className="w-4 h-4" />
                            <span>Send an email</span>
                        </a>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
};

export default Contact