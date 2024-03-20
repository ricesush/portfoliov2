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

const TechStack = () => {
  const techStacks = [
    { src: mongodb, title: "MongoDB", id: 1 },
    { src: express, title: "Express", id: 2 },
    { src: react, title: "React", id: 3 },
    { src: nodejs, title: "NodeJs", id: 4 },
    { src: js, title: "JavaScript", id: 5 },
    { src: html, title: "HTML5", id: 6 },
    { src: css, title: "CSS3", id: 7 },
    { src: bs5, title: "Bootstrap", id: 8 },
    { src: php, title: "PHP", id: 9 },
    { src: laravel, title: "Laravel", id: 10 },
  ];

  const techStacksObj = {
    mainStack: [
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

  return (
    <section className="row row-cols-2">
      <section className="col-lg-6 border homeSections shadow pb-4 p-0 bg-glass rounded-1">
        <header className=" fw-bold position-absolute px-5 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow">
          <small className="text-center text-light">Main Tech Stack</small>
        </header>
        <div className="">
          <br />
          <div className="row row-cols-md-3 row-cols-2 my-auto pt-4">
            {techStacksObj.mainStack.map((tech) => {
              return (
                <div
                  className="d-flex flex-column align-items-center my-4"
                  key={tech.id}
                >
                  <img
                    src={tech.src}
                    title={tech.title}
                    alt={tech.title}
                    width={50}
                    className="mt-auto"
                  />
                  <small className="fw-bold text-center mt-2 ">
                    {tech.title}
                  </small>
                </div>
              );
            })}
            {techStacksObj.fundamentals.map((tech) => {
              return (
                <div
                  className="d-flex flex-column align-items-center my-4"
                  key={tech.id}
                >
                  <img
                    src={tech.src}
                    title={tech.title}
                    alt={tech.title}
                    width={50}
                    className="mt-auto"
                  />
                  <small className="fw-bold text-center mt-2 ">
                    {tech.title}
                  </small>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="col-lg-6 border homeSections shadow pb-4 p-0 bg-glass rounded-1">
        <header className=" fw-bold position-absolute px-5 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow">
          <small className="text-center text-light">Other Tech Stack</small>
        </header>
        <div className="">
          <br />
          <div className="row row-cols-md-3 row-cols-2 my-auto pt-4">
            {techStacksObj.secondaryStack.map((tech) => {
              return (
                <div
                  className="d-flex flex-column align-items-center my-4"
                  key={tech.id}
                >
                  <img
                    src={tech.src}
                    title={tech.title}
                    alt={tech.title}
                    width={50}
                    className="mt-auto"
                  />
                  <small className="fw-bold text-center mt-2 ">
                    {tech.title}
                  </small>
                </div>
              );
            })}
            {techStacksObj.others.map((tech) => {
              return (
                <div
                  className="d-flex flex-column align-items-center my-4"
                  key={tech.id}
                >
                  <img
                    src={tech.src}
                    title={tech.title}
                    alt={tech.title}
                    width={50}
                    className="mt-auto"
                  />
                  <small className="fw-bold text-center mt-2 ">
                    {tech.title}
                  </small>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechStack;
