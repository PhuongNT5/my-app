import * as http from "http";
import axios from 'axios';
export default {
  sendEmail(content) {
    axios.post('http://192.168.1.173:3000/api/user/receiveEmail', content)
    .then(response => {
      console.log(response);
    })
    .catch(function (error) {
      debugger;
      console.log(error);
    });
  }
}
