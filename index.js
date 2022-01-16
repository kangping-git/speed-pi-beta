let dialog_opened = false;
window.open_dialog = (dialog_name) => {
    if (dialog_opened){
        throw new Error("dialog is opened")
    }else{
        if (document.querySelector(".dialog[data-name=" + dialog_name + "]")){
            document.querySelector(".dialog[data-name=" + dialog_name + "]").classList.add("on")
            document.querySelector(".mask").classList.add("on")
            dialog_opened = true
        }else{
            throw new Error("dialog '" + dialog_name + "' is not defined")
        }
    }
}
window.close_dialog = (dialog_name) => {
    if (!dialog_opened){
        throw new Error("dialog is not opened")
    }else{
        if (document.querySelector(".dialog[data-name=" + dialog_name + "]")){
            document.querySelector(".dialog[data-name=" + dialog_name + "]").classList.remove("on")
            document.querySelector(".mask").classList.remove("on")
            dialog_opened = false
        }else{
            throw new Error("dialog '" + dialog_name + "' is not defined")
        }
    }
}
document.onkeydown = (e) => {
    onkey(e.key)
}
function play_kata(){
    new Audio("data:audio/mp3;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7sGwAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV").play()
}
var count_10 = firebase.database().ref().child('count/10')
var count_100 = firebase.database().ref().child('count/100')
var count_1000 = firebase.database().ref().child('count/1000')
var count_10000 = firebase.database().ref().child('count/10000')
var endress = firebase.database().ref().child('endress')
var on_up = false
var keys = [0,1,2,3,4,5,6,7,8,9]
var aaaaaa = ["&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","&ensp;","3","."]
function onkey(key_name){
    if (keys.includes(Number(key_name))){
        if (document.getElementById("sound").checked == true){
            play_kata()
        }
    }
    if (start == false && document.getElementById("speed-start").checked == true){
        if (dialog_opened != true){
            score = 0
            start_time = new Date()
            start = true
            aaaaaa = [makeRepeated(["&ensp;"],15),pi_data.start].flat().slice(-15)
            document.getElementById("score").innerText = "No.1"
        }
    }
    if (start == true){
        if (keys.includes(Number(key_name))){
            if (key_name == pi_data.main[score]){
                document.getElementById("score").innerText = "No." + (score + 2)
                aaaaaa.push(key_name)
                aaaaaa.shift()
            }else{
                if (document.getElementById("content").value == "count"){
                    document.getElementById("score").innerText = ""
                    window.time = new Date() - start_time
                    start = "nulla"
                    document.getElementById("timer").innerText = ("00" + Math.floor((time) / (60*1000))).slice(-2) + ":" + ("00" + Math.floor((time) / 1000) % 60).slice(-2) + "." + ("000" + Math.floor((time) / 1) % 1000).slice(-3)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML = "failed!"
                    })
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br>time:" + time / 1000 + "s"
                    },500)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br>type:Speedpi Counts" + document.getElementById("count-setting").value
                    },1000)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br>score:" + (score - 1)
                        start = null
                    },1500)
                }else{
                    document.getElementById("score").innerText = ""
                    window.time = new Date() - start_time
                    start = "nulla"
                    var s = new Date().getTime()
                    finish_time = new Date()
                    document.getElementById("timer").innerText = ("00" + Math.floor((time) / (60*1000))).slice(-2) + ":" + ("00" + Math.floor((time) / 1000) % 60).slice(-2) + "." + ("000" + Math.floor((time) / 1) % 1000).slice(-3)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML = "<br>time:" + time / 1000 + "s"
                    })
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br>score:" + score
                    },500)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br><a class='button' onclick='submit_data()'>Submit</a>"
                        start = null
                    },1000)
                }
            }
            score += 1
            if (document.getElementById("content").value == "count"){
                if (document.getElementById("count-setting").value == score){
                    document.getElementById("score").innerText = ""
                    window.time = new Date() - start_time
                    start = "nulla"
                    finish_time = new Date().toUTCString()
                    document.getElementById("timer").innerText = ("00" + Math.floor((time) / (60*1000))).slice(-2) + ":" + ("00" + Math.floor((time) / 1000) % 60).slice(-2) + "." + ("000" + Math.floor((time) / 1) % 1000).slice(-3)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML = "complete!"
                    })
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML = "<br>time:" + time / 1000 + "s"
                    },500)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br>type:Speedpi Counts" + score
                    },1000)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br><a class='button' onclick='submit_data()'>Submit</a>"
                        start = null
                    },1500)
                }
            }else{
                if (10000 == score){
                    document.getElementById("score").innerText = ""
                    window.time = new Date() - start_time
                    start = "nulla"
                    finish_time = new Date()
                    document.getElementById("timer").innerText = ("00" + Math.floor((time) / (60*1000))).slice(-2) + ":" + ("00" + Math.floor((time) / 1000) % 60).slice(-2) + "." + ("000" + Math.floor((time) / 1) % 1000).slice(-3)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML = "<br>time:" + time / 1000 + "s"
                    })
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br>score:" + score
                    },500)
                    setTimeout(() => {
                        document.getElementById("datassss").innerHTML += "<br><a class='button' onclick='submit_data()'>Submit</a>"
                        start = null
                    },1000)
                }
            }
        }
    }else if (start == null){
        start = false
        document.getElementById("datassss").innerHTML = ""
        document.getElementById("score").innerText = "No.1"
        document.getElementById("timer").innerText = "00:00.000"
        aaaaaa = [makeRepeated(["&ensp;"],15),pi_data.start].flat().slice(-15)
        document.getElementById("score").innerText = ""
    }else if (start == false && document.getElementById("speed-start").checked == false){
        score = 0
        start_time = new Date()
        start = true
        aaaaaa = [makeRepeated(["&ensp;"],15),pi_data.start].flat().slice(-15)
        document.getElementById("score").innerText = "No.1"
    }
    document.getElementById("pi").innerHTML = aaaaaa.join("")
}
var aaa = document.getElementsByClassName("button key")
for (var i = 0;i<aaa.length;++i){
    aaa[i].addEventListener("click",(e) => {
        onkey(e.target.innerText)
    })
}
const makeRepeated = (arr, repeats) =>
  Array.from({ length: repeats }, () => arr).flat();
