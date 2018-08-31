<?php

function jobTypeQuery($type){
    return "AND `jobs`.`type_id` = $type";
}


?>