import Perfil from "../../components/Perfil";
import {perfilDev} from "../../data/perfilData"

import Proyects from "../../components/Projects";

const HomeScreen = () => {
    return <>
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
                conditionalProjects={true}
            />
        </main>
        <footer>
            <p>MADE IN REACT 2025 BY AlekeyDev VNC</p>
        </footer>
    </>
};

export default HomeScreen;