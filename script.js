var nameinput; 
var yearborn;
var moneyspent;
var background;

$(".future").hide();

$(".enter").click(function(){
 

nameinput = $(".name").val(); 
$(".nameVal").html(nameinput+" ");

yearborn= $(".year").val();
$(".yearVal").html(2019-(parseInt(yearborn))); 

moneyspent= $(".money").val();
$(".moneyVal").html("$"+365*(parseInt(moneyspent)*3));


background= $(".color").val(); 
$("body").css("animation","none");
$("body").css("background-color", background);
$("#banner").css("animation","none");
$("#banner").css("color","white");
$("#banner").css("border","white");

$("#body").hide();
$(".future").show();
});