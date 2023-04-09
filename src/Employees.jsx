import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = () => {
  const [employees, setEmployees] = useState([
    { "id": 1, "fullName": "Merridie Labrenz", "designation": "React Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 2, "fullName": "Tildi Gunstone", "designation": "Node Developer", "gender": "male", "teamName": "Team-A" },
    { "id": 3, "fullName": "Sergei Corriea", "designation": "Javascript Developer", "gender": "female", "teamName": "Team-A" },
    { "id": 4, "fullName": "Callida Illston", "designation": "Javascript Developer", "gender": "male", "teamName": "Team-A" },
    { "id": 5, "fullName": "Sollie Fomichyov", "designation": "Javascript Developer", "gender": "male", "teamName": "Team-B" },
    { "id": 6, "fullName": "Niki Blamire", "designation": "Java Developer", "gender": "male", "teamName": "Team-B" },
    { "id": 7, "fullName": "Bertrando Elcome", "designation": "Python Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 8, "fullName": "Cyndi Manclark", "designation": "Node Developer", "gender": "male", "teamName": "Team-B" },
    { "id": 9, "fullName": "Matty Brammall", "designation": "SQL Developer", "gender": "female", "teamName": "Team-A" },
    { "id": 10, "fullName": "Tabbie Yaakov", "designation": "Java Developer", "gender": "female", "teamName": "Team-A" },
    { "id": 11, "fullName": "Cori Hubbins", "designation": "Python Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 12, "fullName": "Con Melville", "designation": "Java Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 13, "fullName": "Dalli Shimmings", "designation": "Javascript Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 14, "fullName": "Patrizia Sarjant", "designation": "Java Developer", "gender": "male", "teamName": "Team-B" },
    { "id": 15, "fullName": "Lauraine Jackalin", "designation": "Python Developer", "gender": "male", "teamName": "Team-B" },
    { "id": 16, "fullName": "Ebenezer Josskovitz", "designation": "Python Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 17, "fullName": "Aggi Graves", "designation": "Javascript Developer", "gender": "female", "teamName": "Team-A" },
    { "id": 18, "fullName": "Horton Falkus", "designation": "Node Developer", "gender": "female", "teamName": "Team-B" },
    { "id": 19, "fullName": "Lainey Collar", "designation": "Java Developer", "gender": "female", "teamName": "Team-A" },
    { "id": 20, "fullName": "Filip Brockley", "designation": "Java Developer", "gender": "male", "teamName": "Team-A" },
    { "id": 21, "fullName": "Yetta Fidock", "designation": "React Developer", "gender": "female", "teamName": "Team-A" }
  ]);

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8" >
          <div className="card-collection">
            {
              employees.map((emp) => (
                <div id={emp.id} className="card m-2" style={{ cursor: "pointer" }}>

                  {/*  <img src={emp.gender === "male" ? maleProfile : femaleProfile} className="card-img-top" /> */}
                  {(emp.gender === "male") ? <img src={maleProfile} className="card-img-top" />
                    : <img src={femaleProfile} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">Full Name: {emp.fullName}</h5>
                    <p className="card-text"><b>Designation: </b>{emp.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees