<?php

// Importing DBConfig.php file.
include 'config.php';

// Creating connection.
$con = mysqli_connect($host_name, $host_user, $host_password, $database_name);

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// Populate User username from JSON $obj array and store into $username.
$username = $obj['username'];

// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];

//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM register WHERE username='$username'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));


if (isset($check)) {

    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';

    // Converting the message into JSON format.
    $EmailExistJson = json_encode($EmailExistMSG);

    // Echo the message.
    echo $EmailExistJson;
} else {

    // Creating SQL query and insert the record into MySQL database table.
    $Sql_Query = "insert into register (idregister,username,password,email) values ('$id','$username',,'$password','$email')";


    if (mysqli_query($con, $Sql_Query)) {

        // If the record inserted successfully then show the message.
        $MSG = 'User Registered Successfully';

        // Converting the message into JSON format.
        $json = json_encode($MSG);

        // Echo the message.
        echo $json;
    } else {

        echo 'Try Again';
    }
}
mysqli_close($con);
