const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className="text-center">
      <h1 className="mt-4 p5 text-center bg-primary text-white rounded" >Team Member Allocation</h1>
      <h3> {selectedTeam} has {teamMemberCount} members</h3>
    </header>
  );
}

export default Header;