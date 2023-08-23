<?php

include("connection.php");
if(isset($_POST['submit']))
{
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$username = $_POST['uname'];
$pword = $_POST['psw'];
$cpsw = $_POST['cpsw'];
$banks = $_POST['bank'];
$acc = $_POST['account'];
$address = $_POST['address'];
$pnumber = $_POST['pnumber'];
$email = $_POST['email'];
$sex = $_POST['sex'];
$age = $_POST['age'];

$sql = "select * from signin where uname = '$username'";
$res= mysqli_query($conn ,$sql);
$count_user = mysqli_num_rows($res);

$sql = "select * from signin where email = '$email'";
$res = mysqli_query($conn,$sql);
$count_email = mysqli_num_rows($res);

if ($count_user == 0 & $count_email == 0  )
{
if($pword==$cpsw){

    $hash=password_hash($pword,PASSWORD_DEFAULT);
    $sql = "INSERT INTO signin(fname,lname,uname,password,banks,pno,sex,age,email,adress,accno) 
    VALUES('$fname','$lname','$username','$hash','$banks','$pnumber','$sex','$age','$email','$address','$acc')";
   $res = mysqli_query($conn,$sql);
$sql = "INSERT INTO login(uname,password) 
    VALUES('$username','$pword')";
    $res = mysqli_query($conn,$sql);

   if($res){
    header("Location : login.php");
   }
}

}
else
{
if($count_user > 0){

    "<script>
    window.location.href = 'signup.php'
    alert('username already exists')
    </script>";
}
if($count_email > 0){

    "<script>
    window.location.href = 'signup.php'
    alert('email already exists')
    </script>";
}
}
}

?>