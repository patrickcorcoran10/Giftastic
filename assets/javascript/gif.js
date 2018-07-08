var animals = ["lion", "tiger", "bear"];

function renderButtons() {
    $("#animalButtons").empty();

    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("id", animals[i]);
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#animalButtons").append(a);
    }
};

$("#animalbuttons").on("click", function(event) {
    event.preventDefault();
    var animalB = $("#lion", "#tiger", "#bear").val();
    
    

});

$("#add-animal").on("click", function(event){
    event.preventDefault();
    var animalA = $("#submit").val().trim();
    animals.push(animalA);
    

    renderButtons();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalA + "&api_key=hnT5lnVzXNifAuxi8qoo3j0wa8XhIQip&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results = response.image_original_url;

      for (var i = 0; i <results.length; i++) {
          
      
      var imageURL = results.gif;
      var animalImage = $("<img>");
      animalImage.attr("src", imageURL);
      animalImage.attr("alt", "animal image");

      $("#animalGif").prepend(animalImage);
      };
      $("#submit").empty("");
    });
 

// $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    // var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    // if (state === "still") {
    //   $(this).attr("src", $(this).attr("data-animate"));
    //   $(this).attr("data-state", "animate");
    // } else {
    //   $(this).attr("src", $(this).attr("data-still"));
    //   $(this).attr("data-state", "still");
    // }
//   });

});

renderButtons();