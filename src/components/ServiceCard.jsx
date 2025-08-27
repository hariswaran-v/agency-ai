import React, { useRef, useState } from "react";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative max-w-lg m-2 sm:m-4 rounded-xl p-[2px] transition-all duration-500"
      style={{
        background: visible
          ? `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(59,130,246,1), rgba(139,92,246,0.6), transparent 70%)`
          : "gray", // fallback border color when not hovered
      }}
    >
      {/* Inner card */}
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-2xl shadow-gray-100 dark:shadow-white/10">
        {/* Content */}
        <div className="flex items-center gap-10 p-8 z-10 relative">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
            <img
              src={service.icon}
              alt={service.title}
              className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
