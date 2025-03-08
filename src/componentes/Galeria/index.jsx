import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer=styled.div`
    display: flex;
    gap: 24px;

`
const SecaoFluida=styled.section`
    flex-grow: 1;
`
const ListaImagens=styled.ul`
    display:flex;
    flex-wrap: wrap;
    gap: 24px;
    padding:0;
    justify-content: space-between;
`
const Galeria = ({fotos = [], aoFotoSelecionada, aoAlternarFavorito, setTag}) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaImagens>
                        {fotos.map( foto => <Imagem 
                        aoZoomSolicitado={aoFotoSelecionada}
                        aoAlternarFavorito={aoAlternarFavorito}
                        foto={foto} 
                        key={foto.id}>
                        </Imagem>)}

                    </ListaImagens>
                </SecaoFluida>

                <Populares/>
            </GaleriaContainer>

        
        
        </>
    )
}

export default Galeria