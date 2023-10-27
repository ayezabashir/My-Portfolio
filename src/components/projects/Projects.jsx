import abelton from '/images/ableton-clone.webp'

const Projects = () => {
    return (
        <>
            <div className="projects" id="project">
                <div className="container">
                    <div className="projects-content">
                        <h1>My Projects</h1>
                        <div className="projects-container">
                            <div className="project-grid">
                                <div className="project-card">
                                    <div className="project-card-header">
                                        <div className="img">
                                            <img src={abelton} alt="abelton" />
                                        </div>
                                    </div>
                                    <div className="project-card-footer">
                                        <div className="project-name">
                                            <h2>Abelton Clone</h2>
                                        </div>
                                        <div className="project-desc">
                                            <div className="desc">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit provident at quisquam.</p>
                                            </div>
                                            <div className="languages">
                                                <span>html</span>
                                                <span>css</span>
                                            </div>
                                            <div className="links">
                                                <div className="website"></div>
                                                <div className="github"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
