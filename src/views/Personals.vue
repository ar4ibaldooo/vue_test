<template>
    <div>
        <h2>Список сотрудников</h2>
        <hr>
        <button v-if="addtable" class="add_button" @click="addPersonal"> Добавить сотрудника
        </button>
            <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
        <EditApp v-if="editable"

                v-bind:personalItemEdit="personalItemEdit"
                @edit-personal="editPersonal"
        />

        <loader v-if="loading" />
        <ListApp
                v-else-if="personals.length"
                v-bind:personals="personals"
                @remove-personal="doDelete"
                @open-personal="openPersonalItem"
        />
        <p v-else>Нет записей</p>
        <div>
            <!-- ошибки -->
            <ul v-if="errors && errors.length">
                <li v-for="error of errors" :key="error.id">
                    {{error.message}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import ListApp from '@/components/ListApp'
    import EditApp from '@/components/EditApp'
    import Loader from '@/components/Loader'
    import ConfirmDialogue from '@/components/ConfirmDialogue.vue'
    import axios from 'axios'
    export default {
        name: 'App',
        data() {
            return {
                personals: [],
                loading: true,
                editable: false,
                addtable: false,
                add: false,
                errors: [],
                personalItemEdit: []
            }
        },
        mounted() {
            axios.get('/api/v1/employees')
                .then(response => {
                    this.personals = response.data.data
                    this.loading = false
                    this.addtable = true
                    console.log(response.data.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
       /* mounted() {
            axios.get('https://dummy.restapiexample.com/api/v1/employees/1')
                .then(response => {
                    this.PersonalItem = response.data.data
                    console.log(response.data.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },*/
        methods: {
/*            removePersonalItem(id) {
                axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
                this.editable = false
                this.personals = this.personals.filter(t => t.id !== id)
            },*/
            async doDelete(id) {
                const ok = await this.$refs.confirmDialogue.show({
                    title: '!!!',
                    message: 'Вы действительно желаете удалить сотрудника?.',
                    okButton: 'Удалить',
                })
                // If you throw an error, the method will terminate here unless you surround it wil try/catch
                if (ok) {
                    await axios.delete(`/api/v1/delete/${id}`)
                    this.editable = false
                    alert('Запись успешно удалена')
                    location.reload();

                } else {
                    alert('Произошла ошибка попробуйте еще раз')
                }
            },
            openPersonalItem(id) {
                axios.get(`/api/v1/employee/${id}`)
                    .then(response => {
                        this.personalItemEdit = response.data.data
                        this.loading = false
                        this.editable = true
                        console.log(response.data.data)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })

               /* this.personals = this.personals.filter(t => t.id !== id)*/
            },
            editPersonal(personal) {
                if (!this.add){
                    axios
                        .put(`/api/v1/update/${personal.id}`,
                            {value: personal})
                    this.editable = false
                    this.addtable = true
                    console.log('edit',personal)
                    this.add = false
                }
                else {
                    axios.post("/api/v1/create", {value: personal})
                        .then(response => {
                        })
                        .catch(e => {
                            this.errors.push(e)
                        })
                    this.add = false
                    console.log('add',personal)
                    location.reload();
                }

            },
             addPersonal() {
                 this.editable = true
                 this.addtable = false
                 this.add = true
                 this.personalItemEdit = []
            },
        },
        components: {
                ListApp,
                EditApp,
                Loader,
            ConfirmDialogue
        }

    }
</script>