document.getElementById('cases').value = 'ติดเชื้อ'
function Translate_ENG() {
    document.getElementById('trans').innerHTML = '<button class="thais" id="thai" onclick="Translate_TH()">TH</button><button class="eng" id="eng" onclick="Translate_ENG()" style="background:none;border: 1px solid white;color: white;opacity:50%;width:35px;height:30px;box-shadow: inset 0 0 0 0 #50c878;cursor:default;">ENG</button>'
    document.getElementById('cases').innerHTML = 'Cases';
    document.getElementById('cases').value = 'Cases';
    document.getElementById('deaths').innerHTML = 'Deaths';
    document.getElementById('recovered').innerHTML = '1 months cases';
    document.getElementById('total_cases').innerHTML = 'Total cases';
    document.getElementById('total_deaths').innerHTML = 'Total deaths';
    document.getElementById('total_recoverd').innerHTML = 'Total recovered';
}
function Translate_TH(){
    document.getElementById('trans').innerHTML = '<button class="thai" id="thai" onclick="Translate_TH()" style="background:none;border: 1px solid white;color: white;opacity:50%;">TH</button><button class="engs" id="eng" onclick="Translate_ENG()">ENG</button>'
    document.getElementById('cases').innerHTML = 'ติดเชื้อ';
    document.getElementById('cases').value = 'ติดเชื้อ';
    document.getElementById('deaths').innerHTML = 'เสียชีวิต';
    document.getElementById('recovered').innerHTML = 'ป่วยสะสม 1 เดือน&nbsp;';
    document.getElementById('total_cases').innerHTML = 'ติดเชื้อสะสม';
    document.getElementById('total_deaths').innerHTML = 'เสียชีวิตสะสม';
    document.getElementById('total_recoverd').innerHTML = 'หายป่วยสะสม';
}
function info(){
    x = document.getElementById('cases').value
    console.log(x);
    if (x == "ติดเชื้อ"){
        Swal.fire({
            icon: 'info',
            title: 'เกี่ยวกับ Covid-19',
            customClass: 'swal-height',
            showCloseButton: true,
            showConfirmButton: false,
            html: '<div style="background: #EBECE7;padding: 7px;"><p align="left"><b>&nbsp;&nbsp;Covid-19 คืออะไร ?</b></p><p align ="left"><b>โรคโคโรนาไวรัส (COVID-19)</b> คือโรคติดเชื้อทางเดินหายใจที่เกิดจากเชื้อไวรัส<b style="color: red;">SARS-CoV-2</b>.</p>' 
            + '<p align ="left">&nbsp;&nbsp;ผู้ที่ติดเชื้อส่วนใหญ่จะมีอาการเกี่ยวกับระบบทางเดินหายใจเล็กน้อยถึงปานกลางและฟื้นตัวได้โดยไม่ต้องได้รับการรักษาเป็นพิเศษ อย่างไรก็ตาม บางรายอาจป่วยหนักและต้องไปพบแพทย์ ผู้สูงอายุและผู้ที่มีโรคประจำตัว เช่น โรคหัวใจและหลอดเลือด เบาหวาน โรคระบบทางเดินหายใจเรื้อรัง หรือมะเร็ง มีแนวโน้มที่จะเจ็บป่วยรุนแรงมากขึ้น'
            + '</p>' + '<ul align="left">&nbsp;&nbsp;<b>การป้องกัน</b><li><i class="bi bi-caret-right-fill arrinfect"></i>สวมใส่หน้ากากอนามัยที่พอดีกับใบหน้า</li><li><i class="bi bi-caret-right-fill arrinfect"></i>เว้นระยะห่างจากผู้อื่นอย่างน้อย 1 เมตร</li><li><i class="bi bi-caret-right-fill arrinfect"></i>หมั่นล้างมือ หรือฉีดสเปรย์แอลกอฮอล์</li><li><i class="bi bi-caret-right-fill arrinfect"></i>รับการฉีดวัคซีนป้องกันโควิด-19</li></ul></div>',
          })
    }
    else if(x == "Cases"){
        Swal.fire({
            icon: 'info',
            title: 'About Covid-19',
            customClass: 'swal-height',
            showCloseButton: true,
            showConfirmButton: false,
            html: '<div style="background: #EBECE7;padding: 7px;"><p align="left"><b>&nbsp;&nbsp;What is covid-19 ?</b></p><p align ="left" ><b>Coronavirus disease (COVID-19)</b> is an infectious disease caused by the <b style="color: red;">SARS-CoV-2 virus</b>.</p>' 
            + '<p align ="left">&nbsp;&nbsp;Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness.'
            + '</p>' + '<ul align="left">&nbsp;&nbsp;<b>Prevention</b><li><i class="bi bi-caret-right-fill arrinfect"></i>Wearing a properly fitted mask.</li><li><i class="bi bi-caret-right-fill arrinfect"></i>Staying at least 1 metre apart from others.</li><li><i class="bi bi-caret-right-fill arrinfect"></i>Washing your hands or using an alcohol-based rub frequently.</li><li><i class="bi bi-caret-right-fill arrinfect"></i>Get covid-19 vaccine.</li></ul></div>',
          })
    }
}