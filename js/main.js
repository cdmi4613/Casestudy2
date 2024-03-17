$(function(){	
    $("#gnb > ul > li").hover(
function(){
    $(".topmiddle").addClass("active");
},
function(){
    $(".topmiddle").removeClass("active");
}
);

let totalLi=$("#gnb > ul > li").length;

$("#gnb > ul > li > a").focusin(function(){
$(this).parent().addClass("active");

if($(this).parent().index() === 0){
    $(".topmiddle").addClass("active");
}
});

let wint=0;

$("#gnb li li:last-child").focusout(function(){
$(this).parent().parent().removeClass("active");

if($(this).parent().parent().index() === (totalLi-1)){
    $(".topmiddle").removeClass("active");
}
});

// $("header .top .top_inner .comu a").click(function(e){
// 	e.preventDefault();
// 	if($("header .top .top_inner .comu a").hasClass("point") == false){
// 		$("header .top .top_inner .comu a").addClass("point");
// 	}
// 	else{
// 		$("header .top .top_inner .comu a").removeClass("point");
// 	}


// })

$("#lang  > a").click(function(e){
e.preventDefault();
if($("#lang ").hasClass("on") == false){
    $("#lang ").addClass("on");
}
else{
    $("#lang ").removeClass("on");
}
});

$("#lang  ul li a").click(function(e){
e.preventDefault();
if($("#lang").hasClass("on") == true){
    $("#lang").removeClass("on");
}

let string=$(this).text();
console.log(string);

// client rendering
$("#lang > a").text(string);
});

let mainSwiper=new Swiper(".mainSwiper", {
speed: 1200, // added
effect: "fade", // added
fadeEffect: { // added
    crossFade: true
},
loop: true,
autoplay: {
    delay: 1000,
    disableOnInteraction: false // added
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // type: "fraction"
}
});

// $("#by > a").click(function(e){
//     e.preventDefault();
//     if($("#by").hasClass("active") == false){
//         $("#by").addClass("active");

// 		if($("#location").hasClass("active") == true){
// 			$("#location").removeClass("active");
// 		}
//     }
//     else{
//         $("#by").removeClass("active");
//     }
// });

// $("#by ul li a").click(function(e){
//     e.preventDefault();
//     if($("#by").hasClass("active") == true){
//         $("#by").removeClass("active");
//     }

// 	let string=$(this).text();
// 	console.log(string);

// 	// client rendering
// 	$("#by > a").text(string);
// });
// $("#location > a").click(function(e){
//     e.preventDefault();
//     if($("#location").hasClass("active") == false){
//         $("#location").addClass("active");

// 		if($("#by").hasClass("active") == true){
// 			$("#by").removeClass("active");
// 		}
//     }
//     else{
//         $("#location").removeClass("active");
//     }
// });
// $("#location ul li a").click(function(e){
//     e.preventDefault();
//     if($("#location").hasClass("active") == true){
//         $("#location").removeClass("active");
//     }
// });


////


/////

$("#by > a").click(function(e){
 e.preventDefault();

 if($("#location").hasClass("active")){// 켜져있으면
    $("#location").removeClass("active");
 }

 if($("#by").hasClass("active")){
    $("#by").removeClass("active")
 }
 else{
    $("#by").addClass("active");
 }
});

const localData=[
["서울 pc방1", "서울 pc방2"],
["경기도 pc방1", "경기도 pc방2", "경기도 pc방3", "경기도 pc방4"],
["충청도 pc방1", "충청도 pc방2"],
["순천 pc방1", "순천 pc방2"],
["광주 pc방1", "광주 pc방2"],
["부산 pc방1", "부산 pc방2", "부산 pc방3"],

];

let idx, titleTxt;
//  let listString="";

$("#by li").click(function(e){
 e.preventDefault();

 idx=$(this).index();

 titleTxt=$(this).find("a").text();
listString="";

 for(let i=0; i<localData[idx].length; i++){
    listString+='<li><a href="">'+localData[idx][i]+'</a></li>\n';
 }

 $("#location ul").html(listString);

 $("#by > a").text(titleTxt);
 $("#by").removeClass("active");
});

$("#location > a").click(function(e){
 e.preventDefault();

 if($("#by").hasClass("active")){
    $("#by").removeClass("active");
 }

 if($("#location").hasClass("active")){
    $("#location").removeClass("active")
 }
 else{
    $("#location").addClass("active");
 }

 
});

/////




let x=0;

function galleryMoving(){
    $(".controller li").removeClass("on");
    $(".controller li").eq(x).addClass("on");
    $(".right li").removeClass("active");
    $(".right li").eq(x).addClass("active");
    $(".left_text li").removeClass("active");
    $(".left_text li").eq(x).addClass("active");

}
galleryMoving();//호출이 중요.

$(".controller li").click(function(e){
e.preventDefault();

$(".controller li").removeClass("on");
$(this).addClass("on");

x=$(this).index()
$(".right ul li").removeClass("active")
$(".right ul li").eq(x).addClass("active")
$(".left_text ul li").removeClass("active")
$(".left_text ul li").eq(x).addClass("active")
});
setInterval(function(){
if(x < 2){
    galleryMoving();
    x++;
}
else{
    galleryMoving();
    x=0;
}
}, 1000);
});
