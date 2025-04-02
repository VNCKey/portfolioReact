import { useEffect, useState } from "react";

const UseState = () => {

    const [name, setName] = useState(()=>{
        const dataStorage = localStorage.getItem("name");

        return dataStorage ? JSON.parse(dataStorage) : ""
    })

    useEffect(()=>{
        localStorage.setItem("name", JSON.stringify(name))
    },[name])

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }





    const [listFrameworkBackend, setListFrameworkBackend] = useState<string[]>([])
    const [nameFrameworkBackend, setNameFrameworkBackend] = useState("")

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(nameFrameworkBackend.trim()){
            setListFrameworkBackend([...listFrameworkBackend, nameFrameworkBackend])
            setNameFrameworkBackend("")
        }
    }

    const handleChangeBackend = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setNameFrameworkBackend(e.target.value)
    }


    interface listProduct {
        nameProduct:string
        cantidad: number
    }


    const [listItem,setListItem] = useState<listProduct[]>([])
    const [nameProduct, setNameProduct] = useState<string>()
    const [cantidad, setCantidad] = useState<number>()


    const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const objProduct:listProduct = {
            nameProduct:nameProduct!,
            cantidad:cantidad!
        }

        setListItem([...listItem, objProduct])
    }

    return (
        <div>
            <div>
                <input type="text" value={name} placeholder="Ingresa tu nombre" onChange={handleChange}/>
                {name ? name : <p>Esperando valor</p>}
            </div>
            <div>
                <p>UseState Form input state</p>    
                <form onSubmit={handleSubmit}>
                    <input type="text" value={nameFrameworkBackend} placeholder="Ingresa un Framework backend" onChange={handleChangeBackend} />
                    <button type="submit">Agregar framework</button>
                </form>
                <ul>{listFrameworkBackend.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}</ul>
            </div>

            <div>
                <p>Formulario de iten product</p>
                <form onSubmit={handleSubmitForm}>
                    <input type="text" placeholder="Ingresar nombre del producto" onChange={e=>(setNameProduct(e.target.value))}/>
                    <input type="text" placeholder="Ingresar cantidad" onChange={(e) => (setCantidad(parseInt(e.target.value)))} />
                    <button type="submit">Agregar iten</button>
                </form>
                <ul>
                    {listItem.map((i,index) => (<li key={index}>{i.nameProduct} : {i.cantidad}</li>))}
                </ul>
            </div>
        </div>
        
    );
};

export default UseState;