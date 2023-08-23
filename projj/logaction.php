<?php
 include("connection.php");


if(isset($_POST['submit']))
{
 $username = $_POST['uname'];
$pword = $_POST['pword'];

 $sql = "select * from login where uname = ' $username' and password = '$pword'";
$res1 = mysqli_query( $conn , $sql );
$row = mysqli_fetch_array($res1,MYSQLI_ASSOC);
$count = mysqli_num_rows($res1);
if($count==1){
    header("Location:home.php");
}
else{
'<script>
window.location.href ="login.php";
alert("Log in not successful");
</script>';
}
 }
?>