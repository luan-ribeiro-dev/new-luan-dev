<?php

$errors = [];
if (!isset($_POST['nome']) || $_POST['nome'] == null) $errors['nome'] = "O nome não pode ser nulo";
if (!isset($_POST['email']) || $_POST['email'] == null) $errors['email'] = "O email não pode ser nulo";
if (!isset($_POST['telefone']) || $_POST['telefone'] == null) $errors['telefone'] = "O telefone não pode ser nulo";
if (!isset($_POST['assunto']) || $_POST['assunto'] == null) $errors['assunto'] = "O assunto não pode ser nulo";
if (!isset($_POST['mensagem']) || $_POST['mensagem'] == null) $errors['mensagem'] = "A mensagem não pode ser nula";

if (count($errors) > 0) {
	header('HTTP/1.1 500 Validation error');
	header('Content-Type: application/json; charset=UTF-8');
	die(json_encode([
		"message" => "Ocorreu um erro validação, preencha os campos corretamente",
		"fields" => $errors
	]));
} else {
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$assunto = $_POST['assunto'];
	$mensagem = $_POST['mensagem'];

	// emails para quem será enviado o formulário
	$emailenviar = "contact@luan-dev.com";
	$destino = "luan.ribeiro.dev@gmail.com";
	$assunto = $_POST['assunto'];

	// É necessário indicar que o formato do e-mail é html
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'From: luan-dev.com <contato@luan-dev.com>';
	// $headers .= "Bcc: contato@luan-dev.com\r\n";

	$message = "<h1>Um usuário enviou um contato para você através de seu site:</h1>";
	$message .= "<b>Nome:</b> $nome";
	$message .= "<b>Email:</b> $email";
	$message .= "<b>Telefone:</b> $telefone";
	$message .= "<b>Assunto:</b> $assunto";
	$message .= "<b>Mensagem:</b> $mensagem";

	if (mail($destino, $assunto, $message, $headers)) {
		echo json_encode(1);
	} else {
		header('HTTP/1.1 500 Mail error');
		header('Content-Type: application/json; charset=UTF-8');
		die(json_encode([
			"message" => "Ocorreu um erro ao enviar o email, tente mais tarde ou envie manualmente para contato@luan-dev.com",
			"errors" => $errors
		]));
	}
}
