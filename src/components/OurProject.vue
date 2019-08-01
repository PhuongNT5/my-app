<template>
  <div class="our-project">
    <div class="container">
      <h2 data-aos="fade-right"  data-aos-duration="600">Our Project</h2>
      <div class="our-project-content">
        <div class="row">
          <div class="project-item col-12 col-sm-6 col-lg-4" v-for="project of projects">
            <article data-aos="fade-down" data-aos-duration="600" class="thumbnail-corporate">
              <img class="thumbnail-corporate-image" :src= "getSrc(project.image)">
              <div class="thumbnail-corporate-caption">
                <h4 class="thumbnail-corporate-title font-weight-bold">{{project.description}}</h4>
                <p>{{project.position}}</p>
                <a class="thumbnail-corporate-link" href="#">
                  {{project.technology}}
                  <span class="icon mdi mdi-plus"></span>
                  <span class="icon mdi mdi-plus"></span>
                </a>
              </div> 
            </article>
          </div>
        </div>
        <a data-aos="fade-up" data-aos-duration="600" class= "btn btn-outline-light btn-lg btn-view-all font-weight-bold" href="">
          <div class="content-original">View All Project</div>
      </a>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from './../shared/services/UserService'
export default {
  name: 'OurProject',
  data: () => ({
    projects: []
  }),
  created() {
    this.projects = UserService.getProjects();
  },
  methods: {
    getSrc(image) {
      return require('../assets/images/' + image + '.jpg')
    }
  }
}
</script>
