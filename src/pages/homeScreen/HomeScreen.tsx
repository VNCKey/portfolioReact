import Perfil from "../../components/Perfil";
import {perfilDev} from "../../data/perfilData"
import Proyects from "../../components/Projects";
import { useState } from "react";
import { projectsApps } from "../../data/projectsData";
import { dataProjectsApp } from "../../interface/interfaceProjects";

const HomeScreen = () => {

    const [projects, setProjects] = useState<dataProjectsApp[]>(projectsApps)

    const updateProjects = (data:dataProjectsApp)=>{
        setProjects([...projects,data])
    }
    return (
        <div className="homeScreen">
            <header>Header</header>
            <main>
                <h1>My web site with React 2025</h1>
                <Perfil
                    name = {perfilDev.name}
                    sentence={perfilDev.sentence}
                    profesionaly = {perfilDev.profesionaly}
                    area = {perfilDev.area}
                />
                <Proyects
                    dataProjects = {projects}
                />
            </main>
            <footer>
                <p>MADE IN REACT 2025 BY AlekeyDev VNC</p>
            </footer>
        </div>
    )
};

export default HomeScreen;