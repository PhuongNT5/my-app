<template>
  <div class="home-banner carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-caption d-none d-md-block">
          <div class="container">
            <div class="intro">
              <h1 class="font-weight-bold" data-aos="fade-down">Affordable Legal</h1>
              <p>The highly qualified team of Legalor’s attorneys and consultants will be glad to provide necessary
                legal assistance.</p>
              <a class="btn btn-outline-light btn-lg btn-view-more font-weight-bold" href="" data-aos="fade-up">
                <div class="content-original">View More</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
