<template>
    <article>
        <h3>{{ name }} (id: {{ id }})</h3>
        <p>Aktiv: {{ active }}</p>
        <p>Alder: {{ age }}</p>
        <p>Posisjon: {{position}}</p>
    </article>
</template>

<script> 
export default {
    props: {
        id: Number,
        name: String,
        age: Number, 
        active: Boolean, 
        position: String,
       
    }
}
</script>