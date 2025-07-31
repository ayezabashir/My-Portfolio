import { RiHtml5Line, RiBootstrapLine } from 'react-icons/ri'
import { TbBrandCss3, TbBrandNextjs, TbBrandNodejs, TbBrandTypescript } from 'react-icons/tb'
import { DiSass, DiPhotoshop, DiIllustrator, DiPython } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { FaWordpress } from 'react-icons/fa'
import { BiLogoTailwindCss, BiLogoMongodb, BiLogoGit, BiLogoJavascript, BiLogoJquery, BiLogoReact } from 'react-icons/bi'
const About = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="container">
                    <div className="about-content">
                        <h2>About Me</h2>
                        <div className="about-me">
                            <p className='name'>Hi my name is Ayeza. I recently did my Masters in <span className='highlight'>Software Engineering</span></p> <br />
                            <p>I started learning <span className="highlight">Web Development</span> after my degree in 2022. It was easy for me to grasp that as I already had a programming background.
                                I started from the very start HTML and CSS and worked my way up to JavaScript and practicing building simple projects. I moved to advanced JS courses and started working on building my logic skills.
                                I did Leetcode and Codewars challenges now and then and it really helped me open my mind. I started uploading my projects on github and it really boosted my confidence.
                            </p> 
                            <p>My interest in <span className="highlight">Artificial Intelligence</span> rose while I was working on my research. My
scholarly experience is based on <span className="highlight">deep learning</span> and computer vision, as it led me to conduct a research
project that aims to achieve image understanding using Vision Transformer (ViT) models. I would like to
be part of the most innovative AI technologies and use my technology in computer vision and machine
learning to solve real-life problems.</p>
                        </div>
                        <div className="current-stack">
                            <h3>My CurrentStack of <span className="highlight">languages/technologies</span></h3>
                            <p>
                                <RiHtml5Line title='HTML' className='icon stack' />
                                <TbBrandCss3 title='CSS' className='icon stack' />
                                <DiSass title='SASS' className='icon stack' />
                                <BiLogoTailwindCss title='Tailwind CSS' className='icon stack' />
                                <RiBootstrapLine title='Bootstrap' className='icon stack' />
                                <BiLogoJavascript title='Javascript' className='icon stack' />
                                <BiLogoReact title='ReactJS' className='icon stack' />
                                <BiLogoJquery title='jQuery' className='icon stack' />
                                <DiPython title='Python' className='icon stack' />
                                <BiLogoGit title='Git' className='icon stack' />
                                <FiFigma title='Figma' className='icon stack' />
                                <DiPhotoshop title='Photoshop' className='icon stack' />
                                <DiIllustrator title='Illustratot' className='icon stack' />
                                <FaWordpress title='Wordpress' className='icon stack' />
                            </p>
                        </div>
                        <div className="future-stack">
                            <h3>Stack of <span className="highlight">languages/technologies</span> I plan to learn</h3>
                            <p>
                                <TbBrandNextjs title='NextJS' className='icon stack' />
                                <TbBrandTypescript title='Typescript' className='icon stack' />
                                <BiLogoMongodb title='MongoDB' className='icon stack' />
                                <TbBrandNodejs title='NodeJS' className='icon stack' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