var start = false
var start_time = new Date()
var load = true
var pi_data = null
function load_file(aaa){
    load = true
    fetch("./" + aaa + ".json")
    .then(res => res.json())
    .then(data => {
        load = false
        pi_data = data
        aaaaaa = [makeRepeated(["&ensp;"],15),data.start].flat().slice(-15)
        document.getElementById("pi").innerHTML = aaaaaa.join("")
    })
}
const canvas = document.getElementById('loader');
canvas.style.width = "200px"
canvas.style.height = "200px"
var circles = []
var type = 0
var score = 0
var on_upa = false
window.onmousedown = function(e){
    on_upa = true
}
window.onmouseup = function(e){
    on_upa = false
}
load_file("pi")
for (var i = 0;i < 360;i += 30){
    circles.push(i)
}
const ctx = canvas.getContext('2d');
timer()
function submit_data(){
    if (firebase.auth().currentUser == null){
        firebase.auth().signInWithEmailAndPassword("noreply@speed-pi-database.firebaseapp.com","0123456789abcdefghijklmnopqrstuvwxyz")
        .then(() => {
            if (document.getElementById("content").value == "count"){
                window["count_" + document.getElementById("count-setting").value].push({
                    time:time,
                    name:document.getElementById("name").value,
                    date:finish_time
                })
            }else[
                endress.push({
                    time:time,
                    name:document.getElementById("name").value,
                    date:finish_time,
                    score:score
                })
            ]
            onkey(1)
        })
    }else{
        if (document.getElementById("content").value == "count"){
            window["count_" + document.getElementById("count-setting").value].push({
                time:time,
                name:document.getElementById("name").value,
                date:finish_time
            })
        }else[
            endress.push({
                time:time,
                name:document.getElementById("name").value,
                date:finish_time,
                score:score
            })
        ]
        onkey(1)
    }
}
var finish_time = null
if (localStorage.getItem("sound") != undefined){
    document.getElementById("sound").checked = localStorage.getItem("sound") == "true" ? true : false
    document.getElementById("speed-start").checked = localStorage.getItem("speed_start") == "true" ? true : false
    document.getElementById("hidden_timer").checked = localStorage.getItem("hidden_timer") == "true" ? true : false
    document.getElementById("key_style").value = localStorage.getItem("key_style")
    document.getElementById("content").value = localStorage.getItem("content")
    document.getElementById("count-setting").value = localStorage.getItem("count-setting")
    document.getElementById("name").value = localStorage.getItem("name")
}
function timer(){
    requestAnimationFrame(timer)
    if (document.getElementById("content").value == "count"){
        document.getElementById("count-s").style.display = ""
    }else{
        document.getElementById("count-s").style.display = "none"
    }
    if (load == true){
        canvas.width = 200 * window.devicePixelRatio
        canvas.height = 200 * window.devicePixelRatio
        document.getElementById("load").style.display = ""
        document.getElementById("main").style.display = "none"
        ctx.fillStyle = "#131313"
        ctx.fillRect(0,0,200 * window.devicePixelRatio,200 * window.devicePixelRatio)
        ctx.fill();
        ctx.fillStyle = "#ffffff"
        for (var i in circles){
            ctx.beginPath()
            ctx.arc((Math.sin(circles[i] * Math.PI/180) * 80 + 100) * window.devicePixelRatio,(Math.cos(circles[i] * Math.PI/180) * 80 + 100) * window.devicePixelRatio,5 * window.devicePixelRatio,0,Math.PI * 2)
            ctx.fill();
            circles[i] += (((360 - Math.abs(circles[i]-180))/90) ** 2 + 0.05)/2
            circles[i] %= 360
        }
    }else{
        document.getElementById("load").style.display = "none"
        document.getElementById("main").style.display = ""
        if (start == true){
            document.getElementById("timer").innerText = ("00" + Math.floor((new Date() - start_time) / (60*1000))).slice(-2) + ":" + ("00" + Math.floor((new Date() - start_time) / 1000) % 60).slice(-2) + "." + ("000" + Math.floor((new Date() - start_time) / 1) % 1000).slice(-3)
            if (document.getElementById("hidden_timer").checked == true){
                document.getElementById("timer").style.visibility = "hidden"
            }else{
                document.getElementById("timer").style.visibility = ""
            }
            document.getElementById("setting_button").style.display = "none"
        }else{
            document.getElementById("timer").style.visibility = ""
            document.getElementById("setting_button").style.display = start == null || start == "nulla" ? "none" : ""
        }
    }
}
function update_setting(){
    localStorage.setItem("sound",document.getElementById("sound").checked)
    localStorage.setItem("speed_start",document.getElementById("speed-start").checked)
    localStorage.setItem("hidden_timer",document.getElementById("hidden_timer").checked)
    localStorage.setItem("key_style",document.getElementById("key_style").value)
    localStorage.setItem("content",document.getElementById("content").value)
    localStorage.setItem("count-setting",document.getElementById("count-setting").value)
    localStorage.setItem("name",document.getElementById("name").value)
}











































// https://www.youtube.com/watch?v=2M2tAjxFm0I&list=RDCMUCU0KURiKTupBYVCK8rgG7Rw&index=2
