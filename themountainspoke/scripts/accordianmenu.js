//This code makes all of the specs descend need a better solution

/*$(function(){
    $(".no-show").click(function(){
    $(".specs").slideToggle("slow");
    });
});*/



$(function() {
    $(".specs").hide('slow');
    $(".no-show").click(function() {
    $(this).parent().children(".specs").slideToggle(400);
    });
});
