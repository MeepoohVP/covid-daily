function Translate_ENG() {
    document.getElementById('trans').innerHTML = '<button class="thai" id="thai" onclick="Translate_TH()" style="background: #FCEE9E;border: 1px solid #FCEE9E;color:black;">TH</button><button class="eng" id="eng" onclick="Translate_ENG()" style="background:none;border: 1px solid white;color: white;opacity:50%;">ENG</button>'
    document.getElementById('topic').innerHTML = '<strong>Covid-19 update  <span id="date"></span></strong>';
    document.getElementById('cases').innerHTML = 'Cases';
    document.getElementById('deaths').innerHTML = 'Deaths';
    document.getElementById('recovered').innerHTML = 'Recoverd';
    document.getElementById('total_cases').innerHTML = 'Total cases';
    document.getElementById('total_deaths').innerHTML = 'Total deaths';
    document.getElementById('total_recoverd').innerHTML = 'Total recovered';
}
function Translate_TH(){
    document.getElementById('trans').innerHTML = '<button class="thai" id="thai" onclick="Translate_TH()" style="background:none;border: 1px solid white;color: white;opacity:50%;">TH</button><button class="eng" id="eng" onclick="Translate_ENG()" style="background: #FCEE9E;border: 1px solid #FCEE9E;color:black;">ENG</button>'
    document.getElementById('topic').innerHTML = '<strong>รายงานสถานการณ์ covid-19  <span id="date"></span></strong>';
    document.getElementById('cases').innerHTML = 'ติดเชื้อ';
    document.getElementById('deaths').innerHTML = 'เสียชีวิต';
    document.getElementById('recovered').innerHTML = 'หายป่วย&nbsp;&nbsp;&nbsp;';
    document.getElementById('total_cases').innerHTML = 'ติดเชื้อสะสม';
    document.getElementById('total_deaths').innerHTML = 'เสียชีวิตสะสม';
    document.getElementById('total_recoverd').innerHTML = 'หายป่วยสะสม';
}