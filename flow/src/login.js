import router from '@/router'
import { useAccountStore, useLoggedIn } from '@/stores/storeAccounts'
import $ from 'jquery'  // This script uses jquery to validate sign in info



export function fetchAccounts() {
    /** Calls API to web DB, then pinia store function
     * to retrieve accounts and return list of dictionaries
     */
    const accountStore = useAccountStore();
    if (accountStore.accounts.length < 1){  // Initalize account list
        accountStore.fetchAccounts().then(() => { //Load accounts into store
            let temp = accountStore.accounts;
            
            console.log('Format: ', temp[0]['name'], typeof(temp[0]))
        });
    }

    let accounts = []   // Store parsed data
    for (let x in accountStore.accounts){
        console.log(accountStore.accounts[x]['name'])
        accounts.push(accountStore.accounts[x])
    }
    console.log('Retunring accounts ',accounts)

    return accounts

}

export function validateSignIn(signup) {
    // Validates account login or new account sign up
    // Navigates to home page

        let accounts = fetchAccounts();
    
        let name = $('#username');
        let password = $('#password');
    
        if (!signup) {   // Validate Login
            for (var account in accounts) {
                if (name.val() === accounts[account].name) {     // Validate Account name
                    if (password.val() === accounts[account].password) {     // Validate password match
                        const userStore = useLoggedIn();
                        userStore.user = name.val();
                        router.push('/home');   // Navigate to home page
                        return;
                    } 
                    else {    // Invalid password
                        buildPanel(signup, 'Invalid Password.');
                        return;
                    }
                }
            }
            buildPanel(signup, 'Account name not found.');  // If account name is not found
            return;
        }
    
        else {   // Validate Sign up
            let confirm_password = $('#confirm-password');
    
            for (var account in accounts) { 
                if (name.val() === accounts[account].name) {     // Break if account name exists
                    buildPanel(signup, 'Account name already exists.');
                    return;
                }
            }
    
            // Assuming valid account name
            if (password.val() === confirm_password.val()) { // Check passwords match
                // Add new account
                const userStore = useLoggedIn();
                userStore.user = name.val();
                router.push('/home');   // Navigate to home page
                return;
            } else {
                // Password mismatch
                buildPanel(signup, 'Passwords do not match.');
            }
        }
    }


export function buildPanel(signup = false, error_str = ""){
    console.log("Building panel with singup value ", signup)
    // Makes Input UI panel for login or sign up
    const loginbox = $('#login-box');
    loginbox.empty();  // Clear the login box
    loginbox.addClass('rect');  // Add 'rect' class to the login box

    // Element variables using jQuery
    let err_msg = $('<h5></h5>').addClass('error').attr('id', 'error-msg').text(error_str);
    let name_label = $('<label></label>').attr('for', 'username').text('Username:');
    let name_input = $('<input>').attr({
        id: 'username',
        class: 'login-box',
        type: 'text',
        placeholder: 'Enter Username'
    });
    let password_label = $('<label></label>').attr('for', 'password').text('Password:');
    let password_input = $('<input>').attr({
        id: 'password',
        type: 'password',
        placeholder: 'Enter Password'
    });
    let confirm_button = $('<button></button>').text('Confirm').addClass('login-button');

    // Add children to login-box
    loginbox.append(err_msg)
            .append(name_label)
            .append(name_input)
            .append(password_label)
            .append(password_input);

    // if sign up field
    if (signup) {
        let confirm_pass_label = $('<label>').text('Confirm Password');
        let confirm_pass_input = $('<input>').attr({
            id: 'confirm-password',
            type: 'password',
            placeholder: 'Confirm Password'
        });

        loginbox.append(confirm_pass_label)
                .append(confirm_pass_input)
    
    }

    // Event listeners with jQuery
    confirm_button.on('click', () => validateSignIn(signup));

    [name_input, password_input].forEach(input => {
        $(input).on('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                validateSignIn(signup);
            }
        });
    });

    if (signup) {
        const confirm_pass_input = $('#confirm-password');
        confirm_pass_input.on('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                validateSignIn(signup);
            }
        });
    }

    loginbox.append(confirm_button);
}