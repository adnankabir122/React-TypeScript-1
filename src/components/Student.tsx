type StudentProps = {
  students: {
    id: number;
    fName: string;
    email: string;
    age: number;
  }[];
};
function Student({ students }: StudentProps) {
  return (
    <>
      {students.map((std) => (
        <p> {std.fName}</p>
      ))}
    </>
  );
}

export default Student;
