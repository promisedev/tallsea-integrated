<?php 
$name = $_POST["fullname"];
$email = $_POST["email"];
$msg = $_POST["message"];

// echo $name;
// echo $email;
// echo $msg;
if(empty($name && $email && $msg))
{
    header("location: contact.php?error=please fill in the form");
} else{


$to = "info@tallseaintegrated.com";
$subject = "Enquiry";

$message = "
<html>
<head>
<title>Tallsea Integrateed Services </title>
</head>
<body>

<div style='width:40%; height:50px; 
 margin-top: 5%; margin-left:5%; padding: 9px 0px 0px 10px; 
 color:rgb(0,0,0); font-family:calibri, arial;
 font-size:19px; border-radius:9px; margin-bottom:5%;'>

<div>Name: $name</div>
</br>
<div>Email: $email</div>
</div>
<div style='width:40%; height:auto; background:rgb(242,248,250);
 margin-top: 5%; margin-left:5%; padding: 9px 0px 0px 10px; 
 color:rgb(128,116,5); font-family:calibri, arial;
 font-size:19px; border-radius:9px; margin-bottom:5%;'>

<div>Message: $msg</div>

</div>



</body>
</html>
";
echo $message;
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From:  $email  " . "\r\n";

mail($to,$subject,$message,$headers);

header("location: contact.php?status=message sent successfully");
}
?>