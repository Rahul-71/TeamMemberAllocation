import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Employees from './Employees';
import { useState } from 'react';

export default function App() {

  const [selectedTeam, setTeam] = useState("TeamB");

  const [employees, setEmployees] = useState([
    { "id": 1, "fullName": "Merridie Labrenz", "designation": "React Developer", "gender": "female", "teamName": "TeamC" },
    { "id": 2, "fullName": "Tildi Gunstone", "designation": "Node Developer", "gender": "male", "teamName": "TeamD" },
    { "id": 3, "fullName": "Sergei Corriea", "designation": "Javascript Developer", "gender": "female", "teamName": "TeamA" },
    { "id": 4, "fullName": "Callida Illston", "designation": "Javascript Developer", "gender": "male", "teamName": "TeamA" },
    { "id": 5, "fullName": "Sollie Fomichyov", "designation": "Javascript Developer", "gender": "male", "teamName": "TeamC" },
    { "id": 6, "fullName": "Niki Blamire", "designation": "Java Developer", "gender": "male", "teamName": "TeamD" },
    { "id": 7, "fullName": "Bertrando Elcome", "designation": "Python Developer", "gender": "female", "teamName": "TeamB" },
    { "id": 8, "fullName": "Cyndi Manclark", "designation": "Node Developer", "gender": "male", "teamName": "TeamB" },
    { "id": 9, "fullName": "Matty Brammall", "designation": "SQL Developer", "gender": "female", "teamName": "TeamA" },
    { "id": 10, "fullName": "Tabbie Yaakov", "designation": "Java Developer", "gender": "female", "teamName": "TeamC" },
    { "id": 11, "fullName": "Cori Hubbins", "designation": "Python Developer", "gender": "female", "teamName": "TeamD" },
    { "id": 12, "fullName": "Con Melville", "designation": "Java Developer", "gender": "female", "teamName": "TeamB" },
    { "id": 13, "fullName": "Dalli Shimmings", "designation": "Javascript Developer", "gender": "female", "teamName": "TeamC" },
    { "id": 14, "fullName": "Patrizia Sarjant", "designation": "Java Developer", "gender": "male", "teamName": "TeamD" },
    { "id": 15, "fullName": "Lauraine Jackalin", "designation": "Python Developer", "gender": "male", "teamName": "TeamB" },
    { "id": 16, "fullName": "Ebenezer Josskovitz", "designation": "Python Developer", "gender": "female", "teamName": "TeamB" },
    { "id": 17, "fullName": "Aggi Graves", "designation": "Javascript Developer", "gender": "female", "teamName": "TeamA" },
    { "id": 18, "fullName": "Horton Falkus", "designation": "Node Developer", "gender": "female", "teamName": "TeamB" },
    { "id": 19, "fullName": "Lainey Collar", "designation": "Java Developer", "gender": "female", "teamName": "TeamA" },
    { "id": 20, "fullName": "Filip Brockley", "designation": "Java Developer", "gender": "male", "teamName": "TeamA" },
    { "id": 21, "fullName": "Yetta Fidock", "designation": "React Developer", "gender": "female", "teamName": "TeamA" },
  ]);


  const teamSelectionHandler = (event) => {
    setTeam(event.target.value);
  }

  // This function is a click handler for an employee card which has an id number. 
  // It maps through the employees array and when it finds the id that matches the one of the card that was clicked,
  // it will change the teamName property to the selectedTeam value if the employee is already on that team, or it will 
  // change it to an empty string if the employee is not on the team.
  const employeeCardClickHandler = (event) => {
    const transformedEmp = employees.map((emp) =>
      emp.id === parseInt(event.currentTarget.id)
        ? (emp.teamName === selectedTeam) ? { ...emp, teamName: '' } : { ...emp, teamName: selectedTeam }
        : emp);

    setEmployees(transformedEmp);
  }


  return (
    <main>
      <Header />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        teamSelectionHandler={teamSelectionHandler}
        employeeCardClickHandler={employeeCardClickHandler}
      />
      <Footer />
    </main>
  )
}
