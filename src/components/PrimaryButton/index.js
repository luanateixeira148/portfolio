import "./primary-button.scss";

function PrimaryButton(props) {

  return (
    <button className="primary-button">{props.text}</button>
  );

}

export default PrimaryButton;