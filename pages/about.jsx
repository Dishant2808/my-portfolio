import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";

export default function About() {
    return (
        <BannerLayout>
            <div className="px-4 sm:px-8 pt-10 pb-10">
                {/* Hero */}
                <div className="elevated-card p-6 md:p-8 mb-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="w-28 h-28 rounded-2xl overflow-hidden border border-DarkGray/60">
                            <img src="/images/profile.jpg" alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <span className="pill">Full‑Stack Developer</span>
                            <h1 className="text-Snow text-2xl md:text-3xl font-bold mt-2">Dishant Thakur</h1>
                            <p className="text-SilverGray text-sm mt-2 max-w-2xl">
                                I build clean, performant web apps with a focus on developer experience, maintainability,
                                and delightful user interfaces.
                            </p>
                            <div className="mt-4 flex gap-3">
                                <a href="#projects" className="cta-primary">View Projects</a>
                                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="cta-secondary">Download CV</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                            <div className="stat">
                                <span className="text-Snow text-xl font-bold">5+</span>
                                <span className="text-LightGray text-xs">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="text-Snow text-xl font-bold">20+</span>
                                <span className="text-LightGray text-xs">Projects</span>
                            </div>
                            <div className="stat">
                                <span className="text-Snow text-xl font-bold">5</span>
                                <span className="text-LightGray text-xs">Tech Stacks</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="elevated-card p-6 md:col-span-2">
                        <h2 className="section-title">What I Do</h2>
                        <p className="section-subtext">
                            Design and deliver full‑stack solutions with React/Next.js on the frontend and Node/Laravel/PHP on
                            the backend. I emphasize readability, scalability, and DX to speed up iteration.
                        </p>
                    </div>
                    <div className="elevated-card p-6">
                        <h2 className="section-title">Core Skills</h2>
                        <ul className="section-subtext space-y-1 list-disc pl-5">
                            <li>React, Next.js, TypeScript</li>
                            <li>Node.js, Express, REST</li>
                            <li>PHP, Laravel, WordPress</li>
                            <li>TailwindCSS, Ant Design</li>
                        </ul>
                    </div>
                    <div className="elevated-card p-6 md:col-span-3">
                        <h2 className="section-title">Approach</h2>
                        <p className="section-subtext">
                            I favor strong fundamentals: clear naming, simple abstractions, and consistent patterns. I avoid
                            magic and prefer code that a teammate can understand quickly.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}


