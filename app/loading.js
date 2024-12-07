import { Skeleton } from "@/components/ui/skeleton";


const Loading = () => {
    return(
        <div className="w-full min-h-screen ">

        <Skeleton> <b style={{color: "green"}}> Please Wait</b></Skeleton>
        </div>
    )
}

export default Loading;