<?php

$errors = [];
if (!isset($_POST['email']) || $_POST['email'] == null) $errors['email'] = "Please, set your email";
if (!isset($_POST['message']) || $_POST['message'] == null) $errors['message'] = "Please, set your message";

if (count($errors) > 0) {
	header('HTTP/1.1 500 Validation error');
	header('Content-Type: application/json; charset=UTF-8');
	die();
} else {
	$email = $_POST['email'];
	$message = $_POST['message'];

	$destino = "luan.ribeiro.dev@gmail.com";

	// É necessário indicar que o formato do e-mail é html
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= "From: luan-dev.com <contact@luan-dev.com>\r\n";
	// $headers .= "Bcc: contato@luan-dev.com\r\n";

	$message = "
		<div>
			<h3>Um usuário enviou um contato para você através de seu site:</h3>
			<h4>Email: $email</h4>
			<h4>Mensagem: <p>$message</p></h4>
		</div>
	";

	if (mail($destino, "Contato", $message, $headers)) {
		echo json_encode(1);
	} else {
		header('HTTP/1.1 500 Mail error');
		header('Content-Type: application/json; charset=UTF-8');
		die(error_get_last()['message']);
	}
}
