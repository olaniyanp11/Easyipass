import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Download = () => {
    return (
      <>
        <section
          className="w-full min-h-screen relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/people.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 flex flex-col  justify-center text-center items-center min-h-full px-4">
            <h2 className="text-white text-[15.5px] md:text-[25.5px] lg:text-[43.5px] font-bold text-center">
              Ready to Make the Most of Your Campus Life ?
            </h2>
            <p className="text-white text-[10px] md:text-[18px] mb-[25px] md:mb-[31px] lg:mb-[81px] lg:text-[29px] font-normal text-center mt-4 mx-auto max-w-[80%] px-4 ">
              Join thousands of students already making their campus life
              smarter, easier, and more rewarding
            </p>
                 <div className="flex space-x-4 gap-[19px] md:gap-[45px]  lg:gap-[128px]">
                     <Link
                       href={""}
                       className="bg-white text-secondary flex  rounded-xl py-2 px-7"
                     >
                       <Image
                         src="/images/play2.png"
                         alt="Play Store"
                         width={44}
                         height={47}
                         className="h-auto w-[44px]"
                       />
                       <div className="flex flex-col text-left ml-2">
                         <span>Get It On</span>
                         <h2>
                           <span className="text-2xl">G</span>oogle
                           <span className="text-2xl">P</span>lay
                         </h2>
                       </div>
                     </Link>
                     <Link
                       href={""}
                       className="bg-white text-secondary flex  rounded-xl py-2 px-7"
                     >
                       <Image
                         src="/images/apple2.png"
                         alt="Play Store"
                         width={44}
                         height={47}
                         className="h-auto w-[44px]"
                       />
                       <div className="flex flex-col text-left ml-2">
                         <span>Get It On</span>
                         <h2>
                           <span className="text-2xl">A</span>pp
                           <span className="text-2xl">S</span>tore
                         </h2>
                       </div>
                     </Link>
                   </div>
          </div>
          <div className="bg-black/50 w-full h-full absolute top-0 inset-0"></div>
        </section>
      </>
    );
}

export default Download