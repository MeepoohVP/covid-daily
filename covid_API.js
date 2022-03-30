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
    document.getElementById("infect").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>'+  data[0].new_case + '</strong>&nbsp;&nbsp;ราย';
    document.getElementById("death").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>'+  data[0].new_death +'</strong>&nbsp;&nbsp;ราย';
    document.getElementById("healing").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>'+  data[0].new_recovered +'</strong>&nbsp;&nbsp;ราย';
    document.getElementById("total_infect").innerHTML =  '<strong>'+data[0].total_case +'</strong>';
    document.getElementById("total_death").innerHTML = '<strong>'+ data[0].total_death+'</strong>';
    document.getElementById("total_healing").innerHTML = '<strong>'+data[0].total_recovered+'</strong>';
}