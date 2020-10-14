const signUp = ()=>{
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(email)
    firebase.auth().createUserWithEmailAndPassword(email, password).
    then(result=>{
        console.log(result);
    }).
    catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        console.log(errorMessage);

      });email-password.html
}

document.querySelector("#submit-btn").addEventListener("click", signUp);


const login = ()=>{
    const email = document.querySelector("#sign-in-email").value;
    const password = document.querySelector("#sign-in-password").value;

  

    firebase.auth().signInWithEmailAndPassword(email, password).
    then(result=>{
        console.log(result);
    }).
    catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });email-password.html

}


document.querySelector("#sign-in-submit-btn").addEventListener("click", login);