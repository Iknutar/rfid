let knapp = document.getElementById("knapp");
knapp.addEventListener("click", knapptryk);
function knapptryk(){
    console.log("Knappen fungerar!" +" "+ $("#knapp").attr("rfid"));  
    
    let url = "https://localhost:3000/tag/" + $("#knapp").attr("rfid")

    $.getJSON(url,function(result){
        var data = JSON.parse(this.response)
        for(let i = 0; i < jsondata.length; i++){
            console.log(i + " " + jsondata[i].id+" " + jsondata[i].rfid);
            html += "<div>" + jsondata[i].id + "</div><div>" + jsondata[i].datum + "</div>"

            var string = "<table>"
            string += "<tr><td>" + jsondata[i] + "</td><td>" + jsondata[i] + "</td></tr>"

            string += "</table>"
            document.getElementById("demo").innerHTML = string;
        }
        console.log(result)

    });
    console.log("slut")
}

let knp1 = document.getElementById("knapp1");
knp1.addEventListener("click", adda);
function adda() {
    console.log("Funkkar" +" "+ $("#knapp1").attr("rfid"));      
}

let knp2 = document.getElementById("knapp2");
knp2.addEventListener("click", adda1);
function adda1() {
    console.log("Funkkar" +" "+ $("#knapp2").attr("rfid"));    
}