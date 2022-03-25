<template>
    <div>
        <table class="table">
            <th>№</th>
            <th>ФИО</th>
            <th>З/П</th>
            <th>Возраст</th>
            <th></th>
            <ItemApp
            v-for="(personalItem, i)  of personals"  :key="personalItem.id" personal_prop.sync="personalItem"
            v-bind:personalItem="personalItem"
            v-bind:index="i"
            v-on:removePersonalItem="removePersonalItem"
            v-on:openPersonalItem="openPersonalItem"
            />
        </table>
    </div>
</template>
<script>
    import ItemApp from '@/components/ItemApp'
    export default {
        props: ['personals'],
        components:{
            ItemApp
        },
        methods: {
            removePersonalItem(id) {
                this.$emit('remove-personal', id)
            },
            openPersonalItem(id) {
                this.$emit('open-personal', id)
            }
        }
    }
</script>
<style scoped>

</style>