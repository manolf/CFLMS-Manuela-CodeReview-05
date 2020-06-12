$(document).ready(function(){

let movies = JSON.parse(data);

for (let i=0; i<movies.length; i++){

    $("#container_movies").append(
        `<div class="movie" "mov${[i]}">
            <div class="left">
                <img class="poster" src = ${movies[i].poster} alt= poster ${movies[i].name}>
            </div>
            <div class="right">
                <div><h2>${movies[i].name}</h2><p>${movies[i].short}</p></div>
            </div>
        `


        // <div class="movie" id="mov1">
        //         <div> <img class="poster" src="img/tolkien.jpg" alt="name_movie">
        //         </div>
        //         <div class="right">
        //             <div><h2>Movie name</h2><p>Short description of the movie</p></div>
        //         </div>
        //     </div>
    )
    console.log(`${[i]} appending sucessful ${movies[i].name}`);

}


});