$(document).ready(function () {
  let movies = JSON.parse(data);

  //
  for (let i = 0; i < movies.length; i++) {
    $("#container_movies").append(
      `<div class="movie" >
            <div class="left">
                <img class="poster" src = ${movies[i].poster} alt= poster ${movies[i].name}>
            </div>
            
            <div class="right" id="mov${[i]}">
            <div><h2>${movies[i].name}</h2><br><p>${movies[i].short}</p></div>
            </div>
        `
    );
    //check if correct
    //console.log(`${[i]} appending sucessful ${movies[i].name}`);
  }

  //append button to each movie
  for (let i = 0; i < movies.length; i++) {
    $("#mov" + [i]).append(
      `<span><button class="button"><p>Like &#128402;</p></button></span>
        `
    );
  }

  var buttons = $(".button");

  //add event to the buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      addLike(i);
    });
    //initiate var count
    movies[i].count = 0;
  }

  function addLike(i) {
    //delete old value of like
    $("#output" + [i]).remove();

    movies[i].count++;

    //append new value of like
    $("#mov" + [i]).append(
      `<span class="green" id="output${[i]}"> ${movies[i].count}</span>`
    );
  }

  document.getElementById("sort").addEventListener("click", sortAll);

  function sortAll() {
    //console.log("Function sortAll started");
    //testoutput Movie-Array:
    // movies.forEach(function (entry) {
    //   console.log(entry);
    // });

    //rebuild object in an array
    var sortable = [];

    for (i = 0; i < movies.length; i++) {
      sortable.push([
        i,
        movies[i].name,
        movies[i].short,
        movies[i].poster,
        movies[i].count,
      ]);
    }

    //sort array by count
    sortable.sort(function (a, b) {
      return b[4] - a[4];
    });

    /*
    console.log("id: " + sortable[i][0]);
    console.log("poster: " + sortable[i][3]);
    console.log("name: " + sortable[i][1]);
    console.log("short: " + sortable[i][2]);
    console.log("count: " + sortable[i][4]);
*/

    //delete old order of movies
    for (let i = 0; i < movies.length; i++) {
      $(".movie").remove();
    }

    //rewrite object from array with variable count
    for (let i = 0; i < movies.length; i++) {
      movies[i].name = sortable[i][1];
      movies[i].short = sortable[i][2];
      movies[i].count = sortable[i][4];
      movies[i].poster = sortable[i][3];
    }
    //console.log(movies);

    //append objects with new order
    for (let i = 0; i < movies.length; i++) {
      $("#container_movies").append(
        `<div class="movie" >
              <div class="left">
                  <img class="poster" src = ${movies[i].poster} alt= poster ${movies[i].name}>
              </div>
              <div class="right" id="mov${[i]}">
              <div><h2>${movies[i].name}</h2><br><p>${movies[i].short}</p></div>
              <span><button class="button"><p>Like &#128402;</p></button></span>
              <span class="green" id="output${[i]}"> ${movies[i].count}</span>
              </div>
          `
      );
    }

    var buttons = $(".button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        //console.log("function add like started");
        addLike(i);
      });
    }

    //   let poi = [
    //     [17, "Amanda Saubermann", "bla1", 1],
    //     [3, "Jonas vom Berge", "bla2", 4],
    //     [90, "Zephir der Kluge","bla3", 0],
    //     [121, "Sturmhöhe", "bla4", 7 ]];

    // poi.sort(function(a, b){
    //     return  b[3] - a[3];
    // });

    // console.log (poi);

    return false;
  }
});
