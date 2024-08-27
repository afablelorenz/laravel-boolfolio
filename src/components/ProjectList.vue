<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
export default {
components:{
    ProjectCard
},
data() {
return {
    projects: [],
}
},
props: {
    
},
methods:{
    getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects', {
            params: {
            }
        })
        .then((response) => {
            console.log(response.data.results.data);
            this.projects = response.data.results.data;
        })
        .catch(function (error){
            console.log(error);
        })
    }
},
created(){
    this.getProjects();
}
}
</script>

<template>

    <ProjectCard v-for="project in projects" :title="project.title" :description="project.description" :finished="project.finished" :technologies="project.technologies" />
</template>

<style scoped>
</style>