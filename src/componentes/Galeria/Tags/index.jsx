import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer=styled.div`
    display:flex;
    margin-top: 56px;
    margin-bottom:39px;
    gap: 17px;
    align-items:center;
`
const TagsTitulo=styled.h3`
    color:#D9D9D9;
    font-size:24px;
    margin: 0;

`
const TagsTituloContainer=styled.div`
    width:219px;
`
const TagsBotoesContainer=styled.div`
    display:flex;
    gap: 24px;
`
const BotaoTag=styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    color: #FFFFFF;
    font-size: 24px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    cursor:pointer;
    &:hover{
        border-color: #C98CF1;
    }

`

const Tags = ({setTag}) => {
    return (
        <TagsContainer>
            <TagsTituloContainer>
                <TagsTitulo> Busque por tags:</TagsTitulo>
            </TagsTituloContainer>
            <TagsBotoesContainer>
                {tags.map(tag => 
                <BotaoTag 
                onClick={() => setTag(tag.tag)}
                key={tag.id} >
                    {tag.titulo}
                    </BotaoTag>)}

            </TagsBotoesContainer>

        
        </TagsContainer>
    )
}

export default Tags