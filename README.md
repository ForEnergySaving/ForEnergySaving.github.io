# ForEnergySaving.github.io
<!DOCTYPE html>
<html lang="zh-CN">
<!--百度浏览量分析-->
  <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?510ba79717697c408a8be4b3a748cf3b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>




<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>省エネ＆ＱＲコードhomepage</title>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="currentweather.js"></script>
    <!--放天气的js-->
  <script  src="movepart2.js">     </script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-48FDLQXYMR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-48FDLQXYMR');
</script>

</head>

<body background="236, 247, 206">

  

  <table>
     
  <h2　align="center"> <font  size="5" color='#000000'>省エネ行動しょう</font></h2>
    <tr>
      <td class="weareminder">
        <div class='toppart' style="width:100%;">
          <!--顶部两个-->
          <div>
            今の気温は：<div class="container-fluid">
              <div class="content">
                <span id="weather"></span>
                <span class="tmp">℃</span>℃
              </div>
            </div>
          </div>
      </td>

      <td  class="costreminder">
        <div>  先週の研究室のエネルギー消費量は：W、ガス消費量は　W
<!--csv 导入-->

         
          <br>約 杯<font color='#800000'>500mlコーラ‼</font>
        </div>
      </td>
    </tr>
    </div>

  </table>


<!--每天变化的quiz-->
  <div class="reminder1" style="width:100%; height:auto; float:left;background-color:rgba(245, 250, 253, 0.7);border:1px solid;
    border-radius:25px; border-color: azure; ">
    <table>
      <tr id="question"></tr>
    </tr>
</table>

<table>

  
  <tr><font color='#008080'><b> <div id="flip1"> </div>　</b>
     <div id="panel1"></div>
     <b><div id="flip2"> </div></b>
      <div id="panel2"></div></font>
  </tr>
</table>
  </div>




  <div class="ad1" style="width:100%; height:auto; float:left; background-color:rgba(255, 255, 255, 0.9)" >

    <table >
      <font color='#008080'><b> <span id="week"></span></b></font><!--每天变化的省エネアドバイス-->
    </br> </br><b><span id="title"></span></b>
  </br></br>
      <tr id="content">

</tr>
    </table>
  </div>



  
  


  <div class="reminder1" style="width:100%; height:auto; float:left;background-color:rgb(252, 240, 240);border:1px solid;
  border-radius:25px; border-color: azure; font-size: smaller;" >
<b>  <font color='#008080'><span id="sharingweb"></span></b></font><!--每天变化的ウェブサイト-->
   </div>

    <script>
    // 抽象出csv_data方法
    // csv_data方法的作用是
    // 1.拿到目标对象的DOM
    // 2.通过Ajax解析CSV文件
    // 3.执行innerHTML方法
    function csv_data(dataPath, elementId) {
      const output_svg = document.getElementById(elementId);
        const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
        request.addEventListener('load', (event) => { // ロードさせ実行
          const response = event.target.responseText; // 受け取ったテキストを返す
          output_svg.innerHTML = response; // 表示
        });
        request.open('GET', dataPath, true); // csvのパスを指定
        request.send();
    }
    csv_data('out_W.csv', 'labdata'); // csvのパス
    csv_data('out_coke.csv', 'data2');
  </script>
</body>


<style type="text/css">
  body {
    background-image: url(BG.png);
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    padding: 70px 0;
    font: normal 100% Helvetica, Arial, sans-serif;
    height: auto;
    width: auto\9;
    background-color: rgb(242, 250, 242)
  }

  img {
    height: auto;
    width: auto\9;
    width: 100%;
  }

  .tmp {
    color: rgb(68, 114, 117);
    font-weight: bold;
  }

  .weareminder {
    font-weight: bold;
    width: auto;
    padding: 20px;
    background-image: url(1.1.png);
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    padding: 20px 0;
    border: 1px solid;
    border-radius: 25px;
    border-color: azure;
    width: 50%;
    background-color: rgba(207, 238, 241, 0.5)
  }


  .costreminder {
    font-weight: bold;
    width: auto;
    padding: 20px;
    background-image: url(2.3.png);
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    padding: 20px 0;
    border: 1px solid;
    border-radius: 25px;
    border-color: azure;
    width: 100%;
    height: auto;
    float: left;
    background-color: rgba(206, 232, 253, 0.5);
    border: 1px solid;
    border-radius: 25px;
    border-color: azure;
  }


  .ad1 {
    font-weight:normal;
    color: rgb(0, 0, 0);
    width: 1000px;
    padding: 20px;
    background-image: url();
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
    text-align: left;
    padding: 20px 0;
    border: 1px solid;
    border-radius: 25px;
    border-color: azure;
  }


  .reminder1 {
    font-weight: normal;
    width: 1000px;
    padding: 20px;
    background-image: url(png);/*提问背景图*/
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    padding: 20px 0;
    border: 1px solid;
    border-radius: 25px;
    border-color: azure;
  }
</style>

<style type="text/css"> 
    #panel1,#flip1
    {
        padding:5px;
        text-align:center;
        background-color: rgba(217, 238, 255, 0.5);
        border: 1px solid;
    border-radius: 25px;
    border-color: azure;
    }
    #panel1
    {  
        display:none;
    }

    #panel2,#flip2
    {
        padding:5px;
        text-align:center;
        background-color: rgba(217, 238, 255, 0.5);
        border: 1px solid;
    border-radius: 25px;
    border-color: azure;
    }
    #panel2
    {
        display:none;
    }
    </style>
<script src="change advice.js"></script>

</html>
