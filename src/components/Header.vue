<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <router-link :to="{name: 'homeLink'}" tag="li">
            <a class="nav-link">home</a>
          </router-link>
          <router-link :to="{name: 'menuLink'}" tag="li">
            <a class="nav-link">menu</a>
          </router-link>
          <router-link :to="{name: 'aboutLink'}" tag="li">
            <a class="nav-link">about</a>
          </router-link>
          <router-link :to="{name: 'adminLink'}" tag="li">
            <a class="nav-link">admin</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>


<style>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>
