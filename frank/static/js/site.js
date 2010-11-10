$(document).ready(function (){
  
  $('#nav #homelink').bind('click', function(){window.location = '/';});
  
  $('#utilnav ul li.search a').bind('click', function(){
    $('#utilnav .search .searchbox').animate({
      width: 'toggle',
    },'slow');
    return false;
  });
  
  $('#header.home').css('background-image', 'url('+randomHomeHeaderImageUrl()+')');
  
  //setup the click handlers for the expanders
  $('.expander').click(function(){
    var toexpand = $("#" + $(this).attr('rel'));
    if(toexpand.css('display') == 'none'){
      $(this).html('Hide Song Info &#x2B06;');
    }
    else{
      $(this).html('View Song Info &#x2B07;');
    }
    toexpand.slideToggle('slow');
  });
  
});

function randomHomeHeaderImageUrl(){
  var numberofavailableimages = 14;
  rand = Math.floor(Math.random()*numberofavailableimages);
  return '/images/home-header-'+ rand +'.jpg'; 
}