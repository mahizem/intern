<?php

include("connection.php");
?>

<html>
    <head>
        <title>
            sign up page
        </title>
    </head>
   
        <fieldset>
    <legend>For Individual</legend>
    <div>

 <form action="action_page.php" method="post">
   <label for="fname"><b>First Name : </b></label>
    <input type="text" placeholder="Enter First name" name="fname" required>
    </div>
       
<br/>
   <label for="lname"><b>Last Name : </b></label>
    <input type="text" placeholder="Enter Last Name" name="lname" required>
    </div>
       
<br/>
 <label for="uname"><b>Username : </b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
    </div>
       
<br/>
<div>
 <label for="psw"><b>Password :  </b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
</div>
    <br/>
    <div>
<label for="cpsw"><b> Confirm Password :</b></label>
    <input type="password" placeholder="Confirm Password" name="cpsw" required>
    </div>
  <br/>
  <div>
<label for="banks">Banks used:</label>

<select name="bank" id="bankss" multiple>
  <option value="awash">Awash Banks</option>
  <option value="nib">Nib Banks</option>
  <option value="abiss">Abissinia Banks</option>
  <option value="comm">Commercial Banks</option>
   <option value="Zemen">Zemen Bank</option>
    <option value="abay">Abay Banks</option>
     <option value="amhara">Amhara Banks</option>
     hold on control + windows key for multiple choice
</select>
    </div>
  <br/>
  <div>
<label for="accounts"><b> Account Number :</b></label>
    <input type="number"  name="account"  required>
    </div>
  <br/>
  <div>
<label for="address"><b> Address : </b></label>
    <input type="address"  name="address" required>
    </div>
  <br/>
  <div>
<label for="pno"><b> Phone Number :</b></label>
    <input type="number"  name="pnumber" required>
    </div>
  <br/>
   <div>
<label for="email"><b> Email :</b></label>
    <input type="email"  name="email" required>
    </div>
  <br/>
  <div>
<label for="sex"><b> Sex :</b></label>
    <input type="sex"  name="sex" required>
    </div>
  <br/>
    <div>
<label for="age"><b> Age :</b></label>
    <input type="number"  name="age" required>
    </div>
  <br/>

  </div>
    <button type="submit" name="submit">Sign Up :</button>
    <label>
 
        </form>
        </fieldset>
 

</html>