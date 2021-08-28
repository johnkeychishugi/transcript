import Message from '../models/message';

const messages =  Message.Messages;


const messageController = {
    messageShow : (req,res) =>{
        res.render('message',{ layout:'landing' });
    },

    message : (req,res) => {
        let id 
        if(messages.datas.length != 0){
          id = messages.datas[messages.datas.length-1].id+1;
        }else{
          id = 1;
        }
        const created_at = new Date().toDateString(); 
        console.log(created_at);
        const data = new Message.DataMessage(req.body,id,created_at);

        messages.save(data).then(respons =>{
            messages.findAll().then(response =>{
                res.render('home',{ 
                    messages: response,
                    layout:'landing'
                });
            });  
        });  
        
    },

    messages : (req,res) => {
        messages.findAll().then(response =>{
            res.render('home',{ 
                messages: response,
                layout:'landing'
            });
        });  
    },

    
}

export default messageController;