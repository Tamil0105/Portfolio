import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="GoZen Forms"
          webLink={"https://gozen.io/forms"}
          des=" Gozen Forms is a powerful and intuitive form builder that enables users to create, customize, and manage forms effortlessly. It supports a variety of form fields, integrations, and provides advanced analytics to track form submissions. Perfect for businesses looking to streamline data collection and improve user engagement."
          src={projectOne}
        />
        <ProjectsCard
        webLink={"https://gozen.io/cal"}
          title="GoZen Cal"
          des=" GoZen Cal is a user-friendly scheduling tool that simplifies the process of booking appointments and meetings. It integrates with popular calendar systems, allowing users to set their availability and share links for others to schedule time without back-and-forth emails. Ideal for professionals and businesses aiming to enhance their scheduling efficiency and client interactions."
          src={projectTwo}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects