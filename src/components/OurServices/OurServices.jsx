import React from "react";
import "./OurServices.css";
const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Still Photography",
      description:
        "Our luxury photography and videography services capture your wedding with exquisite detail, creating a timeless film for you to relive your special day whenever you desire. At cupido we believe in preserving precious memories lifetime.",
    },
    {
      id: 2,
      title: "Wedding Videography",
      description:
        "Your wedding day, a cherished memory,a tale of love and joy for eternity. Our lens shall capture each fleeting moment,and weave them into a timeless component.Let us immortalize your special day,with our expert videography services.",
    },
    {
      id: 3,
      title: "Save the Date Videos",
      description:
        "Crafting exquisite save the date videos. With professionalism that truly shows from the smallest detail to the grandest scope, we capture your love in cinematic hope. Let us tell your story with skill and grace, a beautiful memory, a treasured embrace.",
    },
  ];

  const ArrowIcon = () => (
    <svg
      width="60"
      height="24"
      viewBox="0 0 60 24"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M2 12H58M58 12L48 2M58 12L48 22"
        stroke="#d4a574"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 4L54 12L46 20"
        stroke="#d4a574"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M40 6L48 12L40 18"
        stroke="#d4a574"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );

  return (
    <section className="our-services">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h3 className="subtitle">Services</h3>
          <h1 className="title">Capturing Your Special Day</h1>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <ArrowIcon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
