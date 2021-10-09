function popup(id){
    document.getElementById("fixed").style.backgroundColor = "rgba(0, 0, 0, 0.3)"
    document.getElementById("fixed").style.width = "100%"
    document.getElementById("fixed").style.height = "100%"
    document.getElementById(id).style.display = "block"
}
new Audio("./Ok.mp3")
new Audio("./No.mp3")
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
        if (mode == "1"){
            document.getElementById("timer").innerText = "No." + (score + 1)
        }else{
            if (count == 0){
                document.getElementById("timer").innerText = time_for_string(new Date() - start_time) + "\nNo." + (answer + 1) + "\nscore:" + score
            }else{
                document.getElementById("timer").innerText = time_for_string(new Date() - start_time) + "\nNo." + (answer + 1) + "\nscore:" + score
            }
        }
    }else if (start_bool == null){
        if (mode == "1"){
            document.getElementById("timer").innerText = "score:" + (score)
        }else{
            document.getElementById("timer").innerText = time_for_string(time) + "\nscore:" + score
        }
    }else{
        if (get_radio("tekitou") == "2"){
            document.getElementById("timer").innerText = "00:00.000"
        }else{
            document.getElementById("timer").innerText = "No.1"
        }
    }
})
var time_for_string = function (time){
    return ("00" + Math.floor(time / (60*1000))).slice(-2) + ":" + ("00" + (Math.floor(time / 1000) % 60)).slice(-2) + "." + ("000" + (time % 1000)).slice(-3)
}
var answers = []
var time = new Date()
var temp = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","3","."]
document.addEventListener("keydown",(e) => {
    if (["0","1","2","3","4","5","6","7","8","9"].includes(e.key)){
        key_press(e.key)
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
    temp = ["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","3","."]
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