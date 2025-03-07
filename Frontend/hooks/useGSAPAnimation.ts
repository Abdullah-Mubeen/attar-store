"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = () => {
  // Properly type sectionRefs to store HTML elements
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Loop through each section and apply GSAP animations
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      // Parallax background effect
      gsap.to(section.querySelector(".bg-image"), {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: section as HTMLElement, // Type the trigger as HTMLElement
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content animation
      const content = section.querySelector(".content");
      const illustration = section.querySelector(".illustration");

      gsap.from(content, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        scrollTrigger: {
          trigger: section as HTMLElement, // Type the trigger as HTMLElement
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });

      if (illustration) {
        gsap.from(illustration, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          scrollTrigger: {
            trigger: section as HTMLElement, // Type the trigger as HTMLElement
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        });
      }
    });

    // Hero section parallax text
    gsap.to(".hero-text", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: document.querySelector(".hero-section") as HTMLElement, // Casting to HTMLElement
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cleanup the ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return sectionRefs;
};
