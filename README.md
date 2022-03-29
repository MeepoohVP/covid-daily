﻿# coviddaily.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <title>รายงานสถานการณ์โรคโควิด 19 ประเทศไทย</title>
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200&display=swap');
    *{
        padding: 0;
        margin: 0;
    }
    body{
        font-family: 'Prompt';
        
        background-image: url(Bgcovid1.png);
        background-size: 45%;
        
    }

    .box{
        width: 375px;
        height: 325px;
        background: url(coronavirus.png);
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -162.5px;
        margin-left: -162.5px;
        border-radius: 20px;
        
        
    }
    
    .line{
        width: 150px;
        height: 0px;
        border: 1px solid #000000;
        margin-top: 10px;
    }
    .topic{
        margin-top: 20px;
        font-size: 15px;
    }
    .minibox{
        margin-top: 10px;
        width: 80%;
        height: 40%;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        
        
    }
    .INFO{
        padding-top: 5px;
        padding-left: 10px;
    }
    .info{
        padding-top: 10px;
        font-size: 17px;
        color: azure;
    }
    
    
    .smallbox{
        width: 25%;
        height: 30%;
        background-color: rgba(0, 0, 0, 0.5);
        margin-top: 10px;
        display: inline-block;
        border-radius: 10px;
        color: azure;
        font-size: 13px;
    }
    .aksorn{
        padding-top: 5px;
    }
    .num{
        padding-top: 10px;
    }
    .mask{
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -170px;
        margin-top: -180px;
        z-index: 1;
    }
    .downarr{
        padding-top: 10px;
    }
    .numifect i{
        color: #ba0900;
    }
    
    
</style>
<body>
    <img src="face-mask.png" width="55px" height=55px" class="mask">
    <center>
        
    <div class="box">
        <center><div class="topic"><strong>รายงานสถานการณ์ covid-19 วันที่ <span id="date"></span></strong></div>
        <div class="line"></div></center>
        <div class="minibox">
            <div class="INFO" align="left"><div class="infect info">ติดเชื้อ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-caret-right-fill arrinfect"></i><span id="infect" class="arrinfect"></span></div>
            <div class="decease info">เสียชีวิต&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-caret-right-fill"></i><span id="death"></span></div>
        <div class="info">หายป่วย&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-caret-right-fill"></i><span id="healing"></span></div>
    </div>
    
        </div>
        <div class="smallbox"><div class="aksorn">ติดเชื้อสะสม<br><div class="downarr"><i class="bi bi-caret-down-fill"></i></div></div><div class="num" id="total_infect"></div></div>
        &nbsp;<div class="smallbox"><div class="aksorn">เสียชีวิตสะสม<br><div class="downarr"><i class="bi bi-caret-down-fill"></i></div></div><div class="num" id="total_death"></div></div>
        &nbsp;<div class="smallbox"><div class="aksorn">หายป่วยสะสม<br><div class="downarr"><i class="bi bi-caret-down-fill"></i></div></div><div class="num" id="total_healing"></div></div>
    </div></center></div>
    <script src="covid_API.js"></script>
    
</body>
</html>
 
