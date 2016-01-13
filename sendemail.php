<?php
$name       =stripslashes($_POST["name"]); 
$from       = stripslashes($_POST["email"]); 
$subject    = stripslashes($_POST["subject"]); 
$message    = stripslashes($_POST["message"]); 
$to   		= 'admin@alphanetbroadband.com';//replace with your email

$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "From: {$name} <{$from}>";
$headers[] = "Reply-To: <{$from}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();

mail($to, $subject, $message,  implode("\r\n", $headers) );

die;