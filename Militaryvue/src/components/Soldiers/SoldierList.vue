<template>
    <section>
     
        <soldier-item
            v-for="(soldier, i) in soldiers"
            :key="i"
            :id="soldier.id"
            :name="soldier.name"
            :active="soldier.active"
            :age="soldier.age"
            :position="soldier.position"
        ></soldier-item>
    </section>
</template>

<script>
import SoldierItem from "../Soldiers/Soldieritem.vue"
import soldierService from "../../services/soldierService.js"

export default {
    setup(){
        const soldiers = soldierService.getAll();
        
        return {
            soldiers
        }
    },
    components: {
        SoldierItem
    }
}
</script>