const express = require("express");
const app = express();
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب ', year: 1992, rating: 6.2 }
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

// function that sorts movies by date

// const sortByDate = (movies) =>
// {
//     let list = [];
//     let titleList = [];
//     let sorted;

   
//         for(let i = 0; i < movies.length; i++)// first get all years and store them in a list
//         {
//             list.push(movies[i].year);
//         }
    
//     sorted = list.sort();// sort the list
//     for(let j=0; j < sorted.length; j++)
//     {
//         for(let i = 0;i<movies.length; i++)// compare the sorted list by the each year in the object , append the title if there is a match
//         {
//             if(list[j] != movies[i].rating)
//             {
//                 console.log(movies[i].title)
              
//                 titleList.push(movies[i].title)
//             }
//         }
//     }

//     return titleList;


// }




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

app.get("/movies/read/by-date", (request, response) => {
    const moviesByDate = movies.sort((a,b)=> a.year - b.year);
    response.status(200).send( {status:200, data: moviesByDate});
});

app.get("/movies/read/by-rating", (request, response) => {
    const moviesByRating = movies.sort((a,b)=> a.rating - b.rating);
    response.status(200).send({status:200, data: moviesByRating});
});

app.get("/movies/read/by-title", (request, response) => {
    const sortByTitle = movies.sort((a,b) => a.title.localeCompare(b.title));
    response.send({status:200, data:sortByTitle});
});


app.get("/movies/update", (request, response) => {
    response.send(" {status:200, message:'ok'}");
});


app.get("movies/delete", (request, response) => {
    response.send(" {status:200, message:'ok'}");
});




