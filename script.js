const updateTime = () =>{
    let date = new Date();
    usa.innerHTML = date.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    }).split(', ')[1] 

    india.innerHTML = date.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
    }).split(', ')[1] 

    china.innerHTML = date.toLocaleString('en-US', {
        timeZone: 'Asia/shanghai',
    }).split(', ')[1] 

    let alarmhour = alarm.value.split(":")[0];
    let alarmmin = alarm.value.split(":")[1];

    if(date.getHours()==alarmhour && date.getMinutes() == alarmmin){
        console.log ("alarm ringing");
        let audio="https://file-examples.com/storage/fe1aa0c9d563ea1e4a1fd34/2017/11/file_example_MP3_1MG.mp3";
//         let audio="audio.mp3";
        var audio2 = new Audio(audio);
        audio2.play();
    }
}

setInterval(updateTime, 1000);

function stop() { 
    location.reload();
}
