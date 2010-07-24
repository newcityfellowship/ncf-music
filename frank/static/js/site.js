$(document).ready(function (){
  
  
  $('#utilnav ul li.search a').bind('click', function(){
    $('#utilnav .search .searchbox').animate({
      width: 'toggle',
    },'slow');
    return false;
  });
  
  $('#header.home').css('background-image', 'url('+randomHomeHeaderImageUrl()+')');
  
})

function randomHomeHeaderImageUrl(){
  var numberofavailableimages = 14;
  rand = Math.floor(Math.random()*numberofavailableimages);
  return '/images/home-header-'+ rand +'.jpg'; 
}