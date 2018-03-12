<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
    <p>Click on the links below for more info:</p>
    <nav class="navbar navbar-expand-md navbar-light">
      <ul class="navbar-nav">
        <router-link :to="historyLink" tag="li">
          <a class="nav-link">our history</a>
        </router-link>
        <router-link :to="contactLink" tag="li">
          <a class="nav-link">contact us</a>
        </router-link>
        <router-link :to="orderingLink" tag="li">
          <a class="nav-link">ordering info</a>
        </router-link>
        <router-link :to="deliveryLink" tag="li">
          <a class="nav-link">delivery</a>
        </router-link>
      </ul>
  </nav>
    <router-view></router-view>
        <br />
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        historyLink: '/history',
        contactLink: '/contact',
        orderingLink: '/ordering',
        deliveryLink: '/delivery'
      }
    }
  }
</script>
