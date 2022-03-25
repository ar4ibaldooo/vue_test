<template>
    <tr @dblclick ="$emit('openPersonalItem', personalItem.id)">

            <td>
            <strong>{{index + 1}}</strong>
            </td>
            <td>
                <span v-bind:class="{done: personalItem.completed}">
                    {{personalItem.employee_name}}
                </span>
            </td>
            <td>
                {{personalItem.employee_salary}}
            </td>
            <td>
                {{personalItem.employee_age}}
            </td>
            <td>
            <button class="rm" v-on:click="$emit('removePersonalItem', personalItem.id)">
                <div class="btn-div"></div>
            </button>
            </td>
    </tr>
</template>
<script>
    export default {
        props: {
            personalItem: {
                type: Object,
                required: true
            },
            index: Number
        },
        data() {
            return {
                personalLocal: this.personalItem,
            };
        },
/*        methods: {
            markComplete() {
                this.personalLocal.completed = !this.personalLocal.completed;
            },
        },*/

    }

</script>
<style scoped>

    .rm {
        width: 100%;
        background-color: rgba(247, 3, 0, 0.53);
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .done {
        text-decoration: underline;
        color: rgba(255, 3, 0, 0.64);
    }

    .btn-div {
        width: 100%;
        height: 10px;
        border-radius: 40px;
        position: relative;
        z-index: 1;
        margin: 10px auto;
        cursor: pointer;

    }
    .btn-div:before {
        content: '+';
        color: white;
        position: absolute;
        z-index: 2;
        transform: rotate(45deg);
        font-size: 35px;
        line-height: 1;
        top: -15px;
        left: 6px;
        transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    }

    .btn-div:hover:before {
        color: #f70300;
    }
</style>