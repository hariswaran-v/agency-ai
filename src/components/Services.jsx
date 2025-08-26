import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.ads_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-32 -left-20 -z-10 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      {/* Services cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform"
          >
            <img src={service.icon} alt={service.title} className="w-16 h-16" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
