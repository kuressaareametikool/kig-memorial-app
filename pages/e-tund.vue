<script setup>
  
</script>

<template>
    
    <div class="border border-green-500 h-[85vh]
        grid gap-0 

        sm:grid-cols-2 sm:gap-2  
        md:grid-cols-3  md:gap-3
        lg:gap-4 lg:grid-cols-4
        xl:grid-cols-5
    ">

        <h2 v-for="i in 12"
            class="flex justify-center items-center bg-yellow-200
            text-4xl lg:text-8xl
            border border-red-500"
        >{{i}}</h2>

    </div>

</template>






<style> 


    


    /* GRID */


    /* h2 {
        border: 1px solid red;
        font-size: 3rem;
        line-height: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem ;
    }

    .container {
        border: 1px solid green;
        height: 85vh;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
    } */


    /* FLEX */

    /* h2 {
        border: 1px solid red;
        font-size: 3rem;
        line-height: 1;
        text-align: center;
        flex-grow: 1;
        flex-basis: 64px;
        
    }

    .container {
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        height: 80vh;
    } */
</style>