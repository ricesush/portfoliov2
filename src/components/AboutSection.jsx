import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faLocationDot, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import myImage from "../assets/profilePic.png";

const AboutSection = () => {
  const socmeds = [
    { href: 'https://www.linkedin.com/in/ejsan/', icon: faLinkedin, id: 1 },
    { href: 'https://github.com/ricesush', icon: faGithub, id: 2 },
    { href: 'https://www.facebook.com/RiceSush', icon: faFacebook, id: 3 },
  ];

  return (
    <section className="col-lg-6 rounded-1 mb-lg-0 mb-5">
      <div className="p-5 pb-4 pt-0 fw-lighter">
        <div className="d-md-flex align-items-center justify-content-around">
          <img src={myImage} className="img-size mx-auto"></img>
          <div className="text-lg-start text-center ps-1 pt-lg-0 pt-3">
            <div>
              <span className="fw-bold fs-2">Erick-john Santosidad</span>
            </div>
            <div className="text-center">
              <span className="fw-bold">Full Stack ASP Net Core Developer</span>
            </div>
            <div className="pt-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="yellowText me-2"
              />
              <span className="text-secondary">Location: </span>
              <span className="fw-bold">Quezon City, Philippines </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} className="yellowText" />
              <span className="text-secondary"> Language: </span>
              <span className="fw-bold">English, Filipino</span>
            </div>
          </div>
        </div>

        <div className="pt-3">
          Proficient in an assortment of technologies, including
          <span className="yellowText fw-bold"> HTML5</span>,
          <span className="yellowText fw-bold"> CSS3</span>,
          <span className="yellowText fw-bold"> Javascript</span>,
          <span className="yellowText fw-bold"> React.Js</span>,
          <span className="yellowText fw-bold"> PHP</span>,
          <span className="yellowText fw-bold"> Laravel</span>, and
          <span className="yellowText fw-bold"> MySQL</span>. Able to
          efficiently self-manage during independent projects, as well as
          collaborate in a team setting.
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center ">
        
        <div className="bg-secondary rounded me-4">
          <a
            type="button"
            className="btn btn-sm custom-btn"
            target="_blank"
            href="https://drive.google.com/file/d/17XOk7XZZzX3RKqRqboJVWuuDHR_jnZ-X/view?usp=share_link"
          >
            <small>
              <span className="btn-text ">Download CV </span>
              <FontAwesomeIcon icon={faDownload} />
            </small>
          </a>
        </div>

        <div className="d-md-flex d-sm-block d-flex align-items-center">
          {socmeds.map((socmed) => {
            return (
              <a href={socmed.href} target="blank" key={socmed.id}>
                <FontAwesomeIcon
                  icon={socmed.icon}
                  className="socmed text-secondary pe-2 fs-4"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
