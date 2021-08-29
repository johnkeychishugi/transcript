import instructor from '../models/instructor';
import section from '../models/section';

const sectionController = {
    getAll: (req, res) => {
        section.findAll({
            order: [['id', 'DESC']],
            include: [instructor]
        }).then((data) => {
            res.render('section/index', {
                sections: data
            });
        }).catch(error => console.log(error));
    }
};

export default sectionController;