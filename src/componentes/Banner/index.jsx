import styled from "styled-components";

const FiguraEstilizada=styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    margin:0;
    max-width: 100%;
    min-height:328px;
    border-radius:20px;
    background-size: cover;
`

const TituloEstilizado=styled.h1`
    color:#FFFFFF;
    font-weight:400;
    font-size:40px;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
`



const Banner = ({texto, backgroundImage}) => {
    return(
        <FiguraEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado> {texto} </TituloEstilizado>

        </FiguraEstilizada>
        )
};

export default Banner;