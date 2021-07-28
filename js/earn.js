//省エネ事項
var matterList = [{
  text: "こまめに消灯する",
},
{
  text: "パソコン長時間見ないときは主電源を切る",
},
{
  text: "使わないときはプラグをコンセントから抜く",
},
{
  text: "冷蔵庫：扉の開閉を少なく、開けっ放しにしない",
},
{
  text: "エレベーターを使わずに階段で移動した",
},
{
  text: "不必要な冷暖房機器は電源をオフにする",
},
{
  text: "昼休みは消灯する",
},
{
  text: "エアコンは適正温度を把握し適正な温度に設定する",
},
];

var currentPoints;
var allMatter;
var pointDom;
var mask;
var getImg;

//2点の画像
var twoArr = [
  "./img/1.猿SR.jpg",  "./img/3.牛SR.jpg","./img/4.コオロギR.jpg","./img/5.スパイダーR.jpg","./img/4.コオロギR.jpg","./img/5.スパイダーR.jpg","./img/4.コオロギR.jpg","./img/5.スパイダーR.jpg",
]

//3点の画像
var threeArr = [
  "./img/2.イノシシSSR.jpg", "./img/6.狸SR.jpg","./img/6.狸SR.jpg", "./img/1.猿SR.jpg","./img/1.猿SR.jpg", "./img/3.牛SR.jpg","./img/3.牛SR.jpg","./img/4.コオロギR.jpg","./img/5.スパイダーR.jpg","./img/4.コオロギR.jpg","./img/5.スパイダーR.jpg","./img/4.コオロギR.jpg","./img/5.スパイダーR.jpg",
]


_init();

function _init() {
  pointDom = document.getElementsByClassName("point_dom")[0];
  currentPoints = Number(localStorage.getItem("current_points") || "0");
  allMatter = document.getElementsByClassName("all_matter")[0];
  pointDom.innerHTML = currentPoints;
  mask = document.getElementsByClassName("mask")[0];
  getImg = document.getElementsByClassName("get_img")[0];
  var str = "";

  matterList.forEach(function (item) {
    str += `
      <li onclick=\'storagePoints(${1} , ${1})\'><span>${item.text}</span></li>
      `;
  });

  allMatter.innerHTML = str;
}

function storagePoints(type, num) {
  if (type === 1) {
    currentPoints += num;
  } else {
    currentPoints -= num;
  }

  localStorage.setItem("current_points", currentPoints);
  pointDom.innerHTML = currentPoints;
}

function luck(type) {
  type = Number(type);

  if (currentPoints < type) {
    alert("現在の点数が足りないので、もっと省エネ行動をして点数を取りましょう。")
    return
  }

  var preTime;
  var randomIndex;
  var zeroTime = new Date().setHours(0, 0, 0, 0);
  var nowTime = new Date().getTime()

  if (type === 2) {
    preTime = localStorage.getItem("last_two")
    if (preTime) {
      if ((nowTime - preTime) < 24 * 60 * 60 * 1000) {
        alert("当日は一度に2ポイントの抽選を行いました。")
        return
      }
    }

    randomIndex = Math.floor(Math.random() * twoArr.length)
    getImg.src = twoArr[randomIndex]
    mask.style.display = "flex"
    localStorage.setItem("last_two", JSON.stringify(zeroTime))
    storagePoints(2, type);
  } else {
    preTime = localStorage.getItem("last_three")
    if (preTime) {
      if ((nowTime - preTime) < 24 * 60 * 60 * 1000) {
        alert("当日は一度に3ポイントの抽選を行いました。")
        return
      }
    }
    randomIndex = Math.floor(Math.random() * threeArr.length)
    getImg.src = threeArr[randomIndex]
    mask.style.display = "flex"
    localStorage.setItem("last_three", JSON.stringify(zeroTime))
    storagePoints(2, type);
  }
}


function hideImg(e) {
  mask.style.display = "none"
}

function stopDef(e) {
  console.log(e)
  e.stopPropagation()
}
