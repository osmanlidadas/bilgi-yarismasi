<template>
   <div>
    <Navbar />
<router-view>
   
</router-view>
    <Footer />
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import Navbar from "./NavBar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
export default {
    components: {
        Navbar,
        Dashboard,
        Footer,
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>
