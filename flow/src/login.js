import router from '@/router'

function fetchAccounts(){
    /** Fetches list of accounts
     *  TODO: Rework to use firestore/whatever db we decide
     *  FIX: Currently returns hardcoded list
     * */
    return [{'name': 'admin', 'password': 'admin'}, {'name':'Andrew', 'password': '1'}]
}

function addAccount(){
    /** Function to add account to storage */
}

export function validateSignIn(signup) {
    // Validates account login or new account sign up
    // Navigates to home page
    let accounts = fetchAccounts()
    let name = document.getElementById('username')
    let password = document.getElementById('password')

    if (!signup){   // Validate Login
        for (var account in accounts){      
            if (name.value === accounts[account].name){     // Validate Account name
                if (password.value === accounts[account].password){     //Validate password match
                    router.push('/home');   // Navigate to home page
                    return
                } 
                else {    // Invalid password
                    buildPanel(signup, 'Invalid Password.')
                    return
                }
            }
            else{
                buildPanel(signup, 'Account name not found.')
                return
            }
        }   // End for loop
    }

    else {   // Validate Sign up
        let confirm_password = document.getElementById('confirm-password')

        for (var account in accounts){ 
            if (name.value === accounts[account].name){     //Break if account name exists
                buildPanel(signup, 'Account name already exists.')
                return
            }
        }
        // Assuming valid account name
        if (password.value === confirm_password.value){ // Check passwords match
            // Add new account
            addAccount()
            router.push('/home');   // Navigate to home page
            return
        } else {
            // Password mismatch
            buildPanel(signup, 'Passwords do not match.')
        }
    }
}

export function buildPanel(signup = false, error_str = ""){
    console.log("Building panel with singup value ", signup)
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
    err_msg.id = 'error-msg'
    err_msg.textContent = error_str
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