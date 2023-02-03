// $("h1").css("font-size", "16rem"); 

$("h1").text("New title to this mixtape");  

$("button").html("<strong>Don't click me!</strong>");  
// console.log($(img).attr("src"));

//$("a").attr("href", "https://www.yahoo.com");


// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

// for(var i = 0; i<document.querySelectorAll("button").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "black";
//     })
// }


// $("button").click(function(){
//     $("h1").css("color", "black");
// })


// $("input").keypress(function(e){
//     $("h1").text(e.key);
// })


// $("h1").on("mouseover", function(){
//     $("h1").css("color","purple");  
// });


// $("button").click(function(){
//     $("h1").fadeToggle();
// });

// $("button").click(function(){
//     $("h1").slideUp();
// });

// $("button").click(function(){
//     $("h1").slideDown();
// });


// $("button").click(function(){
//     $("h1").slideToggle();
// });

// $("button").on("click", function(){
//     $("h1").animate({margin: "20%"  
//     })

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({margin: "20%"}).animate({opacity: 0.5});
})



