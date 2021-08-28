import classe from "../models/class";
import degree_program from "../models/degree_program";
import student from "../models/student";

const studentController = {
    getStudents: (req, res) => {
        student.findAll({
            include: [classe,degree_program],
            order : [['id','DESC']]
        }).then((students) => {
            res.render('index', {
                students: students
            });
        }).catch(error => console.log(error));
    },
    createView: (req, res) =>{
        res.render('student/create',{
            classes: 'fff',
            degree_programs: 'fff'
        });
    }, 
    message: (req, res) => {
        let id
        if (messages.datas.length != 0) {
            id = messages.datas[messages.datas.length - 1].id + 1;
        } else {
            id = 1;
        }
        const created_at = new Date().toDateString();
        console.log(created_at);
        const data = new Message.DataMessage(req.body, id, created_at);

        messages.save(data).then(respons => {
            messages.findAll().then(response => {
                res.render('home', {
                    messages: response,
                    layout: 'landing'
                });
            });
        });

    },

    messages: (req, res) => {
        messages.findAll().then(response => {
            res.render('home', {
                messages: response,
                layout: 'landing'
            });
        });
    },


}

export default studentController;