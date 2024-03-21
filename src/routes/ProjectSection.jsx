import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faBuilding,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import psecAccounts from "../assets/PSECAccounts.png";

import psec1 from "../assets/PSEConnectHomPage.png";
import psec2 from "../assets/PSEConnectMarketPage.png";
import psec3 from "../assets/PSEConnectBrokersPage.png";

import ggNext from "../assets/ggnext.webp";
import tgh from "../assets/tgh.webp";
import df from "../assets/DF.webp";

import Project from "../components/ProjectContent";

import vite from "../assets/Vitejs.svg.png";
import html from "../assets/HTML5.svg.png";
import css from "../assets/CSS3.svg.png";
import bs5 from "../assets/Bootstrap.svg.png";
import js from "../assets/JavaScript.png";
import react from "../assets/React.svg.png";
import php from "../assets/PHP.svg.png";
import laravel from "../assets/Laravel.svg.png";
import mongodb from "../assets/MongoDB.svg.png";
import nodejs from "../assets/Node.js_logo.svg.png";
import express from "../assets/Express.png";
import cSharp from "../assets/Csharp.png";
import aspNetCore from "../assets/NetCore.svg.png";
import blazor from "../assets/Blazor.png";
import sql from "../assets/SQL.png";
import graphQL from "../assets/GraphQL.svg.png";
import jira from "../assets/Jira.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";

const ProjectSection = () => {
  const techStacksObj = {
    aspNetCoreStacks: [
      { src: cSharp, title: "C#", id: 1 },
      { src: aspNetCore, title: "ASP Net Core", id: 2 },
      { src: blazor, title: "Blazor", id: 3 },
      { src: sql, title: "SQL", id: 5 },
      { src: graphQL, title: "GraphQL", id: 6 },
    ],
    fundamentals: [
      { src: html, title: "HTML5", id: 7 },
      { src: js, title: "JavaScript", id: 8 },
      { src: css, title: "CSS3", id: 9 },
      { src: bs5, title: "Bootstrap", id: 10 },
    ],
    secondaryStack: [
      { src: mongodb, title: "MongoDB", id: 11 },
      { src: express, title: "Express", id: 12 },
      { src: react, title: "React", id: 13 },
      { src: nodejs, title: "NodeJs", id: 14 },
    ],
    others: [
      { src: vscode, title: "VSCode", id: 15 },
      { src: github, title: "Github", id: 15 },
      { src: jira, title: "Jira", id: 15 },
      { src: php, title: "PHP", id: 16 },
      { src: laravel, title: "Laravel", id: 17 },
    ],
  };

  const techStacks = [
    { src: html, title: "HTML5", id: 1 },
    { src: css, title: "CSS3", id: 2 },
    { src: bs5, title: "Bootstrap", id: 3 },
    { src: js, title: "JavaScript", id: 4 },
    { src: react, title: "React", id: 5 },
    { src: vite, title: "Vite", id: 6 },
    { src: php, title: "PHP", id: 7 },
    { src: laravel, title: "Laravel", id: 8 },
  ];

  return (
    <section className="container shadow pb-5 bg-glass pt-5">
      <section>
        <header className="col-lg-12 py-lg-5">
          <h2 className="text-center fs-1 py-3">
            <span className="yellowText">Corporate</span> Projects
          </h2>
          <div className="text-center fw-bold">
            Applications handled while staying in a company.
          </div>
        </header>
        <Project
          projectTitle="PSEConnect Public"
          category="Stock Exchange"
          shortDescription="Full-Stack Web Application"
          href="https://pseconnect.com/"
          imgSrc={psec1}
          repository="#"
        >
          {techStacksObj.aspNetCoreStacks.map((tech) => {
            return (
              <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-3"
                />
            );
          })}
          {techStacks.map((tech) => {
            if (tech.id <= 4 ) {
              return (
                <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-3"
                />
              );
            }
          })}
        </Project>
        <hr className="yellowText col-lg-11 mx-5 my-3 mb-5" />
        <Project
          projectTitle="PSEConnect Accounts"
          category="Authentication"
          shortDescription="Domain for PSEConnect Platforms Authentication"
          href="https://accounts.pseconnect.com/"
          imgSrc={psecAccounts}
          repository="#"
        >
          {techStacksObj.aspNetCoreStacks.map((tech) => {
            return (
              <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-3"
                />
            );
          })}
          {techStacks.map((tech) => {
            if (tech.id <= 4 ) {
              return (
                <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-3"
                />
              );
            }
          })}
        </Project>
        <hr className="yellowText col-lg-11 mx-5 my-3 mb-5" />
      </section>

      <section className="mt-5 border-top">
        <header className="col-lg-12 py-lg-5">
          <h2 className="text-center fs-1 py-3">
            <span className="yellowText">Personal</span> Projects
          </h2>
        </header>
        <Project
          projectTitle="Dream-Fields"
          category="Real Estate Web App"
          shortDescription="Full-Stack Web Application"
          href="#"
          imgSrc={df}
          repository="https://github.com/ricesush/dream-fields"
        >
          {techStacks.map((tech) => {
            if (tech.id < 4 || tech.id > 6) {
              return (
                <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-2"
                />
              );
            }
          })}
        </Project>
        <hr className="yellowText col-lg-11 mx-5 my-3 mb-5" />
        <Project
          projectTitle="GG-Next "
          category="Gaming Web App"
          shortDescription="API-driven Mini Web Application"
          href="https://gg-next-neon.vercel.app/"
          imgSrc={ggNext}
          repository="https://github.com/DavidQuebengco/project-2"
        >
          {techStacks.map((tech) => {
            if (tech.id < 5) {
              return (
                <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-2"
                />
              );
            }
          })}
        </Project>
        <hr className="yellowText col-lg-11 mx-5 my-3 mb-5" />
        <Project
          projectTitle="The Greenhouse"
          category="Agriculture Content"
          shortDescription="Static, Multi-page Responsive Website"
          href="https://thegreenhouse.vercel.app/"
          imgSrc={tgh}
          repository="https://github.com/ricesush/Hydroponics"
        >
          {techStacks.map((tech) => {
            if (tech.id < 5) {
              return (
                <img
                  key={tech.id}
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={25}
                  className="mx-2"
                />
              );
            }
          })}
        </Project>
      </section>
    </section>
  );
};

export default ProjectSection;
