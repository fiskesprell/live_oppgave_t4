import React from 'react';

const SchoolSystem = () => {

    type Student = {
        id: number,
        name: string,
        teacher: boolean
    }
	
    const [students, setStudents] = React.useState<Student[]>([])

    const addStudent = (event: FormEvent<HTMLFormElement>) => {
        // Stopper browser fra å refreshe
        event.preventDefault();
        // Hente form
        const form = event.target as HTMLFormElement | null;
        if (!form){
            console.log("NO FORM!!")
        }
        const formData = new FormData(form);
        // Henter data fra form
        const studentName = formData.get("studentName");
        // ? true : false er for å konvertere string -> boolean
        const isTeacher = formData.get("isTeacher") ? true : false;
        if (!studentName || typeof studentName !== "string") return;

        // Legger til ny student i listen
        setStudents(prevStudents => [
            ...prevStudents,
            {
                id: prevStudents.length + 1,
                name: studentName,
                teacher: isTeacher
            }
        ]);

        // Fjerner tekst fra form-en
        form.reset()
    }

    const removeStudent = () => {
        setStudents(students.slice(0, -1));
    }

  return (
    <div>
      <h2>Antall i listen: {students.length}</h2>

      <form onSubmit={addStudent}>
        <label htmlFor="studentName">Student/Teacher's name: </label>
        <input type="text" id="studentName" name="studentName"/>

        <label htmlFor="isTeacher">Check box if teacher: </label>
        <input type="checkbox" id="isTeacher" name="isTeacher"/>

        <button type="submit">Legg til i listen</button>
      </form>


      <button onClick={() => removeStudent()}>Fjern fra siste fra listen</button>
      <button onClick={() => setStudents([])}>Tøm listen</button>

      <ul>
        {students.map((student) => (
            <li>{student.name} - {student.teacher ? 'Teacher' : 'Student'}</li>
        ))}
      </ul>

    </div>
  );
};

export default SchoolSystem;