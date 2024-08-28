<script>
export default {
data() {
return {
}
},
props: {
    title: {
        typeof: String,
        required: true
    },
    description: {
        typeof: String,
        required: true
    },
    
    technologies: {
        typeof: Array,
        required: true
    },
}
}
</script>

<template>
    <div class="container-fluid my-4">
        <div class="row justify-content-center">
            <div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" style="color: brown;">{{ title }}</h5>
                    <div>
                        <span v-for="technology in technologies" class="badge text-bg-primary mx-1" style="padding: 2px;">{{ technology.name }}</span>
                    </div>
                    <p class="card-text">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>