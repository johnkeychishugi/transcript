class Message {
    constructor(){
      this.datas=[];
    }
    async save(user){
      this.datas.push(user);
      return this.datas.find( data => data.email === user.email );
    }
    async  findAll (){
      return this.datas;
    }
  }
  class DataMessage{
    constructor(data,id,created_at){
      this.id = id;
      this.user_id = null;
      this.message = data.message;
      this.created_at = created_at;
    }
  }
  const Messages = new Message();
  export default { Messages, DataMessage }