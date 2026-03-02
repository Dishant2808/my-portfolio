import { useMemo } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import PageHero from "../components/Common/PageHero";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Projects = () => {
    const { isLoading, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching portfolio:', error))
    );
    const counts = useMemo(() => {
        const result = { laravel: 15, reactNext: 3, node: 2 };
        if (!Array.isArray(data)) return result;
        data.forEach((p) => {
            const techs = (p?.technologiesUsed || []).map(t => (t?.tech || '')).join(' ').toLowerCase();
            if (techs.includes('laravel')) result.laravel += 1;
            if (techs.includes('react') || techs.includes('next')) result.reactNext += 1;
            if (techs.includes('node')) result.node += 1;
        });
        return result;
    }, [data]);

    const heroStats = [
        { value: `${counts.laravel}+`, label: 'Laravel Projects', colorClass: 'text-Green' },
        { value: `${counts.reactNext}+`, label: 'React/Next.js Projects', colorClass: 'text-ElectricBlue' },
        { value: `${counts.node}+`, label: 'Node.js Projects', colorClass: 'text-NeonPurple' },
    ];

    return (
        <BannerLayout>
            <div className="px-4 sm:px-6 pt-6 pb-6">
                <PageHero
                    title="Projects"
                    description="A curated set of projects I've worked on. Click a project name or the globe icon to open the live site. Each card includes a brief description and the primary technologies used."
                    icon={
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                    }
                    stats={heroStats}
                />
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
