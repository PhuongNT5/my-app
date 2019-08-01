<template>
  <div class="my-information">
    <div class="container">
      <div class="information">
        <div class="row">
          <div class="col-12 col-md-6">
            <div data-aos="fade-down" data-aos-duration="600" class="number-experience">
                <div class="svg-box-content h-100">
                  <img src="../assets/images/years_experience_content.png">
                </div>
            </div>
          </div>
          <div class="information-content col-12 col-md-6">
            <h2 data-aos="fade-down" data-aos-duration="600">A Few Words About Us</h2>
            <div data-aos="fade-down" data-aos-duration="600" class="title">R&CO is a team of highly talented, experienced, and award-winning architects and designers.</div>
            <p>Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand of our customers.</p>
            <a data-aos="fade-up" data-aos-duration="600" class= "btn btn-outline-light btn-lg btn-readmore font-weight-bold" href="">
                <div class="content-original">Read More</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>

</style>
