<template>
    <template v-if="entry">
    <div  
        class="entry-title d-flex justify-content-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">{{day}}</span>
            <span class="mx-1 fs-3">{{month}}</span>
            <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>


        </div>
        <div>
            <input type="file"
                    @change="onSelectedImage"
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png, image/jpeg">
        <button class="btn btn-danger mx-2"
            v-if="entry"
            @click="onDeleteEntry">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary"
                @click="onSelectImage">
            Subir Foto
            <i class="fa fa-upload"></i>
        </button>
        </div>

    </div>
        <hr>
        <div
            class="d-flex flex-column px-3 h-75">
            <textarea
                type="text"
                placeholder="¿Que sucedio hoy?"
                v-model="entry.text"
            ></textarea>
        </div>
        
        <img  v-if="entry.picture && !localImage"  :src="entry.picture" alt="entry-pictyre" class="img-thumbnail">
        <img  v-if="localImage" :src="localImage" alt="entry-picture" class="img-thumbnail">


    </template>
        <FabItem
        icon="fa-save"
        @on:click="saveEntry"
    
        />


</template>

<script>
import Swal from 'sweetalert2'
import {mapActions, mapGetters} from 'vuex'
import { defineAsyncComponent } from 'vue'
import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage  from '../helpers/uploadImage'

export default {

    components: {
        FabItem: defineAsyncComponent( ()=> import('../components/FabItem.vue') )
    },
    
    props:{
        id:{
        type: String,
        required: true
        }
    },
    methods: {
        ...mapActions('journal',['updateEntry','createEntry','deleteEntry']),
        loadEntries(){
            this.file = null

        let entry
        if( this.id === 'new'){
            entry ={
                text: '',
                date: new Date().getTime(),
                picture: null
            }

        }else{
        
        entry = this.getEntryById(this.id)
        if(!entry)  return this.$router.push({name:'no-entry'})
        
        }
        this.entry= entry

        },
        async saveEntry(){
            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            const picture = await uploadImage( this.file)
            this.entry.picture = picture

            console.log(picture)
            if(this.entry.id){

                await this.updateEntry(this.entry)
            }else{
                
                const id = await this.createEntry(this.entry)
                //Crear una nueva entrada

                // await action
                this.$router.push({ name:'entry', params:{id } })

                //redirect => entry param[ id]
            }
            this.file = null
            Swal.fire('Guardado','Entrada registrada con exito','success')
            
            

           
        
        },
        async onDeleteEntry()   {
            const {isConfirmed} = await Swal.fire({
                title:' Esta seguro',
                text: ' Una vez borrado no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si estoy seguro'
            })
            if( isConfirmed){
                new Swal({
                    title:'Espere porfavor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry(this.entry.id)
                this.$router.push({name:'no-entry'})
                Swal.fire('Eliminado','','success')
            }


        },
        onSelectedImage( event ){
            const file = event.target.files[0]
            if( !file){
                return
            }
            this.file= file
            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )
            

        },
        onSelectImage(){
            this.$refs.imageSelector.click()
        


        }
    },
    data(){
        return{
        entry: null,
        localImage: null,
        file:null
        }
    },
    computed:{
        
        ...mapGetters('journal',['getEntryById']),
        day(){
            const {day } = getDayMonthYear(this.entry.date)
            return day
        },
        month(){
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay(){
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        }

    },

    created(){
        this.loadEntries()
    },

    watch:{
        id(){
            this.loadEntries()

        }
    }


}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;

    }
    
}
img{
        bottom: 150px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
        position: fixed;
        right: 20px;
        width: 200px;
    }

</style>