import { ProjectProps } from "../interface/interfaceProjects";

const TrueProjects = ()=>{
    return (
        <div>
            <p>Si tengo proyectos</p>
        </div>
    )
    
}

const FalseProjects = ()=>{
    return (
        <div>
            <p>No tengo proyectos</p>
        </div>
    )
    
}

//Correjido
const Proyects = ({conditionalProjects}:ProjectProps) => {
    return conditionalProjects ? <TrueProjects/> : <FalseProjects/>
};

export default Proyects;