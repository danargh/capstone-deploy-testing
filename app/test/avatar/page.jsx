import AvatarSquare from '@/components/ui/AvatarSquare';
import AvatarRound from '@/components/ui/AvatarRound';
import Badge from '@/components/ui/Badge'
import React from 'react'
import TestIMG from 'public/assets/images/dokter.png';

export default function Page() {
  return (
    <>
        <div>Page</div>
        <div className="relative inline-block">
            <AvatarSquare image={TestIMG} round={20} width={190} height={192} />
                <Badge status={'online'} />
        </div>
        <div className='relative'>
            <AvatarRound image={TestIMG} round={20} width={190} height={192} />
        </div>
    </>
  )
}
