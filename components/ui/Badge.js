'use client';

import React,{ useState, useEffect } from 'react';

// The colour is temporary, need confirmation
export default function Badge({status}) {
    const [status_colour, set_statuscolour] = useState('');

    // there's probably better and more efficient way of doing this - need help...
    /*  if the status is ONLINE  then the colour is GREEN
        if the status is BUSY    then the colour is RED (?)
        if the status is OFFLINE then the colour is GRAY
        probably also add do not disturb but, need confirmation first!
    */
    useEffect(() => {
      if (status === 'online') {
        set_statuscolour('#1ab800') //from the figma 
      } else if (status === 'busy') {
        set_statuscolour('#b80000')
      } else {
        set_statuscolour('#a3a3a3')
      }
    
    }, [status])
    

  return (
    <div className="absolute top-0 right-0 translate-y-[5.8px] -translate-x-[6.28px]">
      <div className={`bg-web-green-500 rounded-[50%] w-[15.7px] h-[14.52px] relative`}></div>
    </div>
  );
}
