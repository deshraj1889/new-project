
<?php
// the message
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_countryCode = $_POST['countryCode'];
$field_propertyCode = $_POST['propertyCode'];
$field_phone = $_POST['cf_phone'];
$field_textarea = $_POST['cf_message'];
$subject = 'Message from a site visitor Get in Touch Form';

// use wordwrap() if lines are longer than 70 characters

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'CountryCode: '.$field_countryCode."\n";
$body_message .= 'Property : '.$field_propertyCode."\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_textarea."\n";

// send email
$mail_status = mail("info@propertyscanners.com",$subject,$body_message);

if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        alert('Thank you for the message. We will contact you shortly. test ha');
        window.location = 'index.html';
    </script>
<?php
}
else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message failed. Please, send an email to info@propertyscanners.com');
        window.location = 'index.html';
    </script>
<?php
}
?>




