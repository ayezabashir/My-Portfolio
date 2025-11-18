import { RiHtml5Line, RiBootstrapLine } from 'react-icons/ri'
import { TbBrandCss3, TbBrandNextjs, TbBrandNodejs, TbBrandTypescript } from 'react-icons/tb'
import { DiSass, DiPhotoshop, DiIllustrator, DiPython } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { BiLogoTailwindCss, BiLogoGit, BiLogoJavascript, BiLogoReact } from 'react-icons/bi'
const About = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="container">
                    <div className="about-content">
                        <h2>About Me</h2>
                        <div className="about-me">
                            <p>I started learning <span className="highlight">Web Development</span> after my degree in 2022. It was easy for me to grasp that as I already had a programming background.
                                I started from the very start HTML and CSS and worked my way up to JavaScript and practicing building simple projects. I moved to advanced JS courses and started working on building my logic skills.
                                I did Leetcode and Codewars challenges to build my logic skills. I started uploading my projects on github and did some freelancing projects.
                            </p>
                            <p>My interest in <span className="highlight">Frontend Development</span> rose while I was working on my FYP project in BS. I
                                did some <span className="highlight">internships</span> to polish my skills more. After that, I started to doing freelance projects connecting
                                with clients worldwide. I completed my masters in software engineering in 2025. My research was based on <span className="highlight">Computer Vision</span> which 
                                increased my knowledge about artificial intelligence. Currently I am doing freelance frontend development projects
                                using <span className='highlight'>ReactJs</span>. Following is my tech stack: </p>
                        </div>
                        <div className="current-stack">
                            <p>
                                <RiHtml5Line title='HTML' className='icon stack' />
                                <TbBrandCss3 title='CSS' className='icon stack' />
                                <DiSass title='SASS' className='icon stack' />
                                <BiLogoTailwindCss title='Tailwind CSS' className='icon stack' />
                                <RiBootstrapLine title='Bootstrap' className='icon stack' />
                                <BiLogoJavascript title='Javascript' className='icon stack' />
                                <BiLogoReact title='ReactJS' className='icon stack' />
                                <DiPython title='Python' className='icon stack' />
                                <BiLogoGit title='Git' className='icon stack' />
                                <FiFigma title='Figma' className='icon stack' />
                                <DiPhotoshop title='Photoshop' className='icon stack' />
                                <DiIllustrator title='Illustratot' className='icon stack' />
                            </p>
                        </div>
                        <div className="future-stack">
                            <h3>Stack of <span className="highlight">languages/technologies</span> I plan to learn</h3>
                            <p>
                                <TbBrandNextjs title='NextJS' className='icon stack' />
                                <TbBrandTypescript title='Typescript' className='icon stack' />
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
