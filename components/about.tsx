"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" mb-4 max-w-[45rem] text-center leading-8 sm:mb-16 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className=" text-left">
      Hello! <span className="italic">I'm Eyob, </span> 
        <span className="font-bold">Full-Stack Developer</span> with a passion for building reliable and scalable web applications. I enjoy taking on challenges and transforming ideas into functional, user-friendly software.
        <br />
        <br />
        I started out in front-end development, focusing on creating responsive and user-friendly interfaces. Over time, I expanded my skills to include back-end development, databases, and server management, allowing me to handle the full spectrum of web development.
        <br />
        <br />
        I'm committed to keeping up with the latest industry trends and continuously improving my skills. I love collaborating on projects, sharing knowledge, and contributing to the tech community. 
        <br />
        <br />
        If you're looking for a skilled full-stack developer to bring your vision to life, let's collaborate and make something incredible together!
      </p>
    </motion.section>
  );
}

{
  /* <p className="mb-3">
After graduating with a degree in{" "}
<span className="font-medium">Accounting</span>, I decided to pursue my
passion for programming. I enrolled in a coding bootcamp and learned{" "}
<span className="font-medium">full-stack web development</span>.{" "}
<span className="italic">My favorite part of programming</span> is the
problem-solving aspect. I <span className="underline">love</span> the
feeling of finally figuring out a solution to a problem. My core stack
is{" "}

  React, Next.js, Node.js, and MongoDB
</span>
. I am also familiar with TypeScript and Prisma. I am always looking to
learn new technologies. I am currently looking for a{" "}
<span className="font-medium">full-time position</span> as a software
developer.
</p>

<p>
<span className="italic">When I'm not coding</span>, I enjoy playing
video games, watching movies, and playing with my dog. I also enjoy{" "}
<span className="font-medium">learning new things</span>. I am currently
learning about{" "}
<span className="font-medium">history and philosophy</span>. I'm also
learning how to play the guitar.
</p> */
}
