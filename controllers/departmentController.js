import department from '../models/department';
import office from '../models/office';

const departmentController = {
    getAll: (req, res) => {
        department.findAll({
            order: [['id', 'DESC']],
            include: [office]
        }).then((data) => {
            res.render('department/index', {
                departments: data
            });
        }).catch(error => console.log(error));
    }
};

export default departmentController;