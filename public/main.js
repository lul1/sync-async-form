
$(document).ready(function(){
    $('input[type="submit"]').on("click",function(event){
        event.preventDefault();

        var first_name = $('#first_name').val();

        $.get('find.html',{'first_name':first_name});
        $.post('find.html',{'first_name':first_name});


    });
});
/*  console.log("Hiciste click!", $('#first_name').val());
  console.log("Hiciste click!", $('#last_name').val());
  console.log("Hiciste click!", $('input[name="gender"]:checked').val());
  console.log("Hiciste click!", $('input[name="interests"]:checked').val());*/
/*var first_name = $('input[name="first_name"]').val();

console.log(first_name);
event.preventDefault();*/
/*$.ajax('find.html', {
  method: 'post',
  data: {
    'first_name': first_name
  }
});*/
