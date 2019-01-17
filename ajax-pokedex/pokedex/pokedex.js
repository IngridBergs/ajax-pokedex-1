function searchPoke(){
let input = document.getElementById("input").value;
  xhr=new XMLHttpRequest();
  //
  xhr.open("GET","https://pokeapi.co/api/v2/pokemon/"+input+"/",true);

  xhr.onload = function(){
    if(this.status==200){ // alles tussen slash gebruiken voor nieuwe request
      let pokemons= JSON.parse(this.responseText);
      if(pokemons.moves.length< 4){
      
      if(pokemons.moves.length== 1) {
        document.getElementById("moves1").innerHTML = pokemons.moves[0].move.name;
        document.getElementById("idNumber").innerHTML = pokemons.id;
      }else if (pokemons.moves.length==2){
        document.getElementById("moves1").innerHTML = pokemons.moves[0].move.name;
        document.getElementById("moves1").innerHTML = pokemons.moves[1].move.name;
        document.getElementById("idNumber").innerHTML = pokemons.id;
      }else {
        document.getElementById("moves1").innerHTML = pokemons.moves[0].move.name;
        document.getElementById("moves1").innerHTML = pokemons.moves[1].move.name;
        document.getElementById("moves1").innerHTML = pokemons.moves[2].move.name;
        document.getElementById("idNumber").innerHTML = pokemons.id;
      }



    }else {
      console.log(pokemons);
      console.log(pokemons.moves[0].move.name)
      document.getElementById("moves1").innerHTML = pokemons.moves[0].move.name;
      document.getElementById("moves2").innerHTML = pokemons.moves[1].move.name;
      document.getElementById("moves3").innerHTML = pokemons.moves[2].move.name;
      document.getElementById("moves4").innerHTML = pokemons.moves[3].move.name;
      document.getElementById("idNumber").innerHTML = pokemons.id;
}
}
      let  xhr2=new XMLHttpRequest();
        //
        xhr2.open("GET","https://pokeapi.co/api/v2/pokemon-form/"+input+"/",true);

        xhr2.onload = function(){
          if(this.status==200){
            // alles tussen slash gebruiken voor nieuwe request
            let pokemons2= JSON.parse(this.responseText);
            console.log(pokemons2);

            document.getElementById("photo").innerHTML ='<img src="'+pokemons2.sprites.front_default+'">';
          }
        }
        xhr2.send();
      //document.getElementById("photo").innerHTML='<img src="'+pokemons.photo+'" id="img1">'


    //  document.getElementById("prevEv").innerHTML='<img src="'+quotes.photo+'" id="img1">'

    };

  xhr.send();
}

/*
$.ajax({
  method:"GET",
  url: "https://pokeapi.co/api/v2/pokemon-species/",
  datatype: JSON,
}).done(function(data){
  $("idNumber").append('<p>'+data.id+'</p>')
})
}
*/
