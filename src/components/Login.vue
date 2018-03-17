<template>
  <div class="row">
    <div>
    <div>
      <p>Logged in as: <br /> {{currentUser.email}}</p>
    </div>
    <form>
      <div class="form-group row">
        <label class="col-sm-3">Email address</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="signIn">Sign in</button>
      <button class="btn btn-danger" @click.prevent="signOut">Sign out</button>
    </form>
  </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { store } from '../store/store'

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      store.dispatch('setUser', user);
    } else {
      store.dispatch('setUser', null);
    }
  });

  export default {
    methods: {
      signIn() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          if(error == 'auth/wrong-password') {
            alert('Wrong password')
          } else {
            alert(errorMessage);
          }
        })

      },
      signOut() {
        firebase.auth().signOut().then(function() {
          alert('logged out');
        }).catch(function(error) {
          alert(error);
        });
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    }
  }
</script>
