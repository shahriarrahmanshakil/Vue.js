<script setup>


</script>

<template>
    <div>
        <header class="header_section long_section px-0">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <RouterLink class="navbar-brand" to="/">
                <span>
                    Edgecut
                </span>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    <ul class="navbar-nav  ">
                    <li class="nav-item active">
                        <RouterLink class="nav-link" to ="/">Home <span class="sr-only">(current)</span></RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about"> About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/furnitures">Furnitures</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
                    </li>
                    </ul>
                </div>
                <div class="quote_btn-container">
                    <a href="">
                    <span>
                        Login
                    </span>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <form class="form-inline">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                    </form>
                </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<style scoped>

</style>