				

			    function toggleSignIn() {
          if (firebase.auth().currentUser) {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
          } else {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            if (email.length < 4) {
              alert('Please enter an email address.');
              return;
            }
            if (password.length < 4) {
              alert('Please enter a password.');
              return;
            }
            // Sign in with email and pass.
            // [START authwithemail]
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
              window.location.href="./Home.html";
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // [START_EXCLUDE]
              if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
              document.getElementById('quickstart-sign-in').disabled = false;
              // [END_EXCLUDE]
            });
            // [END authwithemail]

            alert("successfully");
            // firebase.auth().onAuthStateChanged(function(user){
            //   if(user){
            //     window.location.href="./Home.html";
            //   }
            // });
          }
          document.getElementById('quickstart-sign-in').disabled = true;
        }
        /**
         * Handles the sign up button press.
         */
        function handleSignUp() {
           
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
          // Sign in with email and pass.
          // [START createwithemail]
          firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
            //success
            window.location.href="./Home.html";

          }).catch(function(error) {

             
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          });
          alert("user was created successfully.");
          // [END createwithemail]
        }

        function initApp() {
            
            firebase.auth().onAuthStateChanged(function(user) {
             
              if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;


                localStorage.isLoggedIn = email;
                
                if (!emailVerified) {
                  //document.getElementById('quickstart-verify-email').disabled = false;
                }
                // [END_EXCLUDE]
              } else {
              
                document.getElementById('quickstart-sign-in').textContent = 'Sign in';
             
              }
             
              document.getElementById('quickstart-sign-in').disabled = false;
             
            });
             
          }
          window.onload = function() {
            initApp();
          };



        