import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className="relative min-h-screen px-4 py-8">
                {/* Background with texture and gradient effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-Green/5 via-transparent to-ElectricBlue/5 opacity-50"></div>
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231fdf64' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-Snow mb-4 tracking-wide">
                            GET IN TOUCH
                        </h1>
                        <p className="text-Green text-lg md:text-xl font-medium">
                            Let's Work Together
                        </p>
                    </div>

                    {/* Contact Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {/* Phone & Mobile Card */}
                        <div className="bg-EveningBlack/80 backdrop-blur-sm rounded-2xl p-6 border border-Green/20 hover:border-Green/40 transition-all duration-300 hover:shadow-lg hover:shadow-Green/10">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-Green/10 flex items-center justify-center mb-4 border-2 border-Green/30">
                                    <FaPhone className="text-2xl text-Green" />
                                </div>
                                <h3 className="text-Snow font-bold text-lg mb-3">Phone & Mobile</h3>
                                <div className="space-y-1">
                                    <p className="text-LightGray text-sm">+91 86289 24100</p>
                                    <p className="text-LightGray text-sm">+91 85447 31330</p>
                                </div>
                            </div>
                        </div>

                        {/* Email & Website Card */}
                        <div className="bg-EveningBlack/80 backdrop-blur-sm rounded-2xl p-6 border border-Green/20 hover:border-Green/40 transition-all duration-300 hover:shadow-lg hover:shadow-Green/10">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-Green/10 flex items-center justify-center mb-4 border-2 border-Green/30">
                                    <HiMail className="text-2xl text-Green" />
                                </div>
                                <h3 className="text-Snow font-bold text-lg mb-3">Email</h3>
                                <div className="space-y-1">
                                    <p className="text-LightGray text-sm">dishantthakur8282@gmail.com</p>
                                    {/* <p className="text-LightGray text-sm">dishantthakur.com</p> */}
                                </div>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="bg-EveningBlack/80 backdrop-blur-sm rounded-2xl p-6 border border-Green/20 hover:border-Green/40 transition-all duration-300 hover:shadow-lg hover:shadow-Green/10">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-Green/10 flex items-center justify-center mb-4 border-2 border-Green/30">
                                    <FaMapMarkerAlt className="text-2xl text-Green" />
                                </div>
                                <h3 className="text-Snow font-bold text-lg mb-3">Address</h3>
                                <div className="space-y-1">
                                    <p className="text-LightGray text-sm">Mohali, Punjab</p>
                                    <p className="text-LightGray text-sm">India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Card */}
                        <div className="bg-EveningBlack/80 backdrop-blur-sm rounded-2xl p-6 border border-Green/20 hover:border-Green/40 transition-all duration-300 hover:shadow-lg hover:shadow-Green/10">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-Green/10 flex items-center justify-center mb-4 border-2 border-Green/30">
                                    <FaHeart className="text-2xl text-Green" />
                                </div>
                                <h3 className="text-Snow font-bold text-lg mb-3">Social Media</h3>
                                <div className="space-y-1">
                                    <p className="text-LightGray text-sm">@dishantthakur</p>
                                    <div className="flex justify-center space-x-3 mt-2">
                                        <a 
                                            href="https://www.linkedin.com/in/dishant-thakur-43609b200" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-Green hover:text-Green/70 transition-colors cursor-pointer"
                                        >
                                            <FaLinkedin className="text-2xl" />
                                        </a>
                                        <a 
                                            href="https://github.com/Dishant2808/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-Green hover:text-Green/70 transition-colors cursor-pointer"
                                        >
                                            <FaGithub className="text-2xl" />
                                        </a>
                                        {/* <FaTwitter className="text-Green hover:text-Green/70 transition-colors cursor-pointer" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>

    )
}

export default Contact