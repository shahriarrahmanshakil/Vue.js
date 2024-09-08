<script setup>


</script>

<template>
    <div>
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
</template>

<style>
        *{
            margin:0 ;
            padding: 0;
            box-sizing: border-box;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #1d70a0;
        }

        li {
            float: left;
        }

        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        li a:hover {
            background-color: #111;
        }
</style>