import { BsLink45Deg } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

import abelton from '/images/ableton-clone.webp'
import booknest from '/images/book-nest-search.webp'
import crypto from '/images/crytpocurrency-search.webp'

const allProjects = [
    {
        id: 1,
        project_cover: abelton,
        project_name: 'Abelton Clone',
        project_desc: 'A resposive ReactJS and Sass-powered Ableton website clone - A frontend-practice project challenge.',
        project_languages: ['reactjs', 'scss'],
        project_live_link: 'https://ableton-clone-six.vercel.app/',
        project_github_link: 'https://github.com/ayezabashir/Ableton-Clone'
    },
    {
        id: 2,
        project_cover: booknest,
        project_name: 'BookNest - Search Books',
        project_desc: 'Developed using ReactJS and styled with Sass, BookNest leverages the OpenLibrary API to seamlessly fetch and present book data.',
        project_languages: ['reactjs', 'react-router', 'scss', 'api'],
        project_live_link: 'https://book-nest-search-books.vercel.app/',
        project_github_link: 'https://github.com/ayezabashir/BookNest-SearchBooks'
    },
    {
        id: 3,
        project_cover: crypto,
        project_name: 'CryptoCurrency Search',
        project_desc: 'Utilizing Axios, real-time CoinGecko data is fetched for comprehensive currency insights.',
        project_languages: ['reactjs', 'react-bootstrap', 'axios', 'api'],
        project_live_link: 'https://book-nest-search-books.vercel.app/',
        project_github_link: 'https://github.com/ayezabashir/BookNest-SearchBooks'
    }
]

const Projects = () => {
    return (
        <>
            <div className="projects" id="project">
                <div className="container">
                    <div className="projects-content">
                        <h1>My Projects</h1>
                        <div className="projects-container">
                            <div className="project-grid">
                                {
                                    allProjects.map(item => (
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
                                                        {
                                                            item.project_languages.map((lang, index) => (
                                                                <span className='lang' key={index}>{lang}</span>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="links">
                                                        <div className="website">
                                                            <a href={item.project_live_link}>
                                                                <BsLink45Deg className='icon' />
                                                            </a>
                                                        </div>
                                                        <div className="github">
                                                            <a href={item.project_github_link}>
                                                                <AiFillGithub className='icon' />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Projects
