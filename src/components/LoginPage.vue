<template>
    <div>
   <h1>Login Page</h1>
 </div>
 <div class="login-container">
   <form @submit.prevent="login" class="login-form">
     <div class="form-group">
       <label for="username">Username:</label>
       <input type="text" id="username" v-model="username" required>
     </div>
     <div class="form-group">
       <label for="password">Password:</label>
       <input type="password" id="password" v-model="password" required>
     </div>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');

const login = () => {
 // Basic validation
 if (!username.value || !password.value) {
   alert('Please enter both username and password.');
   return;
 }

 // Simulate login process
 if (username.value === 'admin' && password.value === 'password') {
   // Replace this with your actual login logic, such as API call
   console.log('Login successful');
   // Redirect to dashboard with username parameter
   router.push({ path: `/dashboard/${username.value}` });
 } else {
   alert('Invalid username or password.');
   // Clear password field
   password.value = '';
 }
};
</script>

<style scoped>
.login-container {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
}

.login-form {
 width: 300px;
 padding: 20px;
 border: 1px solid #ccc;
 border-radius: 5px;
 background-color: #f9f9f9;
}

.form-group {
 margin-bottom: 10px;
}

label {
 display: block;
 font-weight: bold;
}

input[type="text"],
input[type="password"] {
 width: 100%;
 padding: 8px;
 border: 1px solid #ccc;
 border-radius: 3px;
}

button {
 width: 100%;
 padding: 10px;
 background-color: #007bff;
 color: #fff;
 border: none;
 border-radius: 3px;
 cursor: pointer;
}

button:hover {
 background-color: #0056b3;
}
</style>

