<?php

function jobTypeQuery($type, $flag){
    if($flag){
        return " AND `jobs`.`type_id` = $type";
    }
    else {
        return " WHERE `jobs`.`type_id` = $type";
    }
    
}


?>