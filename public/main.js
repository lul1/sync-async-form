
$(document).ready(function(){
    $('input[type="submit"]').on("click",function(event){
        event.preventDefault();

        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var femenino = $('#femenino').val();
        var masculino = $('#masculino').val();











        $.get('find.html',{'first_name':first_name});
        $.post('find.html',{'first_name':first_name});
        $.get('find.html',{'last_name':last_name});
        $.post('find.html',{'last_name':last_name});
        $.get('find.html',{'femenino':femenino});
        $.post('find.html',{'femenino':femenino});
        $.get('find.html',{'masculino':,masculino});
        $.post('find.html',{'masculino':masculino});





    });
});


/*  console.log("Hiciste click!", $('#first_name').val());
  console.log("Hiciste click!", $('#last_name').val());
  console.log("Hiciste click!", $('input[name="gender"]:checked').val());
  console.log("Hiciste click!", $('input[name="interests"]:checked').val());*/
/*var first_name = $('input[name="first_name"]').val();

String RdioValues= request.getParameter("gender");
String checkboxValues = request.getParameter("Intereses");

console.log(first_name);
event.preventDefault();*/
/*$.ajax('find.html', {
  method: 'post',
  data: {
    'first_name': first_name
  }
});*/
