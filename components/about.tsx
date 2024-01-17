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
        Hello there! <span className="italic">I'm Eyob Degefu</span> , a
        passionate and result-driven{" "}
        <span className="font-bold">Full-Stack Developer</span> with a keen
        interest in crafting robust and scalable web applications. I thrive on
        challenges and love turning ideas into functional, user-friendly
        software.
        <br />
        <br />
        My journey began with front-end technologies, where I honed my skills in
        crafting responsive and intuitive user interfaces. As I delved deeper
        into the world of web development, I expanded my expertise to include
        back-end technologies, databases, and server management.
        <br />
        <br />
        The tech landscape is ever-evolving, and I am committed to staying
        current with the latest industry trends. Whether it's adopting new
        technologies or refining existing skills, I believe in a continuous
        learning mindset.
        <br />
        <br />I am always eager to collaborate on exciting projects, share
        knowledge, and contribute to the tech community. If you're looking for a
        dedicated full-stack developer with a passion for innovation, feel free
        to reach out. Let's build something amazing together!
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
