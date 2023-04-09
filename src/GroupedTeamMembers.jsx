import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {

    var teamAMembers = employees.filter(emp => emp.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };

    var teamBMembers = employees.filter(emp => emp.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };

    var teamCMembers = employees.filter(emp => emp.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };

    var teamDMembers = employees.filter(emp => emp.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };

    var teams = [];
    teams.push(teamA);
    teams.push(teamB);
    teams.push(teamC);
    teams.push(teamD);

    return teams;
  }

  const teamClickHandler = (event) => {
    var newGroupData = groupedEmployees.map(groupData => groupData.team === event.currentTarget.id
      ? { ...groupData, collapsed: !groupData.collapsed }
      : groupData);

    setGroupedData(newGroupData);
    setTeam(event.currentTarget.id);
    
  }

  return (
    // <div>
    //   <h1 className="mt-4 p5 text-center rounded" >GroupedTeam Members</h1>
    // </div>
    <main className="container">
      {
        groupedEmployees.map(item => {
          return (
            <div key={item.team} className="card m-2" style={{ cursor: "pointer" }} >
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={teamClickHandler}  >
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""} >
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  );
}

export default GroupedTeamMembers;
