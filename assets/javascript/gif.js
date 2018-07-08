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
            $("#animalbuttons").on("click", function(event) {
                event.preventDefault();
                var animalB = this;
                console.log(animalB)
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalsB + "&api_key=jEyoNNAhVcbsV0o1H5kflHtad50NbpDE&limit=10";
            
                $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                console.log(response);
                
            
                for (var i = 0; i <response.data.length; i++) {
                    
                
                var imageURL = response.data[i].images.original_still.url;
                var animalImage = $("<img>");
                animalImage.attr("src", imageURL);
                animalImage.attr("alt", "animal image");
            
                $("#animalGif").prepend(animalImage);
                };
                $("#submit").empty("");
                });
        });
            $("#add-animal").on("click", function(event){
                event.preventDefault();
                var animalA = $("#submit").val().trim();
                animals.push(animalA);
                
            
                renderButtons();
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalA + "&api_key=jEyoNNAhVcbsV0o1H5kflHtad50NbpDE&limit=10";
            
                $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {
                console.log(response);
                
            
                for (var i = 0; i <response.data.length; i++) {
                    
                
                var imageURL = response.data[i].images.original_still.url;
                var animalImage = $("<img>");
                animalImage.attr("src", imageURL);
                animalImage.attr("alt", "animal image");
                animalImage.attr("data-state", "animate");
                animalImage.attr("class", "gif");
                animalImage.attr("data-still", response.data[i].images.original_still.url);
                animalImage.attr("data-animate", response.data[i].images.original.url);
            
                $("#animalGif").prepend(animalImage);
                };
                $("#submit").empty("");
                
            
            
            $(".gif").on("click", function() {
                var state = $(this).attr("data-state");
                if (state === "animate") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "still");
                } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "animate");
                }
            });
        
            });
    });
};
renderButtons();