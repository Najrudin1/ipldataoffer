<?php




  $name= $_POST['name'] ;
  $email= $_POST['email'] ;
  $phone= $_POST['phone1'] ;
  $company= $_POST['country'];
   $number= $_POST['number1'] ;
 
  
  require_once "mydb1.php";
  
 

if (isset($_POST['name'])) {

//Insert Query



mysqli_query($conn, "INSERT INTO 2022offer(name, email, phone , country, number) VALUES('" . $name . "', '" . $email . "', '" . $phone . "', '" . $country . "', '" . $number . "')");
    
}




mysql_close($connection); // Connection Closed














?>    
  
  
  
  
  
  
  
  
  
  
  
  
  
?>