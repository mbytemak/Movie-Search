

  $( document ).ready(function() {

   var yearAppend=''

 console.log("Ready state");
    function getFacebookInfo(type,value,year){
 if(year!='')
   {
      yearAppend=`&y=${year}`
   }

        $.ajax({
          type:'GET',
          dataType:'json',

url:`https://www.omdbapi.com/?${type}=${value}&apikey=7d76ed44${yearAppend}`,

  success : function(data){

    if(data.Poster=="N/A"){
      data.Poster="https://images.unsplash.com/photo-1495628987724-4aa8d02dcc94?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=595cb81d71f98414681cd87e7a6b2ce4"
    }

   Object.entries(data).forEach(
    ([key, value]) => {
      if(value=='N/A')
      {

      data.key='Sorry Not Available'
     }}
);
      $("#details").empty();

    $('#details').append(`<img src=${data.Poster} width="200px" height="300px">
<div><p class='details'>Plot:${data.Plot}</p>
<p class='details'>IMDBRating:${data.imdbRating}</p>
<p class='details'>Writer:${data.Writer}</p>
<p class='details'>ImdbVotes:${data.imdbVotes}</p>
<p class='details'> Language:${data.Language}</p>
<p  class='details'> Country:${data.Country}</p>
<p class='details'>Year:${data.Year}</p>
<p class='details'> Actors:${data.Actors}</p></div> `);



                },
                error : function(request,errorType,errorMessage){



                }     });// end ajax call


    }



    $("#search").click(function(){



var type=($("#title").val())[0];
   var value=($("#text").val());
      var year=($("#year").val());


 return getFacebookInfo(type,value,year);


      });

  });
