import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-icon", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">
          Contact
        </h2>
        <p className="contact-text mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email: {""}
          <a href="mailto:wibfikri@gmail.com" className="border-b">
            wibfikri@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/fikri-wibowo-44a64429a/"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
            target="_blank"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/Fikriwib12"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Github profile"
            target="_blank"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/fikri.wib_/"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Instagram profile"
            target="_blank"
          >
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
