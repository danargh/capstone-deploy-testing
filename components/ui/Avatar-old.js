import React from 'react';
import Image from 'next/image';

// The design need to unify the corner round radius.....
// Still havent figured out how to round this yet, somehow, unless it's static i can't customize the round border

// export default function Avatar({image, round, width, height}) {

//     return (
//         <>
//             <Image 
//                 className={`relative w-[${width}px] h-[${height}px] rounded-[${round}px]`}
//                 src={image}
//                 alt="avatar"
//                 width={width}
//                 height={height}    
//             />
//         </>
//     );
// }

// YOU KNOW WHAT? I'LL JUST SPLIT THE AVATAR TYPE

export function AvatarSquare({image, width, height}) {

    return (
        <>
            <Image 
                className={`relative w-[${width}px] h-[${height}px]`}
                src={image}
                alt="avatar"
                width={width}
                height={height}    
            />
        </>
    );
}

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