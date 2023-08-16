
// user defined types -> object,array,enum,union,any,custom type
type AdvanceUserProps = {
  user: {
    name: string;
    roll: number;
    language: string[];
  }
}

function UserAdvance({user}:AdvanceUserProps) {
  return (
    <>
      <h2>Advance User</h2>
      <h3>Name: {user.name}</h3>
      <h3>Roll: {user.roll}</h3>
      <h3>Language : {user.language[0]}</h3>
      <hr />
    </>
  );
}

export default UserAdvance;
