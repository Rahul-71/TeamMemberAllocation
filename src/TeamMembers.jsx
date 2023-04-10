import TeamMemberCard from "./TeamMemberCard"

const TeamMembers = ({ employees, selectedTeam, employeeCardClickHandler }) => {
  return (
    employees.map((emp) => (
      <TeamMemberCard
        emp={emp}
        selectedTeam={selectedTeam}
        employeeCardClickHandler={employeeCardClickHandler}
      />
    ))
  );
}

export default TeamMembers;