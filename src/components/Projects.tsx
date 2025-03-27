import { dataProjectsApp } from "../interface/interfaceProjects";

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


type PropsProjects={
    dataProjects:dataProjectsApp[]
}

//Correjido
const Proyects:React.FC<PropsProjects> = ({dataProjects}) => {
    const returDat = dataProjects.length > 0 ? <TrueProjects/> : <FalseProjects/>
    return (
        <div>
            <p>Cantidad Proyectos: {dataProjects.length}</p>
            {returDat}
            {dataProjects.map((i, key) =>(
                <div key={key}>
                    <p>Nombre: {i.name}</p>
                    <p>Descripcion: {i.description}</p>
                    <p>Tecnologias Usadas: {i.technologies.map((i,key) => <li key={key}>{`${key} -> ${i} `}</li>)}</p>
                </div>
            ))}
        </div>
    )
};

export default Proyects;