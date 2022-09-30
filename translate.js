function Translate_ENG() {
    document.getElementById('trans').innerHTML = '<button class="thais" id="thai" onclick="Translate_TH()">TH</button><button class="eng" id="eng" onclick="Translate_ENG()" style="background:none;border: 1px solid white;color: white;opacity:50%;width:35px;height:30px;box-shadow: inset 0 0 0 0 #50c878;cursor:default;">ENG</button>'
    document.getElementById('cases').innerHTML = 'Cases';
    document.getElementById('deaths').innerHTML = 'Deaths';
    document.getElementById('recovered').innerHTML = '1 months cases';
    document.getElementById('total_cases').innerHTML = 'Total cases';
    document.getElementById('total_deaths').innerHTML = 'Total deaths';
    document.getElementById('total_recoverd').innerHTML = 'Total recovered';
}
function Translate_TH(){
    document.getElementById('trans').innerHTML = '<button class="thai" id="thai" onclick="Translate_TH()" style="background:none;border: 1px solid white;color: white;opacity:50%;">TH</button><button class="engs" id="eng" onclick="Translate_ENG()">ENG</button>'
    document.getElementById('cases').innerHTML = 'ติดเชื้อ';
    document.getElementById('deaths').innerHTML = 'เสียชีวิต';
    document.getElementById('recovered').innerHTML = 'ป่วยสะสม 1 เดือน&nbsp;';
    document.getElementById('total_cases').innerHTML = 'ติดเชื้อสะสม';
    document.getElementById('total_deaths').innerHTML = 'เสียชีวิตสะสม';
    document.getElementById('total_recoverd').innerHTML = 'หายป่วยสะสม';
}