import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const Helper = {
  checkToken(token) {
      tokenText = token;

      return tokenText
    },
    getToken() {
        
        tokenText = token;
      }
};

export default Helper;