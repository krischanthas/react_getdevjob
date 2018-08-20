<?php
    require_once("mysql_connect.php");
    $output = [
        "success"=>false
    ];
    $query = "SELECT * FROM `jobs`";
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
             $output["job"][] = $row;
        }
        $output["success"] = true;
    }
    else{
        $ouput["message"] = "fail";
    }

    $output = json_encode($output);

    print_r($output);
?>
