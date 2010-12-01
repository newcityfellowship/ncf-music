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
  
  //setup the audio players
  $('.audioplayer').each(function(item){
    var mp3holder = $(this).find('.mp3holder');
    var progressbar = $(this).find('.innerprogressbar');
    var timeinfo = $(this).find('.time');
    var playbutton = $('#play'+mp3holder.attr('id'));
    var mp3file = mp3holder.attr('rel');
    mp3holder.jPlayer( {
      ready: function () {
        console.log('setting up player for song: ' + mp3file);
        mp3file && this.element.jPlayer("setFile", mp3file); // Defines the mp3
      }
    });
    
    mp3holder.jPlayer("onProgressChange", function(lp,ppr,ppa,pt,tt) {
      progressbar.css('width', ppa+"%");
      timeinfo.html(convertMillsecToMinutes(pt) + " / " + convertMillsecToMinutes(tt));
    });
    
    mp3holder.jPlayer("onSoundComplete", function() {
      timeinfo.html('');
      progressbar.css('width', "0%");
      playbutton.removeClass('playing').addClass('paused');
    });
    
  });
  
  //setup the click handlers for the play buttons
  $('.audioplay').click(function(){
    var toplay = $("#" + $(this).attr('rel'));
    if(toplay.jPlayer( "getData", "diag.isPlaying")){
      toplay.jPlayer("pause");
      $(this).removeClass('playing').addClass('paused');
    }
    else{
      toplay.jPlayer("play");
      $(this).removeClass('paused').addClass('playing');
    }
  });
  
  
  //setup the side nav accordian
  $('.navexpander').click(function(){
    var navsection = $(this).parent().parent();
    if($(this).html() == '+'){
      navsection.find('.subnavlist').slideDown('slow');//removeClass('collapsed');
      $(this).html('-');
    }
    else{
      navsection.find('.subnavlist').slideUp('slow');//addClass('collapsed');
      $(this).html('+');
    }
  });
  
});

function convertMillsecToMinutes(millsecs){
  var totalseconds = Math.floor(millsecs/1000);
  var minutes = Math.floor(totalseconds/60);
  var seconds = totalseconds % 60;
  return minutes + ":" + seconds;
}

function randomHomeHeaderImageUrl(){
  var numberofavailableimages = 14;
  rand = Math.floor(Math.random()*numberofavailableimages);
  return '/images/home-header-'+ rand +'.jpg'; 
}