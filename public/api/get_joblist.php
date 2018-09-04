<?php
    header("Access-Control-Allow-Origin: *");
    require_once("queries/salary.php");
    require_once("queries/post_date.php");
    require_once("queries/job_type.php");
    require_once("mysql_connect.php");
    $output = [
        "success"=>false
    ];
    $title = $_POST["title"];
    $query = "SELECT * FROM `jobs`";
    $flag = false;

    if($_POST["minSalary"] != "" && $_POST["maxSalary"] != ""){
        $max = (INT)$_POST["maxSalary"];
        $min = (INT)$_POST["minSalary"];
        $flag = true;
        $query = $query.salaryQuery($min ,$max);
    }

    if($_POST["postedDate"] !== ""){
        $numberOfDays = $_POST["postedDate"];
        $query = $query.postDateQuery($numberOfDays, $flag);
        $flag = true;
    }
    if($_POST["employmentTypeFullTime"] == "true"){
        $query = $query.jobTypeQuery("1", $flag);
        $flag = true;
    }
    if($_POST["employmentTypeContract"] == "true" || $_POST["employmentTypePartTime"] == "true"){
        $query = $query.jobTypeQuery("2", $flag);
        $flag = true;

    }
    if($_POST["employmentTypeInternship"] == "true"){
        $query = $query.jobTypeQuery("3", $flag);
        $flag = true;

    }

    if($flag){
        $query = $query . " AND `title` LIKE '%$title%'";
    }
    else{
        $query = $query . " WHERE `title` LIKE '%$title%'";
    }

    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) > 0){
        $count = 0;
        while($row = mysqli_fetch_assoc($result)){
            $output["jobs"][] = $row;
            //get company/salary id to relate to jobs
            $companyID = $row["company_id"];
            $salaryID = $row["salary_id"];
            $companyQuery = "SELECT * FROM `companies` WHERE `ID`=$companyID";
            $companyResult = mysqli_query($conn, $companyQuery);
            //insert company of job posting into output object
            if(mysqli_num_rows($companyResult) > 0){
                $companyRow = mysqli_fetch_assoc($companyResult);
                $output["jobs"][$count]["company"] = $companyRow;
            }
            $locationQuery = "SELECT * FROM `locations` WHERE `company_id`=$companyID";
            $locationResult = mysqli_query($conn, $locationQuery);
            //insert location of company into output object
            if(mysqli_num_rows($locationResult) > 0){
                $locationRow = mysqli_fetch_assoc($locationResult);
                $output["jobs"][$count]["company"]["location"] = $locationRow;
            }
            $salaryQuery = "SELECT * FROM `salaries` WHERE `ID`=$salaryID";
            $salaryResult = mysqli_query($conn, $salaryQuery);
            //insert salary of job into output object
            if(mysqli_num_rows($salaryResult) > 0){
                $salaryRow = mysqli_fetch_assoc($salaryResult);
                $output["jobs"][$count]["salary"] = $salaryRow;
            }
            $count++;
        }
        $output["success"] = true;
    }
    else{
        $ouput["message"] = "fail";
    }
    
    $output = json_encode($output);

    print_r($output);
?>
