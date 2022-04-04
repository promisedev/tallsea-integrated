<?php require_once "../src/header.php";
$status ="";
$error = "";
if(isset($_GET["status"])){
$status = $_GET["status"];
}
if(isset($_GET["error"])){
$error = $_GET["error"];
}

// echo $status; 
?> 
<!-- --------------------------------- -->
<section class="career_home_div"></section>
<!-- ----------------------- -->
<section class="about_title">
    <!-- / -->
  <div class="title">
    <div class="title_txt">Contact Us</div>
     <div class="title_underline"></div> 
  </div> 
  <!-- / -->
</section>
<!-- ----------------------------- -->
<?php if(!empty($status)) :?>
<section class="status_div">
    <article class="status_msg"><?php echo $status?>! </article>
</section>
<?php endif; ?>
<!-- ---------------------------------- -->
<!-- ----------------------------- -->
<?php if(!empty($error)) :?>
<section class="status_div">
    <article class="error_msg"><?php echo $error?>! </article>
</section>
<?php endif; ?>
<!-- ---------------------------------- -->
<section class="contact_div">

<div class="contact_div1">
  <form method="post" action="contact_message.php" class="contact_form">
<!-- ---------- -->
<label for="fullname" class="l_fullname">Fullname</label>
 <input type="text" name="fullname" id="fullname" placeholder="Fullname"/>
 <!-- ----------- -->
 <label for="email" class="l_email">Email</label>
 <input type="email" name="email" id="email" placeholder="Email"/>
 <!-- ------ -->
 <label for="email" class="l_message">Message</label>
 <textarea name="message" id="message" placeholder="message"></textarea>

 <button type="submit">SEND</button>
  </form>  
</div>
<div class="contact_div2">
<article class="care_title">SEND A MESSAGE</article>
<article class="care_description"> Tallsea Integrated Services LTD is interested in providing
    quality services to all our esteem clients. Reach out to us for enquiries and suggestions, 
    we will respond as soon as possible.</article>
</div>

<section class="customer_care">
<article class="customer_care_avatar"  
style="background:url('../src/robot.png'); background-size:100% 100%;
 background-repeat:no-repeat"></article>
</section>
</section>
<!-- //////////////////////////////////////////////////// -->

<!-- /////////////////////////////////////////////// -->
<script>


// -------------------
let form_name = document.querySelector("#fullname");
let form_name_label = document.querySelector(".l_fullname");

    form_name.addEventListener("click", function(e){
        let myinput = e.currentTarget.placeholder="";
        
    form_name_label.classList.add("show_l_fullname");

    });

form_name.addEventListener("mouseout", function(e){
    let input = e.currentTarget.value;
    if(input == ""){
form_name_label.classList.remove("show_l_fullname");
 let myinput = e.currentTarget.placeholder="Fullname";
    }
});
 // ------------------------

// -------------------
let form_email = document.querySelector("#email");
let form_email_label = document.querySelector(".l_email");

    form_email.addEventListener("click", function(e){
        let myinput = e.currentTarget.placeholder="";
        
    form_email_label.classList.add("show_l_email");

    });

form_email.addEventListener("mouseout", function(e){
    let input = e.currentTarget.value;
    if(input == ""){
form_email_label.classList.remove("show_l_email");
 let myinput = e.currentTarget.placeholder="Email";
    }
});
 // ------------------------

// -------------------
let form_message = document.querySelector("#message");
let form_message_label = document.querySelector(".l_message");

    form_message.addEventListener("click", function(e){
        let myinput = e.currentTarget.placeholder="";
        
    form_message_label.classList.add("show_l_message");

    });

form_message.addEventListener("mouseout", function(e){
    let input = e.currentTarget.value;
    if(input == ""){
form_message_label.classList.remove("show_l_message");
 let myinput = e.currentTarget.placeholder="Message";
    }
});
 // ------------------------
let status_msg = document.querySelector(".status_msg");
let error_msg = document.querySelector(".error_msg");

window.addEventListener("mouseover", function(){
error_msg.classList.add("hide_status");
});
window.addEventListener("mouseover", function(){
status_msg.classList.add("hide_status");
});
</script>

<!-- ----------------------- -->
<?php
require_once "../src/footer.php";
?>