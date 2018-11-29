 
var card = document.getElementsByClassName("card-additions"); 
for (var i = 0; i < card.length; i++) {
  MakeIconHover(card[i]);
}

function MakeIconHover(row) {
  row.addEventListener("mouseover", function() {
    var icon = this.getElementsByClassName('md-100');
    icon[0].style.color = "#37927a";
});  

  row.addEventListener("mouseout", function() {
    var icon = this.getElementsByClassName('md-100');
    icon[0].style.color = "#346896";
});
}

var card = document.getElementsByClassName("curses-card"); 
for (var i = 0; i < card.length; i++) {
  MakehrefHover(card[i]);
}

function MakehrefHover(row) {
  row.addEventListener("mouseover", function() {
    var href = this.getElementsByTagName('hr');
    href[0].style.background = "#fff";
    href[0].style.width = "17rem";
});  

  row.addEventListener("mouseout", function() {
    var href = this.getElementsByTagName('hr');
    href[0].style.background = "#f24903";
    href[0].style.width = "10rem";
});
}

$(document).ready(function() {
    var header_h = $("#one-course-header").innerHeight();
    var header_1_h = $("#header-1").innerHeight();
    var header_ = header_h + header_1_h
    var menu = $('#menu');  
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top < header_){
            menu.css({position: 'relative'});
        } else {
            menu.css({'top': '0', position: 'fixed'});
        }
    });
});

$(document).ready(function() {
    var lk_header = $("#lk-header").innerHeight();
    var header_1 = $("#header-1").innerHeight();
    var header_ = lk_header + header_1
    var menu = $('#float-nav');
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top < header_){
            menu.css({position: 'relative'});
        } else {
            menu.css({'top': '0', position: 'fixed'});
        }
    });
});

