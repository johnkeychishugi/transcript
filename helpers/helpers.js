import dateFormat from 'dateformat';

const helpers = {
    incremented: (value) =>{
        value++;
        return value;
    },

    formatDate: (date) =>{
        return dateFormat(date, "yyyy-mm-dd HH:MM");
    }
}

export default helpers;