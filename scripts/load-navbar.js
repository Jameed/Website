$.get("http://../components/nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});