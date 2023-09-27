const express = require("express");
const app = express();
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

// function that iterates through the movies object , extract movies title and concatenates it to the list variable
const listAllMovies = (movies) => 
{
    let list=''
    for (let i = 0; i < movies.length; i++)
    {
        list += movies[i].title + " , "
    }
    return list
}


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

app.get('/hello/:ID?', (request, response) => {
    const ID = request.params.ID;
    if(ID){
        response.send(" {status:200, message: hello "+ ID+ "}");
    }
    else{
        response.send(" {status:200, message: hello }");
    }
    
});



app.get('/search', (req, res) => {

  const searchQuery = req.query.s;

  if(searchQuery)
  {
    res.send(" {status:200, message: hello "+ searchQuery+ "}");
  }
  else{res.send(" {status:500,error:true, message:'you have to provide a search'}")}
});


app.get("/movies/create", (request, response) => {
    response.send(" {status:200, message:'ok'}");
});


app.get("/movies/read", (request, response) => {
    response.send(" {status:200, data:"+listAllMovies(movies) +"}");
});


app.get("/movies/update", (request, response) => {
    response.send(" {status:200, message:'ok'}");
});


app.get("movies/delete", (request, response) => {
    response.send(" {status:200, message:'ok'}");
});
