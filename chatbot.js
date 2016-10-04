function askQuestion() {

  var input = document.getElementById("input").value;
  var giveresponse = responses[input]

  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " ";
  $("#chat-area").append(("#input").val() + "<br>")
}

var Errors = 0;

var responses = {

"What is your name?" : "Stomedy <br/>",
"How old are you?" : "I dont have an age, I'm a meme <br/>",
"Hi" : "Hello <br/>"


}

  if(Errors == 0){
      $("#chat-area").append("Que?" + "<br>");
      Errors++;
    }
