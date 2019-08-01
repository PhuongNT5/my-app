import Vue from 'vue'
export default {
  getUsers() {
    var profile = {
      myName : "Laura"
    }
    return profile;
  },
  getSkills() {
    var skills = [
      {
        name: "Interior/Exterior Design",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",
        icon: "lightbulb"
      },
      {
        name: "Architecture Engineering",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",
        icon: "drafting-compass"
      },
      {
        name: "3D Modeling",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",
        icon: "pencil-ruler"
      },
      {
        name: "Architecture Engineering",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",
        icon: "tools"
      },
      {
        name: "Project Management",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",
        icon:"hands-helping"
      },
      {
        name: "Consultations",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",
        icon:"search-plus"
      },
    ]
    return skills;
  },

  getProjects() {
    var projects = [
      {
        description: "ECR Website",
        customer: "ECR System",
        position: "Front End Developer",
        technology: "Wordpress, .NET",
        member: 4,
        image:"gallery-masonry-1"
      },
      {
        description: "ERC Ticket Online",
        customer: "ECR",
        position: "Front End Developer",
        technology: "Angular 4, NodeJS",
        member: 5,
        image: "gallery-masonry"
      }, 
      {
        description: "Ruby Tool",
        customer: "JNT",
        position: "Front End & Back End Developer",
        technology: "Angular6, NodeJS",
        member: 4,
        image: "gallery-masonry-3"
      },
      {
        description: "Ruby Tool",
        customer: "JNT",
        position: "Front End & Back End Developer",
        technology: "Angular6, NodeJS",
        member: 4,
        image: "gallery-masonry-4"
      },
      {
        description: "Ruby Tool",
        customer: "JNT",
        position: "Front End & Back End Developer",
        technology: "Angular6, NodeJS",
        member: 4,
        image: "gallery-masonry-5"
      },
      {
        description: "Ruby Tool",
        customer: "JNT",
        position: "Front End & Back End Developer",
        technology: "Angular6, NodeJS",
        member: 4,
        image: "gallery-masonry-6"
      }
    ]
    return projects;
  },
  getBackgrounds() {
    var backgrounds = [
      {
        name: "HTML/CSS",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces."
      },
      {
        name: "Javascript",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces."
      },
      {
        name: "Angular",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces."
      },
      {
        name: "VueJs",
        description : "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces.",

      },
      {
        name: "NodeJs",
        description : "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us strengthen the creation of truly unique spaces."
      }
    ]
    return backgrounds;
  }
 }