const baseURL = '';

fetch(baseURL)
fetch(baseURL)
.then(function (response) {
    return response.json();
    
})
.then(function (data) {
    appendData(data);
    
})
.catch(function (err) {
    console.log('error: '+ err)
    
});
function appendData(data) {
    document.getElementById("date").innerHTML = "" + data[0].Date;
    document.getElementById("infect").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+  data[0].Infect + '&nbsp;&nbsp;ราย';
    document.getElementById("death").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+  data[0].Death +'&nbsp;&nbsp;ราย';
    document.getElementById("healing").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+  data[0].Healing +'&nbsp;&nbsp;ราย';
    document.getElementById("total_infect").innerHTML =  data[0].Total_infect;
    document.getElementById("total_death").innerHTML =  data[0].Total_death;
    document.getElementById("total_healing").innerHTML = data[0].Total_healing;
}