// import { assets } from "@/assets/assets";
import { Skeleton } from "@/components/ui/skeleton";
// import Image from "next/image";


const Loading = () => {
    return(
        <div className="w-full min-h-screen ">
        <Skeleton> 
            Please Wait
            </Skeleton>
        </div>
    )
}

export default Loading;