function element(x){
    return document.getElementById(x);
}
initialS = element("initialS");
initialf = element("initialf");
urate = element("urate");
drate = element("drate");
document.getElementById("buttontd").onclick=function(){
    values = []
    if(initialS.value==""){
       alert("oi");
    }else if(initialf.value==""){
       alert("oi");
    }else if(urate.value==""){
       alert("oi");
    }else if(drate.value==""){
       alert("oi");
    }else if(parseFloat(urate.value)<1){
        alert("oi");
    }
    else{
        values.push(parseFloat(initialS.value),parseFloat(initialf.value),parseFloat(urate.value),parseFloat(drate.value));
        element("S11").innerHTML = parseFloat((values[0]).toFixed(8));
        element("f11").innerHTML = parseFloat((values[1]).toFixed(8));
        element("S21").innerHTML = parseFloat((values[0]*values[2]).toFixed(8));
        element("f21").innerHTML = parseFloat((values[1]*values[2]).toFixed(8));
        element("S22").innerHTML = parseFloat((values[0]*values[3]).toFixed(8));
        element("f22").innerHTML = parseFloat((values[1]*values[3]).toFixed(8));
        element("S31").innerHTML = parseFloat((values[0]*values[2]*values[2]).toFixed(8));
        element("f31").innerHTML = parseFloat((values[1]*values[2]*values[2]).toFixed(8));
        element("S32").innerHTML = parseFloat((values[0]*values[3]*values[2]).toFixed(8));
        element("f32").innerHTML = parseFloat((values[1]*values[3]*values[2]).toFixed(8));
        element("S33").innerHTML = parseFloat((values[0]*values[3]*values[3]).toFixed(8));
        element("f33").innerHTML = parseFloat((values[1]*values[3]*values[3]).toFixed(8));
        element("S41").innerHTML = parseFloat((values[0]*values[2]*values[2]*values[2]).toFixed(8));
        element("f41").innerHTML = parseFloat((values[1]*values[2]*values[2]*values[2]).toFixed(8));
        element("S42").innerHTML = parseFloat((values[0]*values[3]*values[2]*values[2]).toFixed(8));
        element("f42").innerHTML = parseFloat((values[1]*values[3]*values[2]*values[2]).toFixed(8));
        element("S43").innerHTML = parseFloat((values[0]*values[3]*values[3]*values[2]).toFixed(8));
        element("f43").innerHTML = parseFloat((values[1]*values[3]*values[3]*values[2]).toFixed(8));
        element("S44").innerHTML = parseFloat((values[0]*values[3]*values[3]*values[3]).toFixed(8));
        element("f44").innerHTML = parseFloat((values[1]*values[3]*values[3]*values[3]).toFixed(8));
        element("S51").innerHTML = parseFloat((values[0]*values[2]*values[2]*values[2]*values[2]).toFixed(8));
        element("f51").innerHTML = parseFloat((values[1]*values[2]*values[2]*values[2]*values[2]).toFixed(8));
        element("S52").innerHTML = parseFloat((values[0]*values[3]*values[2]*values[2]*values[2]).toFixed(8));
        element("f52").innerHTML = parseFloat((values[1]*values[3]*values[2]*values[2]*values[2]).toFixed(8));
        element("S53").innerHTML = parseFloat((values[0]*values[3]*values[3]*values[2]*values[2]).toFixed(8));
        element("f53").innerHTML = parseFloat((values[1]*values[3]*values[3]*values[2]*values[2]).toFixed(8));
        element("S54").innerHTML = parseFloat((values[0]*values[3]*values[3]*values[3]*values[2]).toFixed(8));
        element("f54").innerHTML = parseFloat((values[1]*values[3]*values[3]*values[3]*values[2]).toFixed(8));
        element("S55").innerHTML = parseFloat((values[0]*values[3]*values[3]*values[3]*values[3]).toFixed(8));
        element("f55").innerHTML = parseFloat((values[1]*values[3]*values[3]*values[3]*values[3]).toFixed(8));
    }
}