
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

interface ProjectProps{
    conditionalProjects :boolean
} 


//correjir proyects por projects despues
const Proyects = ({conditionalProjects}:ProjectProps) => {

    const evalueProjects = (conditionalProjects) ? <TrueProjects/> : <FalseProjects/>

    return evalueProjects
  
};

export default Proyects;