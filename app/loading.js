import { Skeleton } from "@/components/ui/skeleton";


const Loading = () => {
    return(
        <div className="w-full min-h-screen">
        <Skeleton> Please Wait</Skeleton>
        </div>
    )
}

export default Loading;