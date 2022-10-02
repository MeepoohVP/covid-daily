function covid() {
    const country = document.getElementById("country").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '42dc2f1aa5msh5bf1af0cc42368fp1f03c6jsn88c35a62d997',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    function appendData(data) {
        const infect = data.response[0].cases['new'];
        const death = data.response[0].deaths['new'];
        const oneM = data.response[0].cases["1M_pop"];
        const total_infect = data.response[0].cases['total'];
        const total_death = data.response[0].deaths['total'];
        const total_healing = data.response[0].cases['recovered'];
        document.getElementById('infect').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>' + infect + '</strong>&nbsp;&nbsp;ราย';
        document.getElementById('death').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>' + death + '</strong>&nbsp;&nbsp;ราย';
        document.getElementById("healing").innerHTML = '&nbsp;&nbsp;<strong>' + (Number(oneM)).toLocaleString() + '</strong>&nbsp;&nbsp;ราย';
        document.getElementById('total_infect').innerHTML = '<strong>' + (Number(total_infect)).toLocaleString() + '</strong>';
        document.getElementById('total_death').innerHTML = '<strong>' + (Number(total_death)).toLocaleString() + '</strong>';
        document.getElementById('total_healing').innerHTML = '<strong>' + (Number(total_healing)).toLocaleString() + '</strong>';
        document.getElementById('date').innerHTML = data.response[0].day
        if (infect == null) {
            document.getElementById('infect').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>No update</strong>'
        }
        if (death == null) {
            document.getElementById('death').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>No update</strong>'
        }
        if (oneM == null) {
            document.getElementById('healing').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>No update</strong>'
        }
        if (total_infect == null) {
            document.getElementById('total_infect').innerHTML = '<strong>No update</strong>'
        }
        if (total_death == null) {
            document.getElementById('total_death').innerHTML = '<strong>No update</strong>'
        }
        if (total_healing == null) {
            document.getElementById('total_healing').innerHTML = '<strong>No update</strong>'
        }

    }
    fetch('https://covid-193.p.rapidapi.com/statistics?country=' + country, options)
        .then(data => data.json())
        .then(data => appendData(data))
        .catch(err => Swal.fire({
            icon: 'error',
            title: 'Data not found!',
            allowOutsideClick: false,
            text: 'Country name may be wrong.',
            footer: '<a href="country.txt" target = "_blank">You can enter country name from this document.</a>'
        }));
}
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '42dc2f1aa5msh5bf1af0cc42368fp1f03c6jsn88c35a62d997',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};
function appendData(data) {
    document.getElementById('infect').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>' + data.response[0].cases['new'] + '</strong>&nbsp;&nbsp;ราย';
    document.getElementById('death').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>' + data.response[0].deaths['new'] + '</strong>&nbsp;&nbsp;ราย';
    document.getElementById("healing").innerHTML = '&nbsp;&nbsp;<strong>' + (Number(data.response[0].cases["1M_pop"])).toLocaleString() + '</strong>&nbsp;&nbsp;ราย';
    document.getElementById('total_infect').innerHTML = '<strong>' + (Number(data.response[0].cases['total'])).toLocaleString() + '</strong>';
    document.getElementById('total_death').innerHTML = '<strong>' + (Number(data.response[0].deaths['total'])).toLocaleString() + '</strong>';
    document.getElementById('total_healing').innerHTML = '<strong>' + (Number(data.response[0].cases['recovered'])).toLocaleString() + '</strong>';
    document.getElementById('date').innerHTML = data.response[0].day

}
fetch('https://covid-193.p.rapidapi.com/statistics?country=thailand', options)
    .then(data => data.json())
    .then(data => appendData(data))
    .catch(err => console.error(err));

function search() {
    if (event.key === 'Enter') {
        covid();
    }
}

