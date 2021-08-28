class User {
    constructor(){
      this.datas=[];
    }
    async save(user){
      this.datas.push(user);
      return this.datas.find( data => data.email === user.email );
    }
    async  checkIfExist (email){
      return this.datas.find( user => user.email === email );
    }
  }
  class DataUser{
    constructor(data,id,hash,created_at){
      this.id = id;
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email = data.email;
      this.password = hash;
      this.created_at = created_at;
    }
  }
  const Users = new User();
  export default { Users, DataUser }