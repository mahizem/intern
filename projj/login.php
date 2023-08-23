<?php  

include("connection.php");
?>
<html>
    <head>
        <title>
            login page
        </title>
    </head>
   
        <fieldset>
    <legend>For Individual</legend>
    <div>
      <form action="logaction.php" method="post">
        <div>
 <label> <b>Username : </b> </label>
    <input type="text" placeholder="Enter Username" name="uname" required>
    </div>
     <div>
 <label> <b>Password : </b> </label>
    <input type="password" placeholder="Enter password" name="pword" required>
    </div>
  <button type="submit" name="submit">Log In :</button>
        </form>
        </fieldset>
 

</html>