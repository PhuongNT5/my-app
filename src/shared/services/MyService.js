import * as http from "http";
export default {
  sendEmail(content) {
    http.request({
      url: "localhost:3000/api/user/sendEmail",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        name: content.name,
        email: content.email,
        message: content.message
      })
    }).then(response => {
      var result = response.content.toJSON();
    }, error => {
      console.error(error);
    });
  }
}
