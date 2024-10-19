<script setup>
import Header from './components/common/Header.vue';
import Topbar from './components/common/Topbar.vue';
import Navbar from './components/common/Navbar.vue';
import CategorySidebar from './components/CategorySidebar.vue';
import CartSidebar from './components/CartSidebar.vue';
import NavSidebar from './components/NavSidebar.vue';

// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div>
        <!-- topbar -->
        <Topbar />

        <!-- header -->
        <Header> </Header>

        <!-- navbar -->
        <Navbar />
        
        <!-- category sidebar -->
        <CategorySidebar> </CategorySidebar>

        <!-- cart-sidebar -->
        <CartSidebar />

        <!-- nav-sidebar -->
        <NavSidebar/>
        <!-- mobile footer menu  -->
        <div class="mobile-menu">
            <a href="/" class="active router-link-exact-active" title="Home Page" aria-current="page"><i
                    class="fas fa-home"></i><span>Home</span></a>
            <button class="cate-btn" title="Category List">
                <i class="fas fa-list"></i><span>category</span>
            </button>
            <button class="cart-btn" title="Cartlist">
                <i class="fas fa-shopping-basket"></i><span>Cart</span><sup>2</sup>
            </button>
            <a href="/my-wishist" class="" title="Wishlist"><i
                    class="fas fa-bell"></i><span>Notifications</span><sup>0</sup></a>
            <a href="/user/profile" class="" title="My Account"><i class="fas fa-user"></i><span>My Account</span></a>
        </div>

        <div class="modal fade" id="product-view">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="modal-close icofont-close" data-bs-dismiss="modal"></button>
                    <div class="product-view">
                        <div class="row">
                            <div class="col-md-6 col-lg-6">
                                <div class="view-gallery">
                                    <div class="view-label-group">
                                        <label class="view-label new">new</label><label
                                            class="view-label off">-10%</label>
                                    </div>
                                    <ul class="preview-slider slider-arrow">
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                    </ul>
                                    <ul class="thumb-slider">
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                        <li><img src="@/assets/images/product/01.jpg" alt="product" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <div class="view-details">
                                    <h3 class="view-name">
                                        <a href="product-video.html">existing product name</a>
                                    </h3>
                                    <div class="view-meta">
                                        <p>SKU:<span>1234567</span></p>
                                        <p>BRAND:<a href="#">radhuni</a></p>
                                    </div>
                                    <div class="view-rating">
                                        <i class="active icofont-star"></i><i class="active icofont-star"></i><i
                                            class="active icofont-star"></i><i class="active icofont-star"></i><i
                                            class="icofont-star"></i><a href="product-video.html">(3 reviews)</a>
                                    </div>
                                    <h3 class="view-price">
                                        <del>$38.00</del><span>$24.00<small>/per kilo</small></span>
                                    </h3>
                                    <p class="view-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit non
                                        tempora magni repudiandae sint suscipit tempore quis maxime
                                        explicabo veniam eos reprehenderit fuga
                                    </p>
                                    <div class="view-list-group">
                                        <label class="view-list-title">tags:</label>
                                        <ul class="view-tag-list">
                                            <li><a href="#">organic</a></li>
                                            <li><a href="#">vegetable</a></li>
                                            <li><a href="#">chilis</a></li>
                                        </ul>
                                    </div>
                                    <div class="view-list-group">
                                        <label class="view-list-title">Share:</label>
                                        <ul class="view-share-list">
                                            <li>
                                                <a href="#" class="icofont-facebook" title="Facebook"></a>
                                            </li>
                                            <li>
                                                <a href="#" class="icofont-twitter" title="Twitter"></a>
                                            </li>
                                            <li>
                                                <a href="#" class="icofont-linkedin" title="Linkedin"></a>
                                            </li>
                                            <li>
                                                <a href="#" class="icofont-instagram" title="Instagram"></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="view-add-group">
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>add to cart</span>
                                        </button>
                                        <div class="product-action">
                                            <button class="action-minus" title="Quantity Minus">
                                                <i class="icofont-minus"></i></button><input class="action-input"
                                                title="Quantity Number" type="text" name="quantity" value="1" /><button
                                                class="action-plus" title="Quantity Plus">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="view-action-group">
                                        <a class="view-wish wish" href="#" title="Add Your Wishlist"><i
                                                class="icofont-heart"></i><span>add to
                                                wish</span></a><a class="view-compare" href="compare.html"
                                            title="Compare This Item"><i class="fas fa-random"></i><span>Compare
                                                This</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="banner-part">
            <div class="">
                <div class="row">
                    <div class="col-lg-12 order-0 order-lg-1 order-xl-1">
                        <div class="home-grid-slider slider-arrow slider-dots">
                            <a href="#"><img src="@/assets/images/banner/01.jfif" alt="" /></a><a href="#"><img
                                    src="@/assets/images/banner/02.jfif" alt="" /></a>
                            <a href="#"><img src="@/assets/images/banner/03.jfif" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section suggest-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h3 style="float: left">SHOP BY CATEGORIES</h3>
                        </div>
                    </div>
                </div>

                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/06.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <ul>
                                <li>
                                    <a class="suggest-card" href="shop-4column.html">
                                        <img src="@/assets/images/promo/home/07.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>

                            <h6 class="text-center mt-2">category name</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>recently sold items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/01.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text rate">Popular</label>
                                    <label class="view-label off">-2%</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/03.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/02.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/04.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/05.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/11.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/02.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/06.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/08.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/09.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Popular items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/01.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text rate">Popular</label>
                                    <label class="view-label off">-2%</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/03.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/02.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/04.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/05.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/11.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/02.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/06.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/08.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/09.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Feature items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/01.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text rate">Popular</label>
                                    <label class="view-label off">-2%</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/03.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/02.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/04.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/05.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/11.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/02.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/06.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/08.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                    href="product-video.html"><img src="@/assets/images/product/09.jpg"
                                        alt="product" /></a>
                            </div>
                            <div class="product-content">
                                <h6 class="product-name">
                                    <a href="product-video.html">Products Name</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del><span>$28<small></small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section newitem-part">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-heading">
                            <h2>collected new items</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ul class="new-slider slider-arrow">
                            <li>
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text new">New</label>
                                        </div>
                                        <button class="product-wish wish">
                                            <i class="fas fa-heart"></i></button><a class="product-image"
                                            href="product-video.html"><img src="@/assets/images/product/01.jpg"
                                                alt="product" /></a>
                                    </div>
                                    <div class="product-content">
                                        <h6 class="product-name">
                                            <a href="product-video.html">Products Name</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>$34</del><span>$28<small></small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text new">New</label>
                                        </div>
                                        <button class="product-wish wish">
                                            <i class="fas fa-heart"></i></button><a class="product-image"
                                            href="product-video.html"><img src="@/assets/images/product/05.jpg"
                                                alt="product" /></a>
                                    </div>
                                    <div class="product-content">
                                        <h6 class="product-name">
                                            <a href="product-video.html">Products Name</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>$34</del><span>$28<small></small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text sale">sale</label>
                                        </div>
                                        <button class="product-wish wish">
                                            <i class="fas fa-heart"></i></button><a class="product-image"
                                            href="product-video.html"><img src="@/assets/images/product/07.jpg"
                                                alt="product" /></a>
                                    </div>
                                    <div class="product-content">
                                        <h6 class="product-name">
                                            <a href="product-video.html">Products Name</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>$34</del><span>$28<small></small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text sale">sale</label>
                                        </div>
                                        <button class="product-wish wish">
                                            <i class="fas fa-heart"></i></button><a class="product-image"
                                            href="product-video.html"><img src="@/assets/images/product/01.jpg"
                                                alt="product" /></a>
                                    </div>
                                    <div class="product-content">
                                        <h6 class="product-name">
                                            <a href="product-video.html">Products Name</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>$34</del><span>$28<small></small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text sale">sale</label>
                                        </div>
                                        <button class="product-wish wish">
                                            <i class="fas fa-heart"></i></button><a class="product-image"
                                            href="product-video.html"><img src="@/assets/images/product/06.jpg"
                                                alt="product" /></a>
                                    </div>
                                    <div class="product-content">
                                        <h6 class="product-name">
                                            <a href="product-video.html">Products Name</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>$34</del><span>$28<small></small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text sale">sale</label>
                                        </div>
                                        <button class="product-wish wish">
                                            <i class="fas fa-heart"></i></button><a class="product-image"
                                            href="product-video.html"><img src="@/assets/images/product/04.jpg"
                                                alt="product" /></a>
                                    </div>
                                    <div class="product-content">
                                        <h6 class="product-name">
                                            <a href="product-video.html">Products Name</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>$34</del><span>$28<small></small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart">
                                            <i class="fas fa-shopping-basket"></i><span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="news-part" style="background: url(@/assets/images/newsletter.jpg) no-repeat center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 col-lg-6 col-xl-7">
                        <div class="news-text">
                            <h2>Get 20% Discount for Subscriber</h2>
                            <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-6 col-xl-5">
                        <form class="news-form">
                            <input type="text" placeholder="Enter Your Email Address" /><button>
                                <span><i class="icofont-ui-email"></i>Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="intro-part">
            <div class="container">
                <div class="row intro-content">
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon"><i class="fas fa-truck"></i></div>
                            <div class="intro-content">
                                <h5>free home delivery</h5>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon"><i class="fas fa-sync-alt"></i></div>
                            <div class="intro-content">
                                <h5>instant return policy</h5>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon"><i class="fas fa-headset"></i></div>
                            <div class="intro-content">
                                <h5>quick support system</h5>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon"><i class="fas fa-lock"></i></div>
                            <div class="intro-content">
                                <h5>secure payment way</h5>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer-part">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xl-3">
                        <div class="footer-widget">
                            <a class="footer-logo" href="#"><img src="@/assets/images/logo.png" alt="logo" /></a>
                            <p class="footer-desc">
                                Adipisci asperiores ipsum ipsa repellat consequatur repudiandae
                                quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
                            </p>
                            <ul class="footer-social">
                                <li><a class="icofont-facebook" href="#"></a></li>
                                <li><a class="icofont-twitter" href="#"></a></li>
                                <li><a class="icofont-linkedin" href="#"></a></li>
                                <li><a class="icofont-instagram" href="#"></a></li>
                                <li><a class="icofont-pinterest" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="footer-widget contact">
                            <h3 class="footer-title">contact us</h3>
                            <ul class="footer-contact">
                                <li>
                                    <i class="icofont-ui-email"></i>
                                    <p>
                                        <span>support@globalbazar.com</span><span>globalbazar@gmail.com</span>
                                    </p>
                                </li>
                                <li>
                                    <i class="icofont-ui-touch-phone"></i>
                                    <p><span>+8801722260010</span><span>+8801xxxxxxxx</span></p>
                                </li>
                                <li>
                                    <i class="icofont-location-pin"></i>
                                    <p>1Hd- 50, 010 Rangpur,Bangladesh</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="footer-widget">
                            <h3 class="footer-title">quick Links</h3>
                            <div class="footer-links">
                                <ul>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Order History</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">Best Seller</a></li>
                                    <li><a href="#">New Arrivals</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Location</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Carrer</a></li>
                                    <li><a href="#">Faq</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="footer-widget">
                            <h3 class="footer-title">Download App</h3>
                            <p class="footer-desc">
                                Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                                autem obcaecati minus ducimus totam reprehenderit
                                exercitationem!
                            </p>
                            <div class="footer-app">
                                <a href="#"><img src="@/assets/images/google-store.png" alt="google" /></a><a
                                    href="#"><img src="@/assets/images/app-store.png" alt="app" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="footer-bottom">
                            <p class="footer-copytext">
                                &copy; All Copyrights Reserved by
                                <a target="_blank" href="https://themeforest.net/user/w3 Coders">W3 Coders</a>
                            </p>
                            <div class="footer-card">
                                <a href="#"><img src="@/assets/images/payment/jpg/01.jpg" alt="payment" /></a><a
                                    href="#"><img src="@/assets/images/payment/jpg/02.jpg" alt="payment" /></a><a
                                    href="#"><img src="@/assets/images/payment/jpg/03.jpg" alt="payment" /></a><a
                                    href="#"><img src="@/assets/images/payment/jpg/04.jpg" alt="payment" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped></style>
