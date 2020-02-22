$(document).ready(function(){ 
   $('.questao2').hide();
   $('.questao3').hide();
   $('.questao4').hide();
   $('.questao5').hide();
   $('.questao6').hide();
   $('.questao7').hide();
   $('.questao8').hide();
   $('.questao9').hide();
   $('.questao10').hide();
   $('#enviar').hide();
   $('#proxima').hide();
   $('#voltar').hide();
   $('#numQuestao').html('<h3>Questões: 1/10</h3>');
   
    
    var modal = document.getElementById('modal-inicio');
    modal.style.display = "block";
    
    var btn = document.getElementById("fechar");
    btn.onclick= function(event){
        modal.style.display = "none";
    }
    
// window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}
});

function mostrar(){
    $('#proxima').show();
    
}

function questao10(){
    $('#enviar').show();
}

function proxima(){    
    
    
    var numQuestao = 1;
    
    
    
    var prox1= document.getElementsByName('quest1');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        
        $('.questao1').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: ' +numQuestao + '/10</h3>');
        $('.questao2').show();
    }
    
    var prox1= document.getElementsByName('quest2');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao2').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+ numQuestao + '/10</h3>');
        $('.questao3').show();
    }

    var prox1= document.getElementsByName('quest3');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao3').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+numQuestao + '/10</h3>');
        $('.questao4').show();
    }
    
    var prox1= document.getElementsByName('quest4');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao4').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3> Questões: '+numQuestao+'/10</h3>');
        $('.questao5').show();
    }
    
    var prox1= document.getElementsByName('quest5');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao5').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+numQuestao + '/10</h3>');
        $('.questao6').show();
    }
    
    var prox1= document.getElementsByName('quest6');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao6').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+numQuestao + '/10</h3>');
        $('.questao7').show();
    }
    
    var prox1= document.getElementsByName('quest7');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao7').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+numQuestao + '/10</h3>');
        $('.questao8').show();
    }
    
    var prox1= document.getElementsByName('quest8');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao8').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+numQuestao + '/10</h3>');
        $('.questao9').show();
    }
    
    var prox1= document.getElementsByName('quest9');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        //alert(aux1);
        $('.questao9').hide();
        $('#proxima').hide();
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+numQuestao + '/10</h3>');
        $('.questao10').show();
        //alert(aux1);
    }
    
    var prox1= document.getElementsByName('quest10');
    var aux1=0;
      for(var i=0; i<=3;i++){
          if(prox1[i].checked){
              aux1= prox1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    if(aux1 == 0){
        //alert('responda');
    }else{
        numQuestao++;
        $('#numQuestao').html('<h3>Questões: '+ numQuestao +'/10</h3>');
        //alert(aux1);
    }
}


function enviar() {
        //declaracao de variaveis
        //alert('clicou=');
    
    //$('#modal').show();
    
    var modal = document.getElementById('modal');
        modal.style.display = "block";

    
     var quest1= document.getElementsByName('quest1');
     var quest2= document.getElementsByName('quest2');
     var quest3= document.getElementsByName('quest3');
     var quest4= document.getElementsByName('quest4');
     var quest5= document.getElementsByName('quest5');
     var quest6= document.getElementsByName('quest6');
     var quest7= document.getElementsByName('quest7');
     var quest8= document.getElementsByName('quest8');
     var quest9= document.getElementsByName('quest9');
     var quest10= document.getElementsByName('quest10');
    
     var val1 = 0;
     var val2 = 0;
     var val3 = 0;
     var val4 = 0;
     var val5 = 0;
     var val6 = 0;
     var val7 = 0;
     var val8 = 0;
     var val9 = 0;
     var val10 = 0;
    
       
    //verificacao de check radio
    
        
      for(var i=0; i<=3;i++){
          if(quest1[i].checked){
              val1= quest1[i].value;
              //alert('1');
              //alert(val1);       
          }
      } 
    
    for(var i=0;i<=3;i++){
        if(quest2[i].checked){
              var val2= quest2[i].value;
              //alert('1');
              //alert(val2);
          }
    }
        
    for(var i=0 ;i<=3;i++){
          if(quest3[i].checked){
              var val3= quest3[i].value;
              //alert('1');
              //alert(val3);
              
          }
    }
          
     for(var i=0 ;i<=3;i++){
        if(quest4[i].checked){
              var val4= quest4[i].value;
              //alert('1');
              //alert(val4);
          }
     }
          
    for(var i=0 ;i<=3;i++){
          if(quest5[i].checked){
              var val5= quest5[i].value;
              //alert('1');
              //alert(val5);
              
          }
    }
    
    for(var i=0 ;i<=3;i++){     
          if(quest6[i].checked){
              var val6= quest6[i].value;
              //alert('1');
              //alert(val6); 
          }
    }
          
    for(var i=0 ;i<=3;i++){
          if(quest7[i].checked){
              var val7= quest7[i].value;
              //alert('1');
              //alert(val7);
              
          }
    }
    
    for(var i=0 ;i<=3;i++){
          if(quest8[i].checked){
              var val8= quest8[i].value;
              //alert('1');
              //alert(val8);         
          }
    }
    
    for(var i=0 ;i<=3;i++){
          if(quest9[i].checked){
              var val9= quest9[i].value;
              //alert('1');
              //alert(val9);
          }
    }
    
        for(var i=0 ;i<=3;i++){
          if(quest10[i].checked){
              var val10= quest10[i].value;
              //alert('1');
              //alert(val10);
          }
    }


if(val1 == 0){
    alert('Preencha a primeria pergunta');
    return;
}else if(val2 == 0){
    alert('Preencha a segunda pergunta');
    return;
}else if(val3 == 0){
    alert('Preencha a terceira pergunta');
    return;
}else if(val4 == 0){
    alert('Preencha a quarta pergunta');
    return;
}else if(val5 == 0){
    alert('Preencha a quinta pergunta');
    return;
}else if(val6 == 0){
    alert('Preencha a sexta pergunta');
    return;
}else if(val7 == 0){
    alert('Preencha a setima pergunta');
    return;
}else if(val8 == 0){
    alert('Preencha a oitava pergunta');
    return;
}else if(val9 == 0){
    alert('Preencha a nona pergunta');
    return;
}else if(val10 == 0){
    alert('Preencha a décima pergunta');
    return;
}else{
    
        $.ajax({
        url:'car.php',
        method:'POST',
        data:{
            val1:val1,
            val2:val2,
            val3:val3,
            val4:val4,
            val5:val5,
            val6:val6,
            val7:val7,
            val8:val8,
            val9:val9,
            val10:val10
        },
        success:function(data){
            //alert('bla');
            //$('#container').hide();
            $('#carregar').html(data);
            $('#voltar').show();
            
        } 
    });
   
}

}