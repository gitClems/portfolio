import Hero from "../components/hero"
import HomeProject from "../components/homeProject"
import Skills from "../components/skills"
import Loading from "../components/loading"
import '../css/global.css'
import "../css/home.css"
import { person, projects } from "../data/dataSet"
import skillsData from "../data/skills.json"

function Home() {
    return (
        <div className="home">
            <Loading></Loading>
            <section><Hero title={person.name} description={person.describe} profile={person.profile}></Hero></section>
            <section className="skills">
                {skillsData.map((skill) => { return (<Skills title={skill.title} description={skill.description} ></Skills>) })}
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