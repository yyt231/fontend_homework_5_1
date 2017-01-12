/**
 * Created by Tony on 16/10/18.
 */

//查询分数
function backScore() {

    displayResult();
    var score = document.getElementById("score").value;
    var message;
    if (!isNaN(parseInt(score))) {

        if (score <=100 && score >= 90) {
            message = "一"
        } else if (score < 90 && score >= 80) {
            message = "二"
        } else if (score < 80 && score >= 70) {
            message = "三"
        } else if (score < 70 && score >= 60) {
            message = "四"
        } else if (score < 60 && score >= 50) {
            message = "五"
        } else if (score < 50 && score >= 40) {
            message = "六"
        } else if (score < 40 && score >= 30) {
            message = "七"
        } else if (score < 30 && score >= 20) {
            message = "八"
        } else if (score < 20 && score >= 10) {
            message = "九"
        } else if (score < 10 && score >= 0) {
            message = "十"
        } else if (score > 100) {
            document.getElementById("result").innerText = "逗我呢";
            return;
        } else {
            document.getElementById("result").innerText = "逗我呢";
            return;
        }
        message = "该生为数字" + message + "等生"
        document.getElementById("result").innerText = message;
    } else {
        document.getElementById("result").innerText = "逗我呢";
    }
}

//显示评价
function displayResult() {
    document.getElementById("result").style = "display:block; -webkit-animation:flipInX 1s .2s ease both; -moz-animation:flipInX 1s .2s ease both;";
}

function hideResult() {
    document.getElementById("result").style="display:none;"
}


