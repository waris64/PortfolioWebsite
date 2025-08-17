import React from 'react';
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="px-2 py-4 text-3xl font-bold md:pb-16 md:pl-32">Skills</h2>
      <section className=" m-auto flex flex-wrap items-center justify-center px-2 md:gap-y-7 md:pb-10   lg:w-1/2">
        <FaReact className="text-7xl text-[#0ea5e9] md:text-9xl " />
        <FaJs className="text-7xl text-[#f7e025] md:text-9xl" />
        <FaHtml5 className="text-7xl text-[#e5532d] md:text-9xl" />
        <FaCss3 className="text-7xl text-[#0b57d0] md:text-9xl" />
        <RiTailwindCssFill className="text-7xl text-[#3ebff8] md:text-9xl " />
        <FaBootstrap className="text-7xl text-[#8419fb] md:text-9xl" />
        <RiNextjsFill className="text-7xl md:text-9xl " />
      </section>
    </section>
  );
};

export default Skills;
