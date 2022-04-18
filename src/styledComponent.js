import styled, {css} from "styled-components";
import App from "./containers/App.js"

//-------Unidades Responsive------//
const desktopStartWidth = 668;
const mobileStartWidth = 667;
const desktop = `@media (min-widht: ${desktopStartWidth}px)`;
const mobile = `@media (max-widht: ${mobileStartWidth}px)`;

//-------Estilos reutilizables------//
const flexboxMixin = css`
display: flex;
justify-content: center;
font-family: Spartan;
` 
//-------Componentes------//
export const Contenedor = styled.div`
${flexboxMixin};

flex-direction: column;

`
export const FichaStyle = styled.div`
    ${flexboxMixin};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 80%;
    margin: 1% 10%;
    background-color: white;
    box-shadow: 1px 4px 11px hsl(180deg 22% 78%);
    border-radius: 5px;
    padding: 10px;
    
    
`
        export const DivImg = styled.div`
        ${flexboxMixin};
        ${desktop}{
            width: 20%;
        }
        flex-wrap: wrap;
        ${mobile}{
            flex-direction:row;
            width:100%;
            position: absolute;
        }
        
        `
        export const DivText = styled.div`
        ${flexboxMixin}; 
        flex-direction: column;
        ${desktop}{
            width: 50%;
        }
        flex-wrap: wrap;
        margin-top: 5px;
        ${mobile}{
            width:100%
        }
        `
            export const JobCaract = styled.span`
            border-radius: 10px;
            background-color: ${props => props.jobn ? "var(--letraVerde)" : props.jobf ? "black" : "none"};
            color: white;
            font-size: 8px;
            font-weight: bold;
            padding:5px;
            margin-left: 5px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            -ms-border-radius: 10px;
            -o-border-radius: 10px;
            `

            export const JobDates = styled.span`
            color: var(--JobDates);
            margin-left: 10px;

            `
            export const List = styled.div`
            display: flex;
            flex-direction: row;

        `
        export const DivLabels = styled.div`
        ${flexboxMixin};

        ${desktop}{
            width: 30%;
        }
        ${mobile}{
            width: 100%;
        }
        flex-wrap: wrap;
        `

        export const LabelsUni = styled.div`
            ${flexboxMixin};
            margin-left: 5px;
            font-weight: 600;
            align-items: center;
            background-color: var(--backgc);
            color: var(--verdeInicial);
            padding: 5px;
            
        `
