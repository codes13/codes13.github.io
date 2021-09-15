var player = videojs('videoPlayer',{
// autoplay : "muted",
 controls  : true,
poster: "https://picsum.photos/800/450",
fluid : true, 
// aspectRatio : '4:3'
playbackRates : [0.25,0.5,1,1.5 , 2 , 2.5 , 3 , 2.5 , 4 , 4.0 ],
VideoPlaybackQuality : true, 

  
  

});

player.watermalk({
  file : 'https://picsum.photos/50/50',
  xpos:0,
  ypos: 0,
  opacity:1,
  clickable :true,
  url : 'https://picsum.photos/50/50'
})