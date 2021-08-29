import classe from "../models/class";
import degree_program from "../models/degree_program";
import student from "../models/student";

const studentController = {
    getStudents: (req, res) => {
        return getStudentsData(res);
    },

    createView: (req, res) => {
        return createViewData(res);
    },

    store: (req, res) => {
        let { name, ssn, number, phone_number, birthday, sex,
            major_department, minor_department,
            current_address, classe, degree_program } = req.body;

        let errors = [];

        student.findOne({
            where: {
                ssn: ssn
            }
        }).then((data) => {
            if (!data) {
                student.create({
                    name,
                    ssn,
                    number,
                    phone_number,
                    birthday,
                    sex,
                    major_department,
                    minor_department,
                    current_address,
                    class_id: classe,
                    degree_program_id: degree_program
                }).then((data1) => {
                    res.redirect('/');
                }).catch(error => console.log(error));
            } else {
                errors.push({ text: 'SSN already exist!!' });
                return createViewData(res, errors, ssn);
            }
        }).catch(error => console.log(error));
    },

    destroy: (req, res) => {
        let studentId = parseInt(req.params.id);
        let errors = [];
        student.findOne({
            where: {
                id: studentId
            }
        }).then((data) => {
            if (data) {
                student.destroy({
                    where: {
                        id: studentId
                    }
                }).then((data1) => {
                    res.redirect('/');
                }).catch(error => console.log(error));
            } else {
                errors.push({ text: 'Student not exist!!' });
                return getStudentsData(res, errors);
            }
        })
    },

    show: (req, res) => {
        let studentId = parseInt(req.params.id);

        student.findOne({
            where: {
                id: studentId
            },
            include: [classe, degree_program],
        }).then((student) => {
            res.render('student/show', {
                student: student,
            });
        }).catch(error => console.log(error));
    }
}

const getStudentsData = (res, errors = null) => {
    student.findAll({
        include: [classe, degree_program],
        order: [['id', 'DESC']]
    }).then((students) => {
        res.render('index', {
            students: students,
            errors
        });
    }).catch(error => console.log(error));
}

const createViewData = (res, errors = null, errorData = null) => {
    classe.findAll().then((data) => {
        if (data) {
            degree_program.findAll().then((data1) => {
                if (data1) {
                    res.render('student/create', {
                        classes: data,
                        degree_programs: data1,
                        errors,
                        errorData,
                    });
                }
            }).catch(error => console.log(error));
        }
    }).catch(error => console.log(error));
}

export default studentController;