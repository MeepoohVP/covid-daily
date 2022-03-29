const baseURL = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';

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
    document.getElementById("date").innerHTML = "" + data[0].txn_date;
    document.getElementById("infect").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+  data[0].new_case + '&nbsp;&nbsp;ราย';
    document.getElementById("death").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+  data[0].new_death +'&nbsp;&nbsp;ราย';
    document.getElementById("healing").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+  data[0].new_recovered +'&nbsp;&nbsp;ราย';
    document.getElementById("total_infect").innerHTML =  data[0].total_case;
    document.getElementById("total_death").innerHTML =  data[0].total_death;
    document.getElementById("total_healing").innerHTML = data[0].total_recovered;
}