<template>
    <section>
        <h2>Alle soldater</h2>
        <soldier-list></soldier-list>
    </section>
</template>

<script>
import SoldierList from "../components/Soldiers/SoldierList.vue"

export default {
    components: {
        SoldierList
    }
}
</script>