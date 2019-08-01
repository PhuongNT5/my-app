<template>
    <div class="skills">
    <div class="container">
      <h2 data-aos="fade-up" data-aos-duration="800">My Skills</h2>
      <div class="skill-content">
        <div class="row">
          <div class="skill-item col-12 col-lg-4 col-sm-6" v-for = "skill of skills">
            <article data-aos="fade-up" data-aos-duration="600" class="box-creative">
              <div class="box-creative-icon linearicons-lamp">
                  <font-awesome-icon :icon="skill.icon" />
              </div>
              <h4 class="name-skill">{{skill.name}}</h4>
              <p>
                  {{skill.description}}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from '@/shared/services/UserService.js';
export default {
  name: 'Skills',
  data: () => ({
    skills: []
  }),
  created() {
    this.skills = UserService.getSkills();
  }
}
</script>
