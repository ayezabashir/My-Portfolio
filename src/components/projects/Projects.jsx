import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import backstagetalk from "/images/backstagetalk.webp";
import flightbook from "/images/flightbook-landingpage.jpg";
import booknest from "/images/book-nest-search.webp";
import crypto from "/images/crytpocurrency-search.webp";
import gptzero from "/images/gpt-zero.webp";
import codepen from "/images/codepen.webp";

const allProjects = [
  {
    id: 1,
    project_cover: backstagetalk,
    project_name: "BackStage Talk Magazine",
    project_desc:
      "Developed this Backstage-Talk-Magazine website clone using ReactJs and pure CSS - A frontend-practice project challenge.",
    project_languages: ["reactjs", "css"],
    project_live_link: "https://backstage-talk-magazine-clone.vercel.app/",
    project_github_link:
      "https://github.com/ayezabashir/backstage-talk-magazine-clone",
  },
  {
    id: 2,
    project_cover: codepen,
    project_name: "Codepen Clone",
    project_desc:
      "Developed a CodePen-Clone with ReactJS and Firebase. It allows users to write HTML, CSS, and JavaScript and preview output.",
    project_languages: ["reactjs", "firebase"],
    project_live_link: "https://codepen-clone-pied-kappa.vercel.app/",
    project_github_link: "https://github.com/ayezabashir/codepen-clone",
  },
  {
    id: 3,
    project_cover: gptzero,
    project_name: "Gpt-Zero Clone",
    project_desc:
      "Developed a clone of GPT-zero Landing page using ReactJS and TailwindCSS.",
    project_languages: ["ReactJS", "TailwindCSS"],
    project_live_link: "https://gpt-zero-mu.vercel.app/",
    project_github_link: "https://github.com/ayezabashir/gpt-zero",
  },
  {
    id: 4,
    project_cover: crypto,
    project_name: "CryptoCurrency Search",
    project_desc:
      "Utilizing Axios, real-time CoinGecko data is fetched for comprehensive currency insights.",
    project_languages: ["reactjs", "react-bootstrap", "axios", "api"],
    project_live_link: "https://crytpocurrency-search.vercel.app/",
    project_github_link: "https://github.com/ayezabashir/Crytpocurrency-Search",
  },
  {
    id: 5,
    project_cover: booknest,
    project_name: "BookNest - Search Books",
    project_desc:
      "Developed using ReactJS and styled with Sass, BookNest leverages the OpenLibrary API to seamlessly fetch and present book data.",
    project_languages: ["reactjs", "react-router", "scss", "api"],
    project_live_link: "https://book-nest-search-books.vercel.app/",
    project_github_link: "https://github.com/ayezabashir/BookNest-SearchBooks",
  },
  {
    id: 6,
    project_cover: flightbook,
    project_name: "FlightBook-Landing Page",
    project_desc:
      "A responsive landing page for a flight-booking website, developed using ReactJS, incorporating SASS for sleek and stylish design.",
    project_languages: ["reactjs", "scss"],
    project_live_link:
      "https://landing-page-flight-booking-website.vercel.app/",
    project_github_link:
      "https://github.com/ayezabashir/ReactJS-FlightBookingLandingPage",
  },
];

const Projects = () => {
  return (
    <>
      <div className="projects" id="project">
        <div className="container">
          <div className="projects-content">
            <h1>My Projects</h1>
            <div className="projects-container">
              <div className="project-grid">
                {allProjects.map((item) => (
                  <div className="project-card" key={item.id}>
                    <div className="project-card-header">
                      <div className="img">
                        <img src={item.project_cover} alt={item.project_name} />
                      </div>
                    </div>
                    <div className="project-card-footer">
                      <div className="project-name">
                        <h2>{item.project_name}</h2>
                      </div>
                      <div className="project-desc">
                        <div className="desc">
                          <p>{item.project_desc}</p>
                        </div>
                        <div className="languages">
                          {item.project_languages.map((lang, index) => (
                            <span className="lang highlight" key={index}>
                              {lang}
                            </span>
                          ))}
                        </div>
                        <div className="links">
                          <div className="website" title="Live URL">
                            <a
                              href={item.project_live_link}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <BsLink45Deg className="icon" />
                            </a>
                          </div>
                          <div
                            className="github"
                            title="Github Repository Link"
                          >
                            <a
                              href={item.project_github_link}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <AiFillGithub className="icon" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
