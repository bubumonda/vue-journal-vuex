<template>
<div class="entry-title d-flex justify-content-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">25</span>
        <span class="mx-1 fs-3">Octubre</span>
        <span class="mx-2 fs-4 fw-light">2022, Martes</span>


    </div>
    <div>
    <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
    </button>
    <button class="btn btn-primary">
        Subir Foto
        <i class="fa fa-upload"></i>
    </button>
    </div>

</div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Que sucedio hoy?"
        ></textarea>
    </div>
    <FabItem
        icon="fa-save"
    />
    <img src="https://pbs.twimg.com/media/Eeb4Kf9XkAA2t1t.jpg" alt="entry-pictyre" class="img-thumbnail">


</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        FabItem: defineAsyncComponent( ()=> import('../components/FabItem.vue') )
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