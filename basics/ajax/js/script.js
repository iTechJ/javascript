window.onload = function() {
    var button = document.getElementById("ajax");
    button.addEventListener("click", function() {
        rpAjax.get("js/data.json", function(result){
            console.log(result.responseText);
        });
    });
};
