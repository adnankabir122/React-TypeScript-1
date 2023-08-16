// import User from "./components/User";
// import UserAdvance from "./components/UserAdvance";

import Student from "./components/Student";

/* Object
const advanceUser1 = {
  name: "ridoy",
  roll: 1392,
  language: ["bangla", "english", "hindi"],
}; */

// Array of objects 
const students = [
  {id: 1, fName: "Anisul",email: "anisul@gmail.com",age: 32},
  {id: 2,fName: "Niloy",email: "niloy@gmail.com",age: 22}
];

const App = () => {
  return (
    <>
      <h1>User Management</h1>
      {/* User Component  */}
      {/*<User id={1} name="Anisul" age={32} address="Mohammadpur" isRegistered = {true}/>
      <User id={2} name="Ridi" age={22} address="Kollanpur" isRegistered = {true}/> */}

      {/* UserAdvance Component  */}
      {/* <UserAdvance
        name="Kabir"
        roll={1802}
        language={["bangla", "english", "hindi"]}
      /> */}
      {/* <UserAdvance user = {advanceUser1}/> */}
      {/* <Student students = {students}/> */}

    </>
  );
};

export default App;
