  function submit1(){
    var a =  document.getElementById("fnum").value;
    var b =  document.getElementById("lnum").value;
    var c = parseInt(a) + parseInt(b); 
    document.getElementById("ans1").innerHTML=c;
  }
