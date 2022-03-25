<template>

    <form @submit.prevent="onSubmit">
        <div class='box'>
            <div class='item'>
                <label>Имя
                    <input type="text" v-model="personalLocalEdit.employee_name">
                </label>
            </div>
                <div class='item'>
                <label>Возраст
                    <input type="text" v-model="personalLocalEdit.employee_age">
                </label>
            </div>
            <div class='item'>
                <label>Зарплата
                    <input type="text"  v-model="personalLocalEdit.employee_salary">
                </label>
            </div>
                <div class='item_save'>
                <button class = "save" @click='edit'>Сохранить</button>
            </div>
        </div>
    </form>
</template>
<script>

    export default {
        props: {
            personalItemEdit: {
                type: Object,
                required: true,
            },
            index: Number
        },
        data() {
            return {
                employee_name: this.personalItemEdit.employee_name,
                employee_age: '',
                employee_salary: '',
                personalLocal:  this.personalItemEdit,
                name: this.personalItemEdit.employee_age,
                personalLocal1:  "name",
            };
        },
        computed: {
            personalLocalEdit: function () {
                console.log(1)
                return this.personalItemEdit
            }
        },

        methods: {
   /*         onSubmit() {
                    const editPersonal = {
                        employee_name : personalItemEdit.employee_name ,
                        employee_salary: this.employee_salary,
                        employee_age: this.employee_age,
                    }
                    this.$emit("edit-personal", personalLocal)
            },*/
            edit () {

                /*console.log(this.personalItemEdit)*/
                this.$emit("edit-personal", this.personalItemEdit)
            }
        }
    }

</script>
<style scoped>
    .box {
        display: flex;
        padding: 0 5px;
    }
    .item {
        flex: 1 1 auto;
        margin: 0 5px;
    }
    .item_save {
        align-items: flex-end;
    }
    .save {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: end;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>
