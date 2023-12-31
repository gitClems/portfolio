import "../css/about.css"

function About(propos) {

    return (
        <div className="about">
            <section className="about-accroche">
                <span className="title">A propos de moi</span>
                <span className="message">Merci pour votre interêt. Lisez ci-dessous pour en savoir plus sur moi-même et mon parcours.</span>
            </section>
            <section className="about-profile">
                <img src={require("../assets/profile/profile-2.jpg")} alt="Profile" />
            </section>
            <section className="about-background">
                <span className="background">Background</span>
                <div>
                   <span style={{fontFamily: "Nunito Sans", color: "var(--sub-title-color)",}}>Durant tout mon parcours universitaire, j'ai pu dévélopper un bon nombre de connaissance aussi bien dans les sciences exactes que celles qui relèvent de l'esprit critique.</span> 
                    <ul>
                        <li className="background-item">
                            2019-2021 : Facuilté des Sciences et Techniques de Monhammedia <br />
                            <span>J'ai su dévélopper des connaissance en analyse numérique et statistiques. Ceci combiné à l'algorithmique m'a donné des solides acquis sur la transformation d'un problème réel en solution mathématique et ensuite son intégration grace à des algorithmes.</span>
                        </li>
                        <li className="background-item">
                            2021-2024 : Ecole Nationale d'Informatique et d'Analyse des Systhème de Rabat <br />
                            <span>Avec mon orientation en Smart Supply Chain an Logistics, j'ai eu cette connaissance de l'informatique décisionnelle, du Business Intelligence et de la gestion des projets ainsi que leur suivi. L'utilisation des outils informatiques pour l'optimisation des processus au seins de l'entreprise est l'une de mes casquettes. En outre, une partie de mon orientation est la recherche opérationnelle à travers laquelles un accent est mis sur la résolution des problèmes liés à la logistiques: l'ulisation des mathématiques et des nouvelles technologies pour l'optimisation de la chaine logistique .</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="about-skills">
                <span className="skills">Skills</span>
                <div>
                    {/* <span>bn</span> */}
                    <ul>
                        <li className="skills-item">Supply Chain Management</li>
                        <li className="skills-item">Business analysis</li>
                        <li className="skills-item">Operation research</li>
                        <li className="skills-item">Web and Mobile App dev</li>
                        <li className="skills-item">Dessign thinking</li>
                    </ul>
                </div>
            </section>
        </div>
    )

}

export default About