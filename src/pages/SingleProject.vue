<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
export default {
data() {
return {
    project: {},
}
},
components:{
    ProjectCard
},
methods:{
    getProjects(id){
        axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
            params: {
            }
        })
        .then((response) => {
            console.log(response.data.results);
            this.project = response.data.results;
        })
        .catch(function (error){
            console.log(error);
        })
    }
},
created(){
    this.getProjects( this.$route.params.id);
}
}
</script>

<template>
            <ProjectCard  :title="project.title" :description="project.description" :technologies="project.technologies"/>
</template>

<style scoped>
</style>