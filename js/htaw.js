function load_js() {
   alert("Inside load_js function");
}

function saveData() {
   var xmlhttp;
   if(window.XMLHttpRequest) {
      xmlhttp=new XMLHttpRequest();
   } else {
      xmlhttp=new ActiveXobject("Microsoft.XMLHTTP");
   }

   document.getElementById('displayArea').innerHTML='Test message';
   var d = document.getElementById('db_name').value;
   var q = "?d=" + d;

   xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4) {
         document.getElementById("displayArea").innerHTML=xmlhttp.responseText;
      }
   }
   
   //xmlhttp.open("GET", "wp-content/themes/twentynineteen/js/saveData.php",true);
   xmlhttp.open("GET", "saveData.php"+q,true);
   xmlhttp.send(null);
}
