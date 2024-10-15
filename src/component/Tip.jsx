
import Light from '../assets/LightSVg.svg'
import Project from '../assets/Project2.png'
// mport icon from '../assets/icon.svg';
import '../component/tip.css';
import React from 'react';
const Tip = () => {
    return (
        <div className=" min-h-screen p-8 text-white">



            {/* Section: Tip - What's a project */}
            <div className='text-left text-gray-400 mb-2'>Tip</div>
            <div className="bg-[#192c4b]  p-6 rounded-lg mb-8 shadow-lg">

                <div className='flex flex-row  '>
                    <div>
                        <img src={Light} alt="Light Image" width={22} height={22}  />

                    </div>

                    <div className="text-xl font-semibold flex items-center mb-4 montserrat-font italic">
                        Tip: What’s a project?
                    </div>


                </div>

                
                


                <div>
                    <div className="text-gray-400 text-left montserrat-font " >
                        Your Dashboard is divided into separate projects, that allows you to keep assets different from each other similar to real-
                        <br />
                        world scenarios. Each project contains folders which contain your converted code. Create a new project or use the <strong>Default</strong>
                        <br />
                        <strong> Project</strong> created by default for you.

                    </div>

                </div>

            </div>


            <div className='text-left text-gray-400 mb-2'>Tip with image</div>

            {/* Section: Tip - Project Structure */}
            <div className=" flex flex-row justify-between items-center gap-x-3 bg-[#192c4b]  rounded-lg  shadow-lg  ">

                  {/* left wala sara content */}
                <div className='flex flex-col'>

                    <div className='flex flex-row ml-5 '>
                        <div>
                        <img src={Light} alt="Light Image" width={22} height={22}  />

                        </div>

                        <div className="text-xl font-semibold flex items-center mb-4 montserrat-font italic">
                            Tip: What’s a project?
                        </div>


                    </div>


                    <p className='text-left ml-4 montserrat-font'>
                        By default, every project contains two folders:
                    </p>


                    <div className='text-left ml-4 montserrat-font'>
                        <div className='mt-3'>
                            <strong className='font-normal'>"ui-component":</strong>
                            <br />
                            <div className='text-gray-400 '>
                            contains all components converted via <strong>Dualite’s ComponentMode</strong>
                            </div>
                            
                        </div>
                        <div className='mt-3 mb-1 '>
                            <strong className='font-normal'>"animations"</strong>:
                            <br />
                            
                            <div className='text-gray-400 '>
                            contains all animations made via our
                            <strong> Export Prototype to code</strong> plugin

                            </div>
                            
                            
                        </div>
                    </div>

                </div>




                {/* right image */}
                <div >
                    <img src={Project} alt="Light Image" width={400}   />

                </div>


            </div>





            













        </div>
    );
};

export default Tip;
