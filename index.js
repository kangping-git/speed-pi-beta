function popup(id){
    document.getElementById("fixed").style.backgroundColor = "rgba(0, 0, 0, 0.3)"
    document.getElementById("fixed").style.width = "100%"
    document.getElementById("fixed").style.height = "100%"
    document.getElementById(id).style.display = "block"
}
get()
var data;
var pi;
function get(){
    if (start_bool != true){
        var a = null
        for (var i = 0;i < document.getElementsByName("types").length;++i){
            if (document.getElementsByName("types")[i].checked){
                a = document.getElementsByName("types")[i].value
                break
            }
        }
        get_HTML("./" + a + ".html")
    }
}
var start_SSSS = []
function get_HTML(url){
    document.getElementById("iframe_1").src = url
    document.getElementById("iframe_1").onload = () => {
        pi = document.getElementById("iframe_1").contentWindow.document.getElementById("data").innerHTML
        start_SSSS = JSON.parse(document.getElementById("iframe_1").contentWindow.document.getElementById("start").innerHTML)
    }
}
switch_mode()
var a = new Audio("./Ok.mp3")
a.preload = "auto"
a = new Audio("./No.mp3")
a.preload = "auto"
function unpopup(id){
    document.getElementById("fixed").style.backgroundColor = "rgba(0, 0, 0, 0)"
    document.getElementById("fixed").style.width = "0%"
    document.getElementById("fixed").style.height = "0%"
    document.getElementById(id).style.display = "none"
}
function get_radio(name){
    let elements = document.getElementsByName(name);
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            checkValue = elements.item(i).value;
        }
    }
    return checkValue
}
setInterval(() => {
    if (get_radio("tekitou") == "2"){
        document.getElementById("random-contents").style.opacity = "1"
        document.getElementById("timer").innerText = "00:00.000"
    }else{
        document.getElementById("timer").innerText = "0"
        document.getElementById("random-contents").style.opacity = "0"
    }
    if (start_bool == true){
        document.getElementById("uploads").style.display = "none"
        document.getElementById("press9").style.display = "none"
        document.getElementById("buttons").style.display = "none"
        if (mode == "1"){
            document.getElementById("timer").innerText = time_for_string(new Date() - start_time) + "\nNo." + (score + 1)
        }else{
            if (count == 0){
                document.getElementById("timer").innerText = time_for_string(new Date() - start_time) + "\nNo." + (answer + 1) + "\nscore:" + score
            }else{
                document.getElementById("timer").innerText = time_for_string(new Date() - start_time) + "\nNo." + (answer + 1) + "\nscore:" + score
            }
        }
        let elements = document.getElementsByName("types");
        let len = elements.length;
        for (let i = 0; i < len; i++){
            elements[i].disabled = true
        }
    }else if (start_bool == null){
        if (mode == "1"){
            document.getElementById("press9").style.display = "block"
            if (get_radio("types") == "pi"){
                document.getElementById("uploads").style.display = "block"
            }
            document.getElementById("buttons").style.display = "block"
            document.getElementById("timer").innerText = time_for_string(time) + "\nscore:" + (score)
        }else{
            document.getElementById("press9").style.display = "block"
            document.getElementById("uploads").style.display = "none"
            document.getElementById("timer").innerText = time_for_string(time) + "\nscore:" + score
        }
        let elements = document.getElementsByName("types");
        let len = elements.length;
        for (let i = 0; i < len; i++){
            elements[i].disabled = true
        }
    }else{
        document.getElementById("uploads").style.display = "none"
        document.getElementById("buttons").style.display = "block"
        document.getElementById("press9").style.display = "none"
        if (get_radio("tekitou") == "2"){
            document.getElementById("timer").innerText = "00:00.000"
        }else{
            document.getElementById("timer").innerText = "No.1"
        }
        let elements = document.getElementsByName("types");
        let len = elements.length;
        for (let i = 0; i < len; i++){
            elements[i].disabled = false
        }
    }
})
var time_for_string = function (time){
    return ("00" + Math.floor(time / (60*1000))).slice(-2) + ":" + ("00" + (Math.floor(time / 1000) % 60)).slice(-2) + "." + ("000" + (time % 1000)).slice(-3)
}
var answers = []
var time = new Date()
var temp = Array.from(start_SSSS)
document.addEventListener("keydown",(e) => {
    if (["0","1","2","3","4","5","6","7","8","9"].includes(e.key)){
        key_press(e.key)
    }else if (e.key == " "){
        if (start_bool == false){
            start()
        }
    }
})
function key_press(a){
    if (start_bool == true){
        if (mode == "1"){
            if (score != 10000){
                if (answer == a){
                    if (temp.length > 7){
                        delete temp[temp.length - 8]
                    }
                    temp.push(pi[score])
                    score += 1
                    document.getElementById("question").innerHTML = temp.join("")
                    new Audio("./Ok.mp3").play()
                }else{
                    if (score > localStorage.getItem("hight_score_Endress")){
                        localStorage.setItem("high_score_Endress",score)
                    }
                    new Audio("./No.mp3").play()
                    start_bool = null
                    time = new Date() - start_time
                }
                answer = pi[score]
            }else{
                start_bool = null
                popup("clear")
            }
        }else{
            if (pi[answer] == a){
                score += 1
                new Audio("./Ok.mp3").play()
            }else{
                new Audio("./No.mp3").play()
            }
            if (count == 4){
                if (score > localStorage.getItem("hight_score_Random")){
                    localStorage.setItem("high_score_Random",score)
                }
                start_bool = null
                time = new Date() - start_time
            }
            answer = getRandomArbitrary(0,mode_2)
            answers.push(answer)
            ++count
        }
    }else if (start_bool == null){
        if (a == 9){
            start_bool = false
            document.getElementById("button-start").style.display = "inline"
            document.getElementById("question").innerHTML = ""
        }
    }
}
var answer = 0
var score = 0
var count = 0
var start_bool = false
var start_time = new Date()
var mode = get_radio("tekitou")
var mode_2 = get_radio("mode")
function start(){
    answer = []
    temp = Array.from(start_SSSS)
    count = 0
    score = 0
    document.getElementById("button-start").style.display = "none"
    start_bool = true
    start_time = new Date()
    mode = get_radio("tekitou")
    if (mode == "2"){
        mode_2 = get_radio("mode")
        answer = getRandomArbitrary(0,mode_2)
        document.getElementById("question").innerHTML = ""
    }else{
        answer = pi[score]
        document.getElementById("question").innerHTML = temp.join("")
        answers.push(answer)
    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function switch_mode(){
    for (var i = 0;i < document.all.length;++i){
        if ((document.all[i].className).indexOf("darkmode") != -1){
            document.all[i].className = document.all[i].className.replace("darkmode","lightmode")
        }else if ((document.all[i].className).indexOf("lightmode") != -1){
            document.all[i].className = document.all[i].className.replace("lightmode","darkmode")
        }else{
            document.all[i].classList.add("lightmode")
        }
    }
    if ((document.body.className).indexOf("darkmode") != -1){
        document.body.style.backgroundColor = "white"
    }else if ((document.body.className).indexOf("lightmode") != -1){
        document.body.style.backgroundColor = "black"
    }else{
        document.body.classList.add("lightmode")
    }
}
function separate(num){
    num = String(num);
    var len = num.length;
    if (len > 20){
        return separate(num.substring(0,len-20))+'<br>'+num.substring(len-20);
    }else{
        return num;
    }
}
const config = {
    apiKey: "AIzaSyDZsD6Lspm6PJ9VvCd3ReJe5T6ex36nRc8",
    authDomain: "speed-pi-database.firebaseapp.com",
    databaseURL: "https://speed-pi-database-default-rtdb.firebaseio.com",
    projectId: "speed-pi-database",
    storageBucket: "speed-pi-database.appspot.com",
    messagingSenderId: "744730019739",
    appId: "1:744730019739:web:88c0a38a65c3badbff033e",
    measurementId: "G-H0PVNZSRXX"
};
firebase.initializeApp(config);
var rank = firebase.database().ref().child("rank").child("endress").child("endress").child("pi")
function upload(){
    rank.push({name:document.getElementById("your_name").value,score:score,time:new Date().toUTCString(),timer:time})
    start_bool = false
    document.getElementById("button-start").style.display = "inline"
    document.getElementById("question").innerHTML = ""
}
document.getElementById("pis").innerHTML = separate(pi)