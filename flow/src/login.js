import router from '@/router'




export function validateSignIn(signup) {
    // Validates account login or new account sign up
    // Navigates to 
    console.log('Validate login')
    router.push('/home');
}

export function showSignUp(){
    // Make Panel showing sign up elements

}

export function buildPanel(signup=false){
    // Makes Input UI panel for login or sign up
    const loginbox = document.getElementById('login-box')
    loginbox.innerHTML = ''
    loginbox.classList.add('rect')

    //Element variables
    let err_msg = document.createElement('h5');
    let name_label = document.createElement('label');
    let name_input = document.createElement('input');
    let password_label = document.createElement('label');
    let password_input = document.createElement('input');
    let confirm_button = document.createElement('button')
  
    err_msg.classList.add('error');
    name_label.for = 'username';
    name_label.textContent = 'Username:'
    name_input.id = 'username'
    name_input.classList.add('login-box')
    name_input.type = 'text'
    name_input.placeholder = 'Enter Username'
    password_label.for = 'password'
    password_label.textContent = "Password:"
    password_input.id = 'password'
    password_input.type = 'password'
    password_input.placeholder = 'Enter Password'


    //Add children to login-box
    loginbox.appendChild(err_msg)
        .appendChild(name_label)
        .appendChild(name_input)
        
    loginbox.appendChild(password_label)
        .appendChild(password_input)
    
    // if sign up field
    if (signup){
        let confirm_pass_label = document.createElement('label')
        let confirm_pass_input = document.createElement('input')
        let not_robot = document.createElement('input')

        confirm_pass_label.textContent = 'Confirm Password'
        confirm_pass_input.id = 'confirm-password'
        confirm_pass_input.type = 'password'
        confirm_pass_input.placeholder = 'Confirm Password'
        not_robot.type = 'checkbox'
        not_robot.textContent = 'I am not a Robot.'

        loginbox.appendChild(confirm_pass_label).appendChild(confirm_pass_input).appendChild(not_robot)
    } else {

    }
    
    confirm_button.textContent = 'Confirm'
    confirm_button.classList.add('login-button')
    confirm_button.addEventListener("click", () => validateSignIn(signup));
    loginbox.appendChild(confirm_button)
}