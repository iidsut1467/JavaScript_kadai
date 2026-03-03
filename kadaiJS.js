//第1問
window.onload = function() {
  setTimeout(function() {
    const aftLd = document.getElementById("q1");
    if (aftLd) {
      aftLd.style.fontSize = "30px";
    }
  }, 5000);// HTMLのロード完了から5秒（5000ミリ秒）後に実行
};


//第2問
let q2Click = document.getElementById("q2");

q2Click.addEventListener('click', function() {
  q2Click.style.backgroundColor("red"); // 背景を赤に
  q2Click.style.color("black"); // 色を黒に
});

//第3問
let q3Click = document.getElementById("q3");

q3Click.addEventListener('click', function() {
if(q3Click.style.color === "red") { // 赤なら
    q3Click.style.color("black"); // 黒にする
} else {
    q3Click.style.color("red"); // 赤以外なら赤にする
}});


//第4問
let q4Click = document.getElementById("q4");

q4Click.addEventListner('click',function()  {

  let newElement1 = document.createElement("p"); // 挿入するテキスト
  newElement1.textContent = "テキスト";

  let newElement2 = document.createElement("p"); // 挿入するテキスト
  newElement2.textContent = "テキスト";

  q4Click.before(newElement1); // q4の前に挿入
  q4Click.after(newElement2); // q4の後に挿入
});


//第5問
let q5Click = document.getElementById("q5");

q5Click.addEventListener("click", function() {
  q5Click.removeClass("is-big"); // is-bigクラスを削除
});


//第6問
let q6Click = document.getElementById("q6");

q6Click.addEventListener("click", function() {
// 移動先の値を指定、対象（マージン）を指定
  q6Click.style.marginRight = "150px";
  q6Click.style.marginBottom = "150px";
}, 500); //　秒数を指定


//第7問
let q7Click = document.getElementById("q7");

q7Click.addEventListener("click", function() {
  const dlClick = Array.from(document.querySelecterAll("dl"));

  dlClick.forEach(dl => {
    dl.addEventListener("click", e => {
      const index = dl.findIndex(dls => dl === e.target);
      console.log(index + "番目の要素です");
      alert(index + "番目の要素です");
    })
  })
});


//第8問
// マウスが乗った時（hover開始）
let 
q8.addEventListener("hover", function() {
  this.classList.add("is-big");
},
// マウスが離れた時（hover終了）
{
  this.classList.remove(".is-big");
});


//第9問
// 対象の要素を取得
const targetQ9 = document.getElementById("q9");

if (targetQ9) {
  targetQ9.addEventListener("click", function() {
    // data属性を設定
    this.dataset.status = "active";
    
    // 設定した内容を取得してconsoleに表示
    console.log("active");
  });
}


//第10問
q10.addEventListener("click", function(){
  q11.removeClass(".is-big").index(this)
});


//第11問
q12.addEventListener("click",function() {
    var q13Li = index("q13.li");
    q12.click({
     console.log("q13Li")
     console.log("q13")
    })
});