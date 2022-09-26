const baseURL = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';

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
    const dailycase = (data[0].new_case).toLocaleString()
    const dailydeath = (data[0].new_death).toLocaleString()
    const dailyrecoverd = (data[0].new_recovered).toLocaleString()
    const totalcase = (data[0].total_case).toLocaleString()
    const totaldeath = (data[0].total_death).toLocaleString()
    const totalrecoverd = (data[0].total_recovered).toLocaleString()
    document.getElementById("date").innerHTML = "" + data[0].txn_date;
    document.getElementById("infect").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>'+  dailycase + '</strong>&nbsp;&nbsp;ราย';
    document.getElementById("death").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>'+  dailydeath +'</strong>&nbsp;&nbsp;ราย';
    document.getElementById("healing").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>'+  dailyrecoverd +'</strong>&nbsp;&nbsp;ราย';
    document.getElementById("total_infect").innerHTML =  '<strong>'+totalcase +'</strong>';
    document.getElementById("total_death").innerHTML = '<strong>'+ totaldeath+'</strong>';
    document.getElementById("total_healing").innerHTML = '<strong>'+totalrecoverd+'</strong>';
    
}