import React from 'react';
import Image from 'next/image';

export default function AvatarRound({image, width, height}) {

    return (
        <>
            <Image 
                className={`relative w-[${width}px] h-[${height}px] rounded-full`}
                src={image}
                alt="avatar"
                width={width}
                height={height}    
            />
        </>
    );
}