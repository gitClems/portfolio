import Footer from "../components/footer"
import Hero from "../components/hero"
import HomeProject from "../components/hompeProject"
import Navbar from "../components/navbar"
import Skills from "../components/skills"
import "../css/home.css"

const skill1 = {
    title: "Supply Chain Manager",
    description: "L'informatique décisionnelle au coeur de la Chaîne d'approvisonnement, rien de mieux pour se mettre dans la course des grands enjeux de ce monde concurrentiel."
}
const skill2 = {
    title: "Business Analyst",
    description: "L'esprit d'analyse au seins des processus metiers de votre entreprise. Permettre une prise de décision adéquate face aux risques et maîtriser les activités principales."
}
const skill3 = {
    title: "Design Thinking",
    description: "Construire votre idée avec une architecture performante et des intervenant(e)s qualifié(e)s."
}

const projects = [
    {
        title: "SI de cliniques vétérinaires",
        image: require("../assets/works/VueAdmin.PNG")
    },
    {
        title: "Tableau de bord de suivi d'activité logistique",
        image: require("../assets/works/ExpGlobale.png")
    },
    {
        title: "Application mobile pour activités commerciales",
        image: require("../assets/works/App1.jpg")
    }
]

function Home() {

    return (
        <div className="home">
            <Navbar></Navbar>
            <section><Hero></Hero></section>
            <section className="skills">
                <Skills className='skill-1' title={skill1.title} description={skill1.description}></Skills>
                <Skills className='skill-1' title={skill2.title} description={skill2.description}></Skills>
                <Skills className='skill-1' title={skill3.title} description={skill2.description}></Skills>
            </section>
            <section className="home-work-display">
                <HomeProject title={projects[0].title} image={projects[0].image}></HomeProject>
                <HomeProject title={projects[1].title} image={projects[1].image}></HomeProject>
                <HomeProject title={projects[2].title} image={projects[2].image}></HomeProject>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )

}

export default Home