import { RiHtml5Line, RiBootstrapLine } from 'react-icons/ri'
import { TbBrandCss3, TbBrandNextjs, TbBrandNodejs, TbBrandTypescript } from 'react-icons/tb'
import { DiSass, DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import mui from '/mui.svg'
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
                            <p className='name'>Hi my name is Ayeza. I am 22 years old. I have Bachelors degree in <span className='highlight'>Software Engineering</span> and currently I am doing MPhill in Software Engineering.</p> <br />
                            <p>I started learning <span className="highlight">Web Development</span> after my degree in 2022. It was easy for me to grasp that as I already learned C++ and Java basics.
                                I started from the very start HTML and CSS and worked my way up to JavaScript and then making simple projects but it still was not enough, I moved to advanced JS courses and started working on building my logic skills.
                                I did Leetcode and Codewars challenges now and then and it really helped me open my mind. I started uploading my projects on github and it really boosted my confidence after watching the green dots displaying how consistent
                                I have been in coding and I have not stopped since then.
                            </p> <br />
                            <p>I still have lots to learn but I am consistent and I am willing to take challenges.</p>
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
                                <BiLogoGit title='Git' className='icon stack' />
                                <img src={mui} alt="" title='Material UI' className='icon stack' />
                                <FiFigma title='Figma' className='icon stack' />
                                <DiPhotoshop title='Photoshop' className='icon stack' />
                                <DiIllustrator title='Illustratot' className='icon stack' />
                                <FaWordpress title='Wordpress' className='icon stack' />
                            </p>
                        </div>
                        <div className="future-stack">
                            <h3>Stack of <span className="highlight">languages/technologies</span> I plan to learn</h3>
                            <p>
                                <TbBrandNextjs className='icon stack' />
                                <TbBrandTypescript className='icon stack' />
                                <BiLogoMongodb className='icon stack' />
                                <TbBrandNodejs className='icon stack' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
