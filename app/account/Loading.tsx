'use client'

import Box from "@/components/Box"
import { HashLoader } from "react-spinners"


const Loading = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <HashLoader color="#9CF6FB" size={50}/>
        </Box>
    )
}

export default Loading