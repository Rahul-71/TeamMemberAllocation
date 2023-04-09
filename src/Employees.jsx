import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = ({ employees, selectedTeam, teamSelectionHandler, employeeCardClickHandler }) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={teamSelectionHandler}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8" >
          <div className="card-collection">
            {
              employees.map((emp) => (
                <div id={emp.id}
                  className={(emp.teamName === selectedTeam) ? "card m-2 standout" : "card m-2"}
                  style={{ cursor: "pointer" }}
                  onClick={employeeCardClickHandler} >

                  {/*  <img src={emp.gender === "male" ? maleProfile : femaleProfile} className="card-img-top" /> */}
                  {/* conditional rendering */}
                  {(emp.gender === "male")
                    ? <img src={maleProfile} className="card-img-top" />
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