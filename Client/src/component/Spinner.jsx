import 'bootstrap/dist/css/bootstrap.min.css';

const spinner = "https://media.tenor.com/yY_4NHukIq4AAAAi/iphone-spinning.gif"

function Spinner() {
  return (
    //center image
    <div className="d-flex justify-content-center align-items-center">
      <img src={spinner} alt="spinner" />
    </div>
  );
}

export default Spinner;

