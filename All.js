var El={
    get:document.getElementById("Enter"),
    Lower:document.getElementById("Lower"),
    Upper:document.getElementById("Upper"),
    Rep:document.getElementById("Replace"),
    Spl:document.getElementById("Split"),
    Sli:document.getElementById("Slice"),
    BoxLower:document.getElementById("BoxLower"),
    BoxUpper:document.getElementById("BoxUpper"),
    BoxRe:document.getElementById("BoxRe"),
    BoxSp:document.getElementById("BoxSp"),
    BoxSl:document.getElementById("BoxSl")

}
//-------Function------
function Low(){
    var a=Number(El.get.value);
    if(isNaN(a)==true){
        var z=El.get.value.toLowerCase();
        El.BoxLower.innerHTML=z;
    }
    else if(a!=NaN || a==""){
        alert("Number OR Empty")
    }

}
function Upp(){
    var a=Number(El.get.value);
    if(isNaN(a)==true){
        var z=El.get.value.toUpperCase();
        El.BoxUpper.innerHTML=z;
    }
    else if(a!=NaN || a==""){
        alert("Number OR Empty")
    }
}
function Rep(){
    var a=Number(El.get.value);
    if(isNaN(a)==true){
       var e= prompt("what is it for chage?");
       El.BoxRe.innerHTML=e;
      
    }
    else if(a!=NaN){
        alert("Number OR Empty")
    }
}
function Sp(){
    var a=Number(El.get.value);
    if(isNaN(a)==true){
     El.BoxSp.innerHTML=El.get.value.split("");
    }
    else if(a!=NaN){
        alert("Number OR Empty")
    }
}
function Sl(){
    var a=Number(El.get.value);
    if(isNaN(a)==true){
        var x=prompt("Strat");
        var y=prompt("finsh");
  El.BoxSl.innerHTML=El.get.value.slice(x,y)
    }
    else if(a!=NaN){
        alert("Number OR Empty")
    }
}
//-----Finish ---Fun------
El.Lower.onclick=Low;
El.Upper.onclick=Upp;
El.Rep.onclick=Rep;
El.Spl.onclick=Sp;
El.Sli.onclick=Sl;