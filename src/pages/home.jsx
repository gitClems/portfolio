import Hero from "../components/hero"
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

function Home() {

    return (
        <div className="home">
            <nav><Navbar></Navbar></nav>
            <section><Hero></Hero></section>
            <div className="skills">
                <Skills className = 'skill-1' title={skill1.title} description={skill1.description}></Skills>
                <Skills className = 'skill-1' title={skill2.title} description={skill2.description}></Skills>
                <Skills className = 'skill-1' title={skill3.title} description={skill2.description}></Skills>
            </div>
        </div>
    )

}

export default Home