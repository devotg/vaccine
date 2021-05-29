

function copyToClipboard(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
function search23(){
var pin=document.getElementById("getpin").value;
var date=document.getElementById("getdate").value;
document.getElementById("demo").innerHTML ="";
document.getElementById("thelik").innerHTML="http://mastertech.fast-page.org/myfiles/vaccine-realtime.html?pin-"+pin+"&date-"+date;

/*getting pin and date from url*/
    $.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+pin+"&date="+date, function(data, status){
    
var no=-1;
    setInterval(function(){
  no=no+1;
  if(data.centers[no].sessions[0].available_capacity_dose1>0){
      var reply24='&nbsp;&nbsp;&nbsp;<span class="availabi21">Available</span>';
  }else{
      var reply24='&nbsp;&nbsp;&nbsp;<span class="notav32">Not Available</span>';
  }

  if(data.centers[no].sessions[0].available_capacity_dose2>0){
      var reply214='&nbsp;&nbsp;&nbsp;<span class="availabi21">Available</span>';
  }else{
      var reply214='&nbsp;&nbsp;&nbsp;<span class="notav32">Not Available</span>';
  }


      document.getElementById("demo").innerHTML =document.getElementById("demo").innerHTML+"<h3>"+(no+1)+")</h3> "+"Name: " + data.centers[no].name + "<br> Address:" +  data.centers[no].address + "<br>  Fee Type: " +  data.centers[no].fee_type + "<br>   Minimum Age Limit: " +  data.centers[no].sessions[0].min_age_limit+"<br>   Available Capacity: " +  data.centers[no].sessions[0].available_capacity+"<br>  Vaccine: " +  data.centers[no].sessions[0].vaccine +"<br>  Slots: " +  data.centers[no].sessions[0].slots +"<br><b>Dose 1 Availability== " +  data.centers[no].sessions[0].available_capacity_dose1  +"</b>"+reply24+"<br>"+"<b>Dose 2 Availability== " +  data.centers[no].sessions[0].available_capacity_dose2  +"</b>"+reply214+"<br>";
      }, 1);
      
    });
 
}






/*getting pin and date from url*/
var linkpo=window.location.href;
pin= linkpo.slice(66, 72);
date= linkpo.slice(78, 88);
document.getElementById("getdate").value=date;
document.getElementById("getpin").value=pin;
    $.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+pin+"&date="+date, function(data, status){
    
var no=-1;
    setInterval(function(){
  no=no+1;
  if(data.centers[no].sessions[0].available_capacity_dose1>0){
      var reply24='&nbsp;&nbsp;&nbsp;<span class="availabi21">Available</span>';
  }else{
      var reply24='&nbsp;&nbsp;&nbsp;<span class="notav32">Not Available</span>';
  }

  if(data.centers[no].sessions[0].available_capacity_dose2>0){
      var reply214='&nbsp;&nbsp;&nbsp;<span class="availabi21">Available</span>';
  }else{
      var reply214='&nbsp;&nbsp;&nbsp;<span class="notav32">Not Available</span>';
  }


      document.getElementById("demo").innerHTML =document.getElementById("demo").innerHTML+"<h3>"+(no+1)+")</h3> "+"Name: " + data.centers[no].name + "<br> Address:" +  data.centers[no].address + "<br>  Fee Type: " +  data.centers[no].fee_type + "<br>   Minimum Age Limit: " +  data.centers[no].sessions[0].min_age_limit+"<br>   Available Capacity: " +  data.centers[no].sessions[0].available_capacity+"<br>  Vaccine: " +  data.centers[no].sessions[0].vaccine +"<br>  Slots: " +  data.centers[no].sessions[0].slots +"<br><b>Dose 1 Availability== " +  data.centers[no].sessions[0].available_capacity_dose1  +"</b>"+reply24+"<br>"+"<b>Dose 2 Availability== " +  data.centers[no].sessions[0].available_capacity_dose2  +"</b>"+reply214+"<br>";
      }, 1);
      
    });
 

 document.getElementById("thelik").innerHTML=window.location.href;
