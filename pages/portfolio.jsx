import { useMemo } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import { MdWork } from "react-icons/md";

const Projects = () => {

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    const counts = useMemo(() => {
        const result = { laravel: 10, reactNext: 3, node: 2 };
        if (!Array.isArray(data)) return result;
        data.forEach((p) => {
            const techs = (p?.technologiesUsed || []).map(t => (t?.tech || '')).join(' ').toLowerCase();
            if (techs.includes('laravel')) result.laravel += 1;
            if (techs.includes('react') || techs.includes('next')) result.reactNext += 1;
            if (techs.includes('node')) result.node += 1;
        });
        return result;
    }, [data])
    return (
        <BannerLayout>
            <div className="px-4 sm:px-8 pt-10 pb-6">
                {/* Hero Section (matching Experience page) */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-Green/5 via-ElectricBlue/5 to-NeonPurple/5 rounded-3xl"></div>
                    <div className="relative card_stylings p-8 md:p-12 mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-Green to-ElectricBlue rounded-xl flex items-center justify-center">
                                <MdWork className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-Snow text-3xl md:text-4xl font-bold font-circular-bold">Projects</h1>
                                <div className="w-16 h-1 bg-gradient-to-r from-Green to-ElectricBlue rounded-full mt-2"></div>
                            </div>
                        </div>
                        <p className="text-LightGray text-base md:text-lg leading-relaxed max-w-4xl font-circular-normal">
                            A curated set of projects I've worked on. Click a project name or the globe icon to open the live site. Each card includes a brief description and the primary technologies used.
                        </p>
                        {/* Stats inside hero */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-Green mb-1">{counts.laravel}+</div>
                                <div className="text-SilverGray text-sm font-medium">Laravel Projects</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-ElectricBlue mb-1">{counts.reactNext}+</div>
                                <div className="text-SilverGray text-sm font-medium">React/Next.js Projects</div>
                            </div>
                            <div className="stat group hover:shadow-lg transition-all duration-300">
                                <div className="text-2xl font-bold text-NeonPurple mb-1">{counts.node}+</div>
                                <div className="text-SilverGray text-sm font-medium">Node.js Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="grid justify items-center grid-flow-row sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-6 sm:px-8 pb-10">

                {
                    isLoading ?
                        [1, 2, 3, 4].map(() => (
                            <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >
        </BannerLayout >
    );
};

export default Projects;
