import { PerfilInterface } from "../interface/interfacePerfil";



const Perfil = ({name,sentence,profesionaly,area}:PerfilInterface) => {

  console.log(name)
  const data = new Date();

  return (
    <div>
      <p>My name is {name}</p>
      <p>{sentence}</p>
      <p>I am {profesionaly}</p>
      <p>{data.getDate()}/{data.getMonth()}/{data.getFullYear()}</p>
      <div>{area.map((i, index) => (
        <i key={index}>{i}</i>
      ))}</div>
    </div>  
  );
};

export default Perfil;