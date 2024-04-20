<template>
    <div>
      <div class="header">
        <h2>Welcome, {{ loggedInUsername }}!</h2>
        <button @click="logout">Logout</button>
      </div>
      <!-- Dashboard content goes here -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const loggedInUsername = ref('');
  
  // Fetch username from route params
  const getLoggedInUsername = () => {
    const { params } = router.currentRoute.value;
    loggedInUsername.value = params.username;
  };
  
  // Fetch username on component mount
  onMounted(getLoggedInUsername);
  
  const logout = () => {
    // Perform logout logic here
    // For example, clear session storage, redirect to login page, etc.
    router.push('/');
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  </style>
  