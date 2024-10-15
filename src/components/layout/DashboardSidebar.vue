<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/test-management">Test Management</router-link></li>
      </ul>
    </nav>
    <div class="title">
      <h2>Reader Test List</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardSidebar'
}
</script>

<style scoped>
.sidebar {
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
nav {
  padding: 0 !important;
}
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}
nav ul li {
  margin-bottom: 10px;
}
nav ul li a {
  color: #7268F9;
  text-decoration: none;
  font-weight: 500;
  line-height: 14px;
  transition: color 0.3s;
}
nav ul li a:hover {
  color: #3700B3;
}
.title h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #FFFFFFDE;
}
</style>