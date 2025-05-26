import React, { useEffect, useState } from "react";
import "./Testimonials.css"; // For styling

const testimonialsData = [
  {
    name: "Jolsna Muraleedharan",
    role: "Happy Client",
    quote:
      "Cupido wedding films exceeded all my expectations. Their team was not only professional but also genuinely passionate about their work. The final output of my brother's wedding was a beautiful blend of artistry and technical skill…..",
  },
  {
    name: "Arjun Menon",
    role: "Groom",
    quote:
      "Cupido made our big day magical. Their ability to capture moments without interrupting the flow was amazing. Highly recommend!",
  },
  {
    name: "Nithya Ramesh",
    role: "Bride",
    quote:
      "From laughter to tears, every emotion was captured so beautifully. Cupido felt like family on our wedding day.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { name, role, quote } = testimonialsData[current];

  return (
    <div className="testimonial-container">
      <p className="testimonial-subtitle">Testimonials</p>
      <h2 className="testimonial-title">About Our Wedding</h2>
      <div className="testimonial-icon">❞</div>

      <p className="testimonial-quote">{quote}</p>

      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-role">{role}</p>
    </div>
  );
};

export default Testimonials;
