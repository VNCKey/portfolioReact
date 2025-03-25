import Perfil from "../Perfil";
import Proyects from "../Proyects";

export type PerfilInterface = {
  name: string;
  profesionaly: string;
  sentence: string;
  area: string[];
};

const Main = () => {

  const perfil:PerfilInterface = {
    name: "AlékeyDev",
    sentence:"Famoso guerrero protector de la humanidad que defiende con justicia a los pueblos, villas y a su castillo alarcon siempre diplomatico en busca de la paz.",
    profesionaly: "Developer 2025",
    area:["FullStack Web", "Mobile Dev","Desktop Dev",]
  } 

  return (
    <div>
        <div>
            <h1>My web site with React 2025</h1>
        </div>
        <Perfil
          name = {perfil.name}
          sentence={perfil.sentence}
          profesionaly = {perfil.profesionaly}
          area = {perfil.area}
        />
        <Proyects
          conditionalProjects={true}
        />
    </div>
  );
};

export default Main;