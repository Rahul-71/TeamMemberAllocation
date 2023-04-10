import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const TeamMemberCard = ({ emp, selectedTeam, employeeCardClickHandler }) => {
  return (
    <div
      key={emp.id}
      id={emp.id}
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
  );
}

export default TeamMemberCard;