function updateClock(){
    const now =new Date();
    const hour=now.getHours()%12;
    const minute=now.getMinutes();
    const second=now.getSeconds();

    const hourhand= document.getElementById('hour-hand');
    const minutehand=document.getElementById('minute-hand')
    const secondhand=document.getElementById('second-hand');

    const hourrotation= 360/12*hour+360/12/60*minute;
    const minuterotation=360/60*minute+360/60/60*second;
    const secondrotation= 360/60*second;

    hourhand.style.transform=`rotate(${hourrotation}deg)`;
    minutehand.style.transform=`rotate(${minuterotation}deg)`;
    secondhand.style.transform=`rotate(${secondrotation}deg)`;

}
updateClock()
setInterval(updateClock,1000);