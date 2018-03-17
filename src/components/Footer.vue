<template>
  <footer>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'homeLink'}">
            <a class="nav-link">home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'menuLink'}">
            <a class="nav-link">menu</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'adminLink'}">
            <a class="nav-link">admin</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
