<template>
    <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id:10} })"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">24</span>
            <span class="mx-1 fs-5">Octubre</span>
            <span class="mx-1 fw-light">2022, Lunes</span>

        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rem doloremque fugit quae consectetur iure vel voluptatibus provident nam explicabo aut quaerat optio soluta pariatur eaque a perspiciatis natus molestiae!
        </div>

    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 0);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>