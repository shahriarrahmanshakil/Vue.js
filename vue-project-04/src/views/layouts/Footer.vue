<script setup>

</script>

<template>
    <div>
        <footer>
            <div class="footer-content">
                <div class="footer-section about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.</p>
                </div>
                <div class="footer-section links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section social">
                    <h2>Follow Us</h2>
                    <a href="#" class="social-icon facebook">Facebook</a>
                    <a href="#" class="social-icon twitter">Twitter</a>
                    <a href="#" class="social-icon instagram">Instagram</a>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2024 Your Company Name. All rights reserved.
            </div>
        </footer>
        
    </div>
</template>

<style scoped>
    /* Reset some default styles */
    body, h2, p, ul, li, a {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    footer {
        background-color: #333;
        color: #fff;
        padding: 20px 0;
        text-align: center;
    }

    .footer-content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .footer-section {
        flex: 1;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .footer-section h2 {
        margin-bottom: 10px;
        font-size: 1.5em;
    }

    .footer-section p {
        line-height: 1.6;
    }

    .footer-section ul {
        list-style: none;
    }

    .footer-section ul li {
        margin-bottom: 10px;
    }

    .footer-section ul li a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s;
    }

    .footer-section ul li a:hover {
        color: #f0a500;
    }

    .social-icon {
        display: inline-block;
        margin: 0 10px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        padding: 10px;
        border-radius: 50%;
        transition: background-color 0.3s, transform 0.3s;
    }

    .social-icon:hover {
        background-color: #555;
        transform: scale(1.1);
    }

    .footer-bottom {
        font-size: 0.8em;
        border-top: 1px solid #444;
        padding-top: 10px;
    }
</style>