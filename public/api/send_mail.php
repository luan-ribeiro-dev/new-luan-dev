<?php

$errors = [];
if (!isset($_POST['name']) || $_POST['name'] == null) $errors['name'] = "Please, set your name";
if (!isset($_POST['email']) || $_POST['email'] == null) $errors['email'] = "Please, set your email";
if (!isset($_POST['message']) || $_POST['message'] == null) $errors['message'] = "Please, set your message";

if (count($errors) > 0) {
	header('HTTP/1.1 500 Validation error');
	header('Content-Type: application/json; charset=UTF-8');
	die();
} else {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	// emails para quem será enviado o formulário
	$emailenviar = "contact@luanribeirosilva.com";
	$destino = "luan.ribeiro.dev@gmail.com";

	// É necessário indicar que o formato do e-mail é html
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'From: luanribeirosilva.com <contact@luanribeirosilva.com>';
	// $headers .= "Bcc: contato@luan-dev.com\r\n";

	$message = "<h1>Um usuário enviou um contato para você através de seu site:</h1>";
	$message .= "<b>Nome:</b> $name";
	$message .= "<b>Email:</b> $email";
	$message .= "<b>Mensagem:</b> $message";

	if (mail($destino, $message, $headers)) {
		echo json_encode(1);
	} else {
		header('HTTP/1.1 500 Mail error');
		header('Content-Type: application/json; charset=UTF-8');
		die();
	}
}
