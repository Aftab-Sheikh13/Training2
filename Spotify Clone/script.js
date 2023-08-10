let alertshow = false ;
 setInterval(()=> {
     document.title=alertshow?  "Spotify"
                             :  "Listen and Feel The Music" ;
     alertshow= !alertshow;
 },3000);


 

let audioElement=new Audio('../public/music/music2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar =document.getElementById('myprogressbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Maine tera ",filepath:"../public/music/music2.mp3",coverpath:"../public/images/joker.jpg"},
    {songName: "Baller",filepath:"../public/music/music1.mp3",coverpath:"../public/images/joker.jpg"},
    {songName: "Chaska ",filepath:"../public/music/music2.mp3",coverpath:"../public/images/joker.jpg"},
    {songName: "Bin tere ",filepath:"../public/music/music1.mp3",coverpath:"../public/images/joker.jpg"},
    {songName: "Bewafa",filepath:"../public/music/music2.mp3",coverpath:"../public/images/joker.jpg"},
    {songName: "Desi kalakar",filepath:"../public/music/music1.mp3",coverpath:"../public/images/joker.jpg"}
]
/*
 songItems.forEach(element ,i => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].filepath;
});*/

// audioElement.play();
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi-caret-right-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-caret-right-fill');
    }
})
// listen to the events 
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar 
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})
 myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
 })
 