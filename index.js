
function generatePassword(length) {

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+=[]{},|:;<>.?/";
    let password = ""


    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    return password
}


function generatePasswords() {
    let passwordOne = generatePassword(12); 
    let passwordTwo = generatePassword(12); 


    document.getElementById("boxone").textContent = passwordOne
    document.getElementById("boxtwo").textContent = passwordTwo
}


document.getElementById("generate-button").onclick = generatePasswords
