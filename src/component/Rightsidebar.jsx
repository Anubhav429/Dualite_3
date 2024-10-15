
import React from 'react';
import rightImage from '../assets/rightImage.svg'
import LeftImage from '../assets/LeftImage.svg'
const RightSideBar = () => {
    return (
        <div
            className="w-780 h-443 bg-[#001537] border-[#1e293b] p-20 mt-20 border-2" >
            <div className='flex flex-row justify-center items-center gap-9'>
               
               <div>
                {/* left */}
                <img src={LeftImage} alt="Light Image" width={315} />
               </div>
               
               <div>
                {/* right wala part */}
                <img src={rightImage} alt="Light Image" width={315} />

               </div>

            </div>


        </div>
    );
};

export default RightSideBar;
