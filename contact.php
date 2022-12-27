<?php

    $message_sent = false;

    if(isset($_POST['name']) && $_POST['email'] != '') {

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
             // Submit form
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $userMessage = $_POST['message'];

            $to = 'info@jpbmaintenance.co.za';
            $body = 'Message received from'.$userName.'Email address: '.$userEmail.'Their Message'.$userMessage;

            $body .= 'From: '.$userName. '\r\n';
            $body .= 'Email: '.$userEmail. '\r\n';
            $body .= 'Message: '.$userMessage. '\r\n';

            mail($to, $userMessage, $body);

            $message_sent = true;

            exit(); 
        }
    }
?>