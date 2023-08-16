/* built in datatypes : string, number, boolean, void, null  */

/* Basic Props 
function User(props:{id:string|number; name:string; age:number; address:string}) {
  return (
    <>
        <h2>User Id : {props.id}</h2>
        <hr />
        <h4>Name: {props.name}</h4>
        <h4>Age: {props.age}</h4>
        <h4>Address: {props.address}</h4>
    </>
  )
} */
type UserProps = {
  id: string | number;
  name: string;
  age: number;
  address: string;
  isRegistered: boolean;
};

/* Without Destructuring  */
/* 
function User(props:UserProps) {
  return (
    <>
      <h2>User Id : {props.id}</h2>
      <hr />
      <h4>Name: {props.name}</h4>
      <h4>Age: {props.age}</h4>
      <h4>Address: {props.address}</h4>
      <h4>Is Registered: {props.isRegistered?"Yes":"No"}</h4>
    </>
  );
} */

/* With Destructuring  */
function User({id,name,age,address,isRegistered} : UserProps) {
  return (
    <>
      <h2>User Id : {id}</h2>
      <hr />
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Address: {address}</h4>
      <h4>Is Registered: {isRegistered?"Yes":"No"}</h4>
    </>
  );
}

export default User;
