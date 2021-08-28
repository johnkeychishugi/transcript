import dotenv from 'dotenv';


const userController = {
     loginShow : (req,res) =>{
        res.render('login');
    },

    login : (req,res) => {
        
        users.checkIfExist(req.body.email).then(user =>{
            let errors = [];
            let { email } = req.body;
            if(user){
              bcrypt.compare(req.body.password, user.password, (err,result)=>{
                if(result){
                  sendToken(user, res, 200,'User is successfully logged in')
                }else{
                    errors.push({text:'Email or passoword does not match!!'});
                    res.render('login',{
                        errors,
                        email
                    });
                }
              })
            }else{
                errors.push({text:'Email or passoword does not match!!'});
                res.render('login',{
                    errors,
                    email
                });
            }
          });
    },

     registerShow : (req,res) => {
        res.render('register');
    },

     register : (req,res) =>{
          users.checkIfExist(req.body.email).then(user =>{
            if(user){
                let errors = [];
                 errors.push({text:'Email already exist!!'});

             let {firstname,lastname,email} = req.body;
                
              res.render('register',{
                  errors,
                  firstname,
                  lastname,
                  email

              });
            }else{
              bcrypt.hash(req.body.password, 10, (err, hash)=>{
                let id 
                if(users.datas.length != 0){
                  id = users.datas[users.datas.length-1].id+1;
                }else{
                  id = 1;
                }
                const created_at = new Date().toDateString(); 
                const data = new User.DataUser(req.body,id,hash,created_at);
    
                users.save(data).then(response =>{
                  sendToken(response,res,201,'User created successfully');
                });
              });
            }
          });
    }
}

const sendToken = (user,res,status,msg) =>{
    const token = jwt.sign(
      {
        email : user.email,
        userId : user.id,
        firstname : user.firstname,
      },
      process.env.TOKEN_KEY,
      { 
        expiresIn : '2h'
      }
    );
    messages.findAll().then(response =>{
      return res.render('home',
      {
        messages: response,
         layout:'landing' 
      });
      
  });  
  }

export default userController;