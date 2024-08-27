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
    <div class="card" style="width: 18rem; border: solid 1px; margin: 1px;">
        <div class="card-body" style="background-color: #242424; border-radius: 5%;">
            <h5 class="card-title">{{ title }}</h5>
            <div>
                <span v-for="technology in technologies" class="badge text-bg-primary mx-1">{{ technology.name }}</span>
            </div>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>