<script setup>
import { ref, onMounted } from 'vue'

const text = ref('')
const animClass = ref('wtf')

onMounted(() => {
    setTimeout(function () {
        animClass.value = "hide";
        console.log("WELCOME: Carolingian Royalty Registery")
    }, 5000);
})

</script>

<template>
    <div class="main">
        <!-- <header class="header-top header-bg"> -->
        <header>
            <div class="header_pad">
                <img alt="Vue logo" class="responsive" src="./assets/header.svg" height="90" />
            </div>
        </header>

        <div class="info">
            <div class="container">
                <div />
                <div class="login">
                    <form @submit.prevent="addTodo">
                        <div>
                            <!-- <input type='password' class="foo" v-model="newTodo"> -->
                            <input type='password' class="foo">
                        </div>
                        <div>
                            <!-- <input type='password' class="foo" v-model="newTodo"> -->
                            <input type='password' class="foo">
                        </div>

                        <button  v-on:click="text = 'Not Valid'">Login</button>
                    </form>

                    <p>{{ text }}</p>
                    
                </div>
                <div />
            </div>
        </div>
    </div>

    <footer class="footer">
        <div>
            public | view record issued via QR codes
        </div>
    </footer>

    <div :class="animClass">
        <div>
            <div class="logo_container">
                <img alt="flag" class="logo" src="./assets/vegitable_lamb.svg" />
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.header_pad{
    padding: 10px;
}
.main {
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: rgb(125, 4, 4);
}

.foo {
    font-size: 20px;
    border-color: black;
    border-width: 1px;
    border-style: double;
    background-color: #9c0808;
    margin: 5px;
    ;
}

button {
    border: .5px solid red;
    ;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;

    background-color: rgb(125, 4, 4);
    color: white;
}

hr {
    border-color: rgb(143, 1, 1);
    border-width: 0px;
}

.info {
    padding: 2rem;
}

.footer {
    font-size: 12px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    color: rgb(85, 85, 82);
    height: 60px;
}

.container {
    display: grid;
    grid-template-columns: 10% 1fr 10%;
}

.title {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -.1rem;

}

.responsive {
    max-width: 100%;
    /* width: 100%; */
    /* height: auto; */
}

.header-top {
    position: fixed;
    /* raise z-index to cover */
    z-index: 1;

    /* 100% - .header-wrap can be a percentage - 
         also covers full width when zoomed */
    width: 100%;
}

.header-bg {
    background-color: rgb(107, 3, 3);
}


.wtf {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
}

.wtf div {
    width: 100%;
    height: 100%;
    background: rgb(21, 10, 10);
    animation: up 5s ease-in forwards;
    transform: scaleY(0);
    /* background: rgb(211, 34, 3); */
}

@keyframes up {

    100% {
        transform-origin: top;
        /* transform: scaleY(0);*/
        transform: translateY(100%);
    }

    0% {
        transform-origin: bottom;
        /* transform: scaleY(1); */
        transform: translateY(-0%);
    }
}

.hide {
    visibility: hidden;
}
</style>
