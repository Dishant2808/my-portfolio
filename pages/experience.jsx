import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Exp_Card from "../components/Background/Exp_Card";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

export default function Experience() {
    const { isLoading, data } = useQuery('background', () =>
        axios.get('api/background').then(({ data }) => data)
    );

    return (
        <BannerLayout>
            <div className="px-4 sm:px-8 pt-10 pb-6">
                <div className="card_stylings p-6 md:p-8 mb-6">
                    <h1 className="text-Snow text-2xl md:text-3xl font-bold">Experience</h1>
                    <p className="text-LightGray text-xs md:text-sm mt-2 max-w-3xl">
                        Roles and responsibilities I’ve held, highlights and impactful outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {isLoading ? (
                        [1, 2, 3].map((k) => (
                            <ParagraphSkeleton key={k} className={"p-8 h-full w-full relative"} />
                        ))
                    ) : (
                        data && data[1]?.expCards?.map((item, key) => (
                            <Exp_Card key={key} data={item} />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}


