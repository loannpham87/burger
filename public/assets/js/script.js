$(document).ready(function () {

    // $("#create-button").on("click", function (event) {
    //     event.preventDefault();
    //     var newBurger = {
    //         burger: $("#create-button").val().trim()
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/burgers", {
    //         type: "POST",
    //         data: newBurger
    //     }).then(
    //         function () {
    //             console.log("created new burger");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    // $(".eaten-burger").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     // Get the ID by finding an element with a "name" attribute equal to the string "id"
    //     var id = $(this).attr("data-id");
    //     console.log(id);
    //     // Send the PUT request.
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/burgers/" + id,

    //     }).then(
    //         function (data) {
    //             console.log("updated id ", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    // $("#burgereaten").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     // Get the ID by finding an element with a "name" attribute equal to the string "id"
    //     var id = $("this").attr("data-id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE",
    //     }).then(
    //         function (data) {
    //             console.log("deleted burger ", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         });
    // });

    // $("#createburger").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();
    //     // [name=burger] will find an element with a "name" attribute equal to the string "burger"
    //     var newBurger = {
    //         burger: $("#createburger [name=burger]").val().trim()
    //     };
    //     // Send the POST request.
    //     $.ajax("/api/burgers", {
    //         type: "POST",
    //         data: newBurger
    //     }).then(
    //         function () {
    //             console.log("created new burger");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    //move burger to delete order div
    $("#eat-button").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
         //event.preventDefault();
        // Get the ID by finding an element with a "name" attribute equal to the string "id"
        var id = $(this).attr("data-id");
        // Send the PUT request.
        $.ajax({
            method: "PUT",
            url: "/burgers/" + id
        }).then(
            function (data) {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //delete burger on submit
    $(".delete-burger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
         //event.preventDefault();
        // Get the ID by finding an element with a "name" attribute equal to the string "id"
        var id = $(this).attr("data-id");
        // Send the DELETE request.
        $.ajax({
            method: "DELETE",
            url: "/burgers/delete/" + id
        }).then(
            function (data) {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
