Learning React by AlekeyDev ORG_VNC To Portfolio

Tecnologias que utilizare
-BUN
-REACT

TEMAS

1 *COMPONENTS tsx
-Regla CamelCase nombrar a los components con la primera letra en "Mayucula"
Ejemplo Component.tsx y no component.tsx
-Son Interfaces de usuario reutilizables
2 *Expresiones
-Hacer codigo se usa {} ejemplo:
const App = () => {
return (

<div>
Esta es una expresion {2 + 2} //Esta es una expresion 4
</div>
)
}
*3 Key cuando usamos un Loop
Cuando queremos hacer un loop con una expresion jsx es importante darle una llave
para que cada componente sea diferente key={i}
*4 Props
Propiedades que son argumentos pasados dentro de los componentes individuales o que se comunican, asi mismo los props pasan datos de padres a hijos, como emisor y resector todo esto pasa a travez de html 
*5 Children
Pasar etuiquetas o elementos html del padre al hijo 
padre
<Component>
    <h1>Hola</h1>
</Component>
hijo 
const Component = ({children})=>{
    return <div>{children}</div>
}
*6 Obj in props funct ({name, etc , ...})
*7 Conditional Rendering
En base a una logica condicional podemos tener el poder de renderizar
componentes que cumplan con condiciones dadas
archivo a revisar es el Proyects.tsx Hay esta el xample simple low code :V
*8 State
Manejar estados locales para los componentes, como valores primitivos objetos etc
\*SNIPPET
rafce: Crear un nuevo componente

Tutorial

Carga de Lib

-bun i

Runing AppWeb

-bun run dev
