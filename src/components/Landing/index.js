'use client';
import Image from "next/image";

const page = () => {
    return (
    <>
        <Image 
        src="/background.jpg"
        fill={true}
        alt="background"
        />
    </>
    )
}

export default page