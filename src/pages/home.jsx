import Hero from "../components/hero"
import HomeProject from "../components/homeProject"
import Skills from "../components/skills"
import '../css/global.css'
import "../css/home.css"
import { person, projects, skills } from "../data/dataSet"
// import person from "../data/users.json"

function Home() {
    // console.log(users);

    return (
        <div className="home">
            <section><Hero title={person.name} description={person.describe} profile={person.profile}></Hero></section>
            <section className="skills">
                <Skills className='skill-1' title={skills[0].title} description={skills[0].description}></Skills>
                <Skills className='skill-1' title={skills[1].title} description={skills[1].description}></Skills>
                <Skills className='skill-1' title={skills[2].title} description={skills[2].description}></Skills>
            </section>
            <section className="home-work">
                <span className="title">Mes réalisation</span>
                <div className="home-work-display">
                    <HomeProject title={projects[0].title} image={projects[0].image}></HomeProject>
                    <HomeProject title={projects[1].title} image={projects[1].image}></HomeProject>
                    <HomeProject title={projects[2].title} image={projects[2].image}></HomeProject>
                </div>
            </section>
        </div>
    )

}

export default Home