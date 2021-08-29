import dateFormat from 'dateformat';

const helpers = {
    incremented: (value) => {
        value++;
        return value;
    },

    formatDate: (date) => {
        return dateFormat(date, "yyyy-mm-dd HH:MM");
    },

    avatarImage: (sex) => {
        return sex == 'F' ? '/img/female.png' : '/img/male.png';
    }
}

export default helpers;