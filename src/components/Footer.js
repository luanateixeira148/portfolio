import "./footer.scss";

function Footer () {

  const date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
        <h5 className="off-white">
          Copyright © {year} Luana Teixeira
        </h5>
    </div>
  );

}

export default Footer;