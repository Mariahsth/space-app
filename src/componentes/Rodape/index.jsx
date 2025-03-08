import styled from "styled-components";

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04244f;
  width: 100%;
  margin-top: 100px;
  padding: 22px;
  box-sizing: border-box;
`;

const ListaLogos = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const TextoRodape = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin:0;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <ListaLogos>
        <li>
          <a href="#">
            <img src="/imagens/sociais/facebook.svg" alt="logo facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/imagens/sociais/twitter.svg" alt="logo twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/imagens/sociais/instagram.svg" alt="logo instagram" />
          </a>
        </li>
      </ListaLogos>
      <TextoRodape>Desenvolvido por alura.</TextoRodape>
    </RodapeEstilizado>
  );
};

export default Rodape;
