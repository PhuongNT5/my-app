<template>
  <div class="my-contact">
    <div class="contact-form">
      <div class="container">
        <h2 data-aos="fade-up" data-aos-duration="800"> Contact Me</h2>
        <div class="social">
          <div class="row">
            <div class="col-12 col-lg-4">
              <div class="social-info">
                <div class="box-icon linearicons-lamp">
                  <font-awesome-icon icon="phone-alt" />
                </div>
                <div class="info">
                  <p>PHONE</p>
                  <p>0962490375</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="social-info">
                <div class="box-icon linearicons-lamp">
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <div class="info">
                  <p>LOCATION</p>
                  <p>District 9, Ho Chi Minh City</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="social-info">
                <div class="box-icon linearicons-lamp">
                  <font-awesome-icon icon="envelope" />
                </div>
                <div class="info">
                  <p>EMAIL</p>
                  <p>phuongnguyen@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form @submit="checkForm" action="/something" method="post" novalidate="true">
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" id="name" v-model="name" placeholder="Name">
              <p class="error" v-if="!name && errors.length">Please enter valid name</p>
            </div>
            <div class="form-group col-md-6">
              <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
               <p class="error" v-if="!email && errors.length">Please enter valid email</p>
            </div>
          </div>
          <div class="form-group">
            <textarea type="text" class="form-control" id="message" v-model="message" placeholder="Message"></textarea>
            <p class="error" v-if="!message && errors.length">Please enter your message</p>
          </div>
          <button type="submit" class="btn btn-primary btn-submit">Send to me</button>
        </form>
      </div>
    </div>
    <div class="signature">
      <h4 class="name">Phuong</h4>
      <div class="list-social">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f'}"/>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in'}"/>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram'}" />
      </div>
      <p>Phuong Nguyen @2019. All Right Reserved. Do the right thing.</p>
    </div>
  </div>
</template>
<script>
import MyService from '@/shared/services/UserService.js';
import { constants } from 'fs';
  export default {
    name: 'Contact',
    data: () => ({
      errors: [],
      name: null,
      email: null,
      message: ''
    }),
    methods:{
      checkForm:function(e) {
        this.errors = [];
        if(!this.name) this.errors.push("Name required.");
        if(!this.email) {
          this.errors.push("Email required.");
        } else if(!this.validEmail(this.email)) {
          this.errors.push("Valid email required.");        
        }
        if(!this.errors.length) {
          var content = {
            name: this.name,
            email: this.email,
            message: this.message
          }
          MyService.sendMail(content);
        }else {
          console.log(this.errors)
        }
        e.preventDefault();
      },
      validEmail:function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
      }
    }
  }
</script>