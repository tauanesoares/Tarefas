import React from "react";
import styled from "styled-components";

const ModeloCampo = styled.div`
    background: white;
    margin: 32px;
    padding: 16px;
    `
export default function Campo(props){
    return <ModeloCampo>
        {props.children}
    </ModeloCampo>
}