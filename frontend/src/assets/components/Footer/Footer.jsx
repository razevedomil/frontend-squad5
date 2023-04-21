import "./Footer.css";

function Footer() {
  return (
    <footer>
      <h1>Alô Comunidades</h1>
      <div className="box-footer">
        <div>
          <h2>Nossa Filosofia</h2>
          <ul>
            <a href="">Seja nosso parceiro</a>
            <a href="">Faça sua doação</a>
            <a href="">Nossa equipe</a>
            <a href="">Cadastre-se</a>
          </ul>
        </div>
        <div>
          <h2>Sobre Nós</h2>
          <ul>
            <a href="">Sobre</a>
            <a href="">Impacto social</a>
            <a href="">Mídia e imprensa</a>
            <a href="">Projetos</a>
          </ul>
        </div>
        <div>
          <h2>Nossas Redes</h2>
          <ul>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Tik Tok</a>
            <a href="">Linkdin</a>
          </ul>
        </div>
        <div>
          <h2>Nossos Parceiros</h2>
          <ul>
            <a href="">Prefeitura do RIO</a>
            <a href="">Senac RIO</a>
            <a href="">Resília</a>
          </ul>
        </div>
      </div>
      <div className="box-copy">
        <p> &copy; Desenvolvidos pela equipe dos Programadores Cariocas</p>
      </div>
    </footer>
  );
}

export default Footer;
