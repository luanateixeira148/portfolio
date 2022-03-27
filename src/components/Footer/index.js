import "./footer.scss";

function Footer(props) {

  return (
    <div className={`footer ${props.color}`}>
        <a href="https://github.com/luanateixeira148/portfolio" target="_blank" >
          <h5>
            Designed &amp; Developed by Luana Teixeira
          </h5>
        </a>
    </div>
  );

}

export default Footer;