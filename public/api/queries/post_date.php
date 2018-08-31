<?php

function postDateQuery($numberOfDays){
    return " WHERE `jobs`.`post_date` > DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL $numberOfDays DAY), '%m/%d%y')";
}

?>
