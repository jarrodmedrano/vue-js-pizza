<template>
  <div class="row">
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
</template>

<script>
  import firebase from 'firebase'

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
    }
  }
</script>
