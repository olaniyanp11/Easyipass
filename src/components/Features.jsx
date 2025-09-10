import Image from "next/image";
const Items = {
  Feature: {
    icon: "/images/Vector.png",
    title: "Campus Navigation",
    content:
      "The built-in campus map helps you locate lecture halls, hostels, libraries, labs, and event venues in seconds. Search for any building or facility, and get guided directions directly inside the app.",
  },
  Feature2: {
    icon: "/images/book.png",
    title: "Book Tutorials",
    content:
      "With the app, you can book one-on-one or group tutorials with tutors and senior students within your school. Browse subjects, check tutor availability, and select the time that works best for you. ",
  },
  Feature3: {
    icon: "/images/cal.png",
    title: "Book & Attend Events",
    content:
      "With the app, you can book one-on-one or group tutorials with tutors and senior students within your school. Browse subjects, check tutor availability, and select the time that works best for you.",
  },
  Feature4: {
    icon: "/images/globe.png",
    title: "Study Abroad",
    content:
      "Dreaming of studying abroad? With this feature, you’ll be the first to know about scholarships, international exchange programs, global internships, and study abroad fairs.",
  },
  Feature5: {
    icon: "/images/wallet.png",
    title: "Earn As A Student ",
    content:
      "Students don’t just use the app they grow with it. Host tutorials and get paid for teaching your peers. Organize events and earn through ticket sales or partnerships. With secure payment options built in.",
  },
};
const Features = () => {
  return (
    <>
      <div className="bg-white py-10 relative z-10">
        <div className="bg-primary/3 absolute w-full min-h-screen -z-10 top-0 inset-0"></div>
        <div className=" text-center text-secondary text-[36px] font-semibold pt-5">
          {" "}
          Our Special Features
        </div>
        <p className="text-center text-text px-4 md:px-20 lg:px-60 text-[24px] pb-4">
          Discover how one app helps you study smarter, enjoy campus life, and
          even earn while you learn.{" "}
        </p>
        <div className="px-14 gap-[50px] space-x-20 grid md:grid-cols-3 grid-cols-1 p-4  font-poppins  w-full mx-auto">



          
          {Object.values(Items).map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 w-full border border-white rounded-lg hover:border-[#e7ba04] transition duration-300"
            >
              <div className="flex items-center flex-col mb-4 text-primary relative gap-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={40}
                  className="w-[48px] h-[40px] object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2B99] text-center">
                    {item.title}
                  </h3>
                  <p className="text-text text-center">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Features;
