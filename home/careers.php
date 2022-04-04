<?php require_once "../src/header.php";?>
<!-- --------------------------------- --> 

<section class="career_home_div"></section>
<section class="career_search_div">
<form method="get" action="" class="search_form">

<input type="text" name="search" id="search" placeholder="search for job">
<button type="submit"> <img src="../src/search.png"/></button>
</form>
</section>
<!-- ----------------------- -->
<section class="about_title">
    <!-- / -->
  <div class="title">
    <div class="title_txt">Careers</div>
     <div class="title_underline"></div> 
  </div> 
  <!-- / -->
</section>
<!-- //////////////////////////// -->
<section class="job_cont">
<article class="no_job_msg_div">
    <div class="job_msg">
        <article class="job_msg1"><img src="../src/warning.png"/></article>
        <article class="job_msg2">we are currently not recruiting at the moment</article>
    </div>
    <!--  -->
    <div class="job_img">
        <img src="../src/nojob.png"/>
    </div>
</article>
</section>
<!-- ----------------------- -->
<?php
require_once "../src/footer.php";
?>