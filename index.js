const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("ok");
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});

app.get("/test", (request, response) => {
    response.send(" {status:200, message:'ok'}");
});




var time = new Date().getHours()  + ":" + new Date().getMinutes()

console.log(time)
app.get("/time", (request, response) => {
    response.send(" {status:200, message:"+ time+ "}");
});

app.get('/hello/:ID', (request, response) => {
    const ID = request.params.ID;
    response.send(" {status:200, message: hello "+ ID+ "}");
});
