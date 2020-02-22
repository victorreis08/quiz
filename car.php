<?php

$Errado="Resposta errada";
$certo=0;
$erro=0;




if($_POST['val1'] == 'C'){
    //echo'<p>1.Resposta certa: '.$_POST['val1'].'</p>';
    $certo++;
}else{
    //echo'<p>1.'.$Errado.'</p>';
    $erro++;
}

if($_POST['val2'] == 'A'){
    //echo'<p>2.Resposta certa: '.$_POST['val2'].'</p>';
    $certo++;
}else{
    //echo'<p>2.'.$Errado.'</p>';
    $erro++;
}

if($_POST['val3'] == 'D'){
    //echo'<p>3.Resposta certa: '.$_POST['val3'].'</p>';
    $certo++;
}else{
    //echo'<p>3.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val4'] == 'B'){
    //echo'<p>4.Resposta certa: '.$_POST['val4'].'</p>';
    $certo++;
}else{
    //echo'<p>4.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val5'] == 'C'){
    //echo'<p>5.Resposta certa: '.$_POST['val5'].'</p>';
    $certo++;
}else{
    //echo'<p>5.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val6'] == 'D'){
    //echo'<p>6.Resposta certa: '.$_POST['val6'].'</p>';
    $certo++;
}else{
    //echo'<p>6.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val7'] == 'A'){
    //echo'<p>7.Resposta certa: '.$_POST['val7'].'</p>';
    $certo++;
}else{
    //echo'<p>7.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val8'] == 'B'){
    //echo'<p>8.Resposta certa: '.$_POST['val8'].'</p>';
    $certo++;
}else{
    //echo'<p>8.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val9'] == 'D'){
    //echo'<p>9.Resposta certa: '.$_POST['val9'].'</p>';
    $certo++;
}else{
    //echo'<p>9.'.$Errado.'</p>';
    $erro++;
}
if($_POST['val10'] == 'C'){
    //echo'<p>10.Resposta certa: '.$_POST['val10'].'</p>';
    $certo++;
}else{
    //echo'<p>10.'.$Errado.'</p>';
    $erro++;
}

echo'<h3>Respostas certas: '.$certo.'</h3>';
echo'<h3>Respostas erradas: '.$erro.'</h3>';



?>