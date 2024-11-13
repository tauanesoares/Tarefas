import React, {useState} from "react";
import TItulo from "./components/Titulo";
import Campo from "./components/Campo";
import Conteudo from "./components/Conteudo";
import Entrada from "./components/Entrada";


export default function Inicio(){
    const [lista, definirlIsta] = useState([])
    function Adicionar(evento){
        const valor = evento.target.conteudo.value 
        definirlIsta([...lista,valor])
        evento.preventDefault()
    }
    return <>
        <TItulo nome = "Tarefas"/>
        <Campo id="primeiro">
            <form onSubmit={Adicionar}>
                <Entrada/>
            </form>
        </Campo>
        <Campo id="segundo">
            {
            lista.map(function(item){
                return <Conteudo key={item} texto={item}/>
            })
            }
        </Campo>
    </>
}