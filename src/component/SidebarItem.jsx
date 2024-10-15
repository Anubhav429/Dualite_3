
import React from 'react';
import vector from '../assets/Vector.png'
import setting from '../assets/Settings.svg'
import '../component/tip.css';

const SideBarItem = () => {
    return (

        <div className="bg-[#001537] border-[#1e293b] border-2 p-6 w-317 h-255 rounded-sm text-white flex flex-col">
            <div className='text-left  text-gray-400 mb-2  montserrat-font'>SideBar Item</div>
            {/*  1st section */}
            <div className='flex flex-row gap-32'>
                {/* image and text */}
                <div className='flex flex-row gap-2 ml-5'>
                    <div>
                        <img src={vector} alt="Light Image" width={22} />
                    </div>

                    <div className=' montserrat-font text-[#C2C7D0] font-semibold'>
                        Default Project
                    </div>

                </div>

                <div>
                    <img src={setting} alt="Light Image" width={22} />
                </div>
            </div>

            {/* 2nd section */}

            <div className='mt-4'>

                <div className='text-left  text-gray-400 mb-1  montserrat-font'>SideBar Item- Selected</div>
                {/*  1st section */}
                <div className='flex flex-row gap-32 rounded-md bg-blue-600 w-80 h-10 justify-center items-center '>
                    {/* image and text */}
                    <div className='flex flex-row   gap-2 '>
                        <div>
                            <img src={vector} alt="Light Image" width={22} />
                        </div>

                        <div className=' montserrat-font font-semibold text-[#C2C7D0]'>
                            Default Project
                        </div>

                    </div>

                    <div>
                        <img src={setting} alt="Light Image" width={22} />
                    </div>
                </div>

            </div>

            {/*  third section */}

            <div className='flex flex-row gap-2 mt-6'>
                <div className=' montserrat-font '>
                    <strong className='font-semibold'>
                    about the settings icon
                    </strong>
                    
                </div>

                <div>
                    <img src={setting} alt="Light Image" width={22} />
                </div>
            </div>


            <div className='mt-4 text-left montserrat-font'>
                <strong className='font-semibold'> pass a prop </strong>showSettings if passed true,show
                <br />
                <strong className='font-semibold'> this icon. do nothing on icon click.</strong>
            </div>
        </div>
    );
};

export default SideBarItem;
