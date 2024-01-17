"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <p className="mb-3 text-left">
        During my enriching six-month tenure at ACSIS (Healthcare System Impact
        Syndicate), I thrived as a fullstack engineer. My responsibilities
        encompassed architecting robust systems, collaborating seamlessly with
        cross-functional teams, and ensuring the seamless integration of
        front-end and back-end components. I played a pivotal role in designing
        and implementing innovative solutions to enhance the overall
        functionality and user experience of healthcare applications. This
        experience not only honed my technical skills but also deepened my
        understanding of the healthcare sector's unique challenges and
        requirements. Working within the dynamic environment of ACSIS allowed me
        to contribute meaningfully to the development of impactful healthcare
        solutions, solidifying my position as a versatile and proficient
        fullstack developer.
      </p>
    </section>
  );
}

{
  /* <VerticalTimeline lineColor="">
        {experiencesData?.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))} 
      </VerticalTimeline> */
}
