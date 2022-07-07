import { data } from "./info.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const infoSection = data.map((person, index) => {
    return (
      <div key={index} className="card m-5 mx-auto" style={{ width: "300px" }}>
        <img className="card-img-top" src={person.image} alt="Bob Dylan" />
        <div className="card-body">
          <h5 className="card-title">{person.cardTitle}</h5>
          <p className="card-text">{person.cardDescription}</p>
          <a href={person.button.url} className="btn btn-primary">
            {person.button.label}
          </a>
        </div>
      </div>
    );
  });
  return <div>{infoSection}</div>;
}

export default App;
