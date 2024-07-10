"use client";

import React from "react";
import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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

        During my time at the African Healthcare System Impact Syndicate (ACSIS), I played a crucial role as a full-stack engineer. My primary responsibility was to develop and integrate robust systems that significantly enhanced the functionality and user experience of our healthcare applications. By working closely with cross-functional teams, I successfully increased user engagement by developing optimized web solutions for a large user base. This experience allowed me to contribute meaningfully to the organization through the implementation of efficient digital solutions
      </p>
      <p className="mb-3 text-left">

        At the Ethiopian Thoracic Society (ETS), I focused on improving access to respiratory health information and enhancing healthcare delivery efficiency. I developed and maintained healthcare portals that served a substantial number of users, ensuring they had access to vital health information. My efforts also included creating new systems that boosted healthcare delivery efficiency. My contributions involved implementing cost-effective technology solutions tailored to their specific needs.
      </p>
      <p className="mb-3 text-left">

        In addition to my work with ACSIS and ETS, I have collaborated with various other clients on a range of web development projects. These experiences have further refined my skills in creating user-friendly and impactful web solutions. Working with diverse clients has allowed me to adapt to different requirements and deliver customized solutions that meet their unique needs. Through these projects, I have consistently demonstrated my ability to enhance user engagement and improve overall functionality, solidifying my reputation as a versatile and proficient full-stack developer.
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
