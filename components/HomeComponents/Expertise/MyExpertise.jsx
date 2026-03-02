import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {isLoading ? (
                [1, 2, 3, 4, 5, 6].map((k) => (
                    <ParagraphSkeleton key={k} className="h-24 rounded-xl" />
                ))
            ) : (
                data?.map((item, key) => (
                    <ExpertiseCard key={item?.id ?? key} data={item} index={key} />
                ))
            )}
        </div>
    )
}

export default MyExpertise