import student from "../models/student";

const helper = {
    getStudents: () => {
        let students;
        student.findAll().then((data) => {
            students = data;
        }).catch(error => console.log(error)); 

        return students
    }
}

export default helper;