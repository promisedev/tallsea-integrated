<?php require_once "../src/header.php";

$id = $_GET['id'] ?? "";
?>
<!-- --------------------------------- -->
<section class="career_home_div"></section>
<!-- ---------------------------------- -->
<section class="serv_title">
    <!-- / -->
  <div class="title">
    <div class="title_txt serv_txt"></div>
     <div class="title_underline"></div> 
  </div> 
  <!-- / -->
</section>
<!-- ------------------------------------ -->
<section class="serv_container">
<article class="serv_item_one">
<div class="serv_item_image" ></div>
<!-- ----------------------- -->
<div class="serv_item_desc">
  <article class="overview_title"><div class="s_underline"></div>Service Overview</article>  
  <article class="overview_desc"></article>  
</div>
</article>
<!-- --------------- -->
<article class="serv_item_two">
 <div class="portfolio_txt"><div class="s_underline"></div>Portfolio</div>
 <article class="prev_next">
     <div class="prev">&#9001;</div>
     <div class="next">&#9002;</div>
 </article> 
 <div class="portfolio_img">
 <!-- <article class="port_slide" style="background:url('../src/s1_port1.png');
background-size:100% 100%; background-repeat:no-repeat; left=0%"></article> -->
    
 </div>
 
 <div class="portfolio_desc" >
<article class="p_desc_title">Why Chose Tallsea</article>
<article class="p_desc_desc"></article>
<article class="p_desc_list">
    <ul class="port_list">
      <!-- <li> first company</li>   -->

    </ul>
</article>
 </div>
</article>

</section>
 
<script>
    let id = <?php echo $id ?>;
</script>
<!-- ----------------------- -->
<?php
require_once "../src/footer.php";
?>