import styled from "styled-components";
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const InputEstilizado=styled.input`
    background:transparent;
    color: #D9D9D9;
    border: 2px solid;
    border-color: #C98CF1;
    width: 566px;
    height: 56px;
    padding: 16px 12px;
    border-radius:10px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const Lupa=styled.img`
    position: absolute;
    top:10px;
    right:10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({setFiltro}) => {
    return(
    
    <ContainerEstilizado >
        <InputEstilizado onChange={(evento) => setFiltro(evento.target.value)}  type="text" placeholder="O que você procura?"/> 
        <Lupa src={search} alt="ícone de lupa" />
            

    
    
    </ContainerEstilizado >)
}

export default CampoTexto;