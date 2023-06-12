<?php
// Разрешаем доступ к ресурсу из любых источников
header('Access-Control-Allow-Origin: *');

$mailTo = "postmaster@jet-fors.ru";
$from = "postmaster@jet-fors.ru";
$subject = 'Theme';

$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$specialty = $_POST['specialty'] ?? '';
$resumeMessage = $_POST['resume_message'] ?? '';
$newsMessage = $_POST['news_message'] ?? '';

$message = 'Имя: ' . $name . "\n";
$message .= 'Телефон: ' . $phone . "\n";
$message .= 'Email: ' . $email . "\n";

if (!empty($specialty)) {
	$message .= 'Специальность: ' . $specialty . "\n";
}

if (!empty($resumeMessage)) {
	$message .= 'Сообщение (Специалист): ' . $resumeMessage . "\n";
}

if (!empty($newsMessage)) {
	$message .= 'Сообщение (Новость): ' . $newsMessage . "\n";
}

$result = false;

if (!empty($email)) {
	// Обработка случая, когда указан Email
	$headers = "From: $from\r\nReply-To: $from\r\n";
	$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

	$result = mail($mailTo, $subject, $message, $headers);

	if ($_FILES['resume']['error'] === UPLOAD_ERR_OK) {
		$resumePath = $_FILES['resume']['tmp_name'];
		$resumeName = $_FILES['resume']['name'];
		$resumeContent = file_get_contents($resumePath);

		$separator = '---';
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "From: $from\r\nReply-To: $from\r\n";
		$headers .= "Content-Type: multipart/mixed; boundary=\"$separator\"\r\n";

		$bodyMail = "--$separator\r\n";
		$bodyMail .= "Content-type: text/plain; charset=utf-8\r\n";
		$bodyMail .= "Content-Transfer-Encoding: quoted-printable\r\n";
		$bodyMail .= "\r\n";
		$bodyMail .= $message . "\r\n";

		$bodyMail .= "--$separator\r\n";
		$bodyMail .= "Content-Type: application/octet-stream; name=\"$resumeName\"\r\n";
		$bodyMail .= "Content-Transfer-Encoding: base64\r\n";
		$bodyMail .= "Content-Disposition: attachment; filename=\"$resumeName\"\r\n";
		$bodyMail .= "\r\n";
		$bodyMail .= chunk_split(base64_encode($resumeContent)) . "\r\n";
		$bodyMail .= "--$separator--\r\n";

		$result = mail($mailTo, $subject, $bodyMail, $headers);
	}
} else {
	// Обработка случая, когда Email не указан
	$result = mail($mailTo, $subject, $message);
}

if ($result) {
	echo 'Данные успешно отправлены';
} else {
	echo 'Ошибка при отправке данных';
}
?>