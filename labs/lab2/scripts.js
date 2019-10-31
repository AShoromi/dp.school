function func(){
    var likeBut = document.getElementsByClassName("like");
    var dislikeBut = document.getElementsByClassName("dislike");
    var countet1 = 0;
    var uncount = 0;
    if(document.onclick == likeBut){
        counter1 += 1;
        document.getElementById("count").innerHTML +=  '<p>';
        document.getElementById("count").innerHTML += countet1;
        document.getElementById("count").innerHTML += '</p>';
    }
    if(document.onclick = dislikeBut){
        uncount--;
        document.getElementById("count").innerHTML = uncount;
    }
}
if(document.getElementById("mo").value == "mo")
    alert("This is a test site");
