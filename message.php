<?php

$name = $_POST['name1'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];


if(!empty($email) && !empty($message)){
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $receiver = "codingnepalweb@gmail.com";
    $subject = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
    $sender = "From: $email";
    if(mail($receiver, $subject, $body, $sender)){
      echo "Your message has been sent";
    }else{
      echo "Sorry, failed to send you message";
    }
  }else{
    echo "Enter a valid email address!";
  }
}else{
  echo "Email and message field is required";
}