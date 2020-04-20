<?php
	//opens a file t write the message in
	$file = "./message.txt";

	$name = $_POST["name"];
	$text_to_write = $name;

	fwrite($data_file, $text_to_write);
	fclose($data_file);
?>