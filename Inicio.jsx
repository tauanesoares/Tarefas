import React, {useState} from "react"
import Titulo from "./components/Titulo"
import Campo from "./components/Campo"
import Conteudo from "./components/Conteudo"
import Entrada from "./components/Entrada"


export default function Inicio(){
    const [lista, definirLista] = useState([])

    function Adicionar(evento){
        const valor = evento.target.conteudo.value 
        definirLista([...lista,valor])
        evento.preventDefault()
    }

    return<>
     <Titulo nome="Velejando com o React"/>
     <Campo id="1">
        <form onSubmit={Adicionar}>
            <Entrada/>
        </form>
     </Campo>
     <Campo id="2">
        {
            lista.map(function(item){
                return <Conteudo key={item} texto={ item }/>
            })
        }
        
     </Campo>
    </>
}