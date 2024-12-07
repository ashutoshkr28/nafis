import { assets } from "@/assets/assets";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";


const Loading = () => {
    return(
        <div className="w-full min-h-screen ">

        <Skeleton> 
            <div className="mt-10 ml-10">
            <Image href = {assets.newnafis}></Image>
            </div>
            </Skeleton>
        </div>
    )
}

export default Loading;