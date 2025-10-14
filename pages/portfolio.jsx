import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        <BannerLayout>
            <div className="px-6 sm:px-8 pt-6">
                <div className="card_stylings p-6 md:p-8 mb-6">
                    <h1 className="text-Snow text-xl md:text-2xl font-bold">Selected Projects</h1>
                    <p className="text-LightGray text-xs md:text-sm mt-2 max-w-3xl">
                        A curated set of projects I've worked on. Click a project name or the globe icon to open the live site. Each card includes a brief description and the primary technologies used.
                    </p>
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
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
