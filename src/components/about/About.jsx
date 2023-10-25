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
                            <p>Hi my name is Ayeza. I am 22 years old. I have Bachelors degree in Software Engineering and I am doing my MPhill in Software Engineering </p>
                            <p>I started learning Web Development after my degree in 2022. It was easy for me to grasp that as I already learned C++ and Java basics.
                                I started from the very start HTML and CSS and worked my way up to JavaScript and then making simple projects but it still was not enough, I moved to advanced JS courses and started working on building my logic skills.
                                I did Leetcode and Codewars challenges now and then and it really helped me open my mind. I started uploading my projects on github and it really boosted my confidence after watching the green dots displaying how consistent
                                I have been in coding and I have not stopped since then.
                            </p>
                            <p>I still have lots to learn but I am consistent and I am willing to take challenges.</p>
                        </div>
                        <div className="current-stack">
                            <h3>My Current Stack of languages/technologies</h3>
                            <p>
                                <RiHtml5Line />
                                <TbBrandCss3 />
                                <DiSass />
                                <BiLogoTailwindCss />
                                <RiBootstrapLine />
                                <BiLogoJavascript />
                                <BiLogoReact />
                                <BiLogoJquery />
                                <BiLogoGit />
                                <img width={10} src={mui} alt="" />
                                <FiFigma />
                                <DiPhotoshop />
                                <DiIllustrator />
                                <FaWordpress />
                            </p>
                        </div>
                        <div className="future-stack">
                            <h3>Stack of languages/technologies I plan to learn</h3>
                            <p>
                                <TbBrandNextjs />
                                <TbBrandTypescript />
                                <BiLogoMongodb />
                                <TbBrandNodejs />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
