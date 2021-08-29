import course from '../models/course';
import department from '../models/department';

const courseController = {
    getAll: (req,res) =>{
        course.findAll({
            order: [['id','DESC']],
            include: [department]
        }).then((data)=>{
            res.render('course/index',{
                courses: data
            });
        }).catch(error => console.log(error));
    }
};

export default courseController;