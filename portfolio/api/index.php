<?php
header('Access-Control-Allow-Origin: http://localhost:3000 ');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

include 'DBconnect.php';
//checking connection through dbconnect method.
$objDb = new DbConnect;
$conn = $objDb->connect();

$contactform = file_get_contents('php://input');
$data = json_decode($contactform, true);
if (isset($item)) {
    return;
} else {
    $item = $data;
}

$sql = "INSERT INTO `contactform`( `fName`, `lName`, `email`, `message`, `submitted`, `created_at`) VALUES ( :fName, :lName, :email, :messageTxt, :submitted, :created_at)";
$stmt = $conn->prepare($sql);
$created_at =  Date('Y-m-d g:i a');
print_r($data);
$stmt->bindParam(':fName', $item['fName']);
$stmt->bindParam(':lName', $item['lName']);
$stmt->bindParam(':email', $item['email']);
$stmt->bindParam(':messageTxt', $item['message']);
$stmt->bindParam(':submitted', $item['submitted']);
$stmt->bindParam(':created_at', $created_at);

if ($stmt->execute()) {
    $response = ['status' => 1, 'message' => 'Record created successfully.'];
} else {
    $response = ['status' => 0, 'message' => 'Failed to create record.'];
}
echo json_encode($response);
