<template>
  <div class="sidebar">
<!--    <breadcrumb-comp :items="breadcrumbItems" v-if="breadcrumbItems.length" />-->
    <nav>
      <ul>
        <li v-for="(item, index) in breadcrumbItems" :key="index" class="breadcrumb-item">
          <router-link v-if="item.link" :to="item.link">{{ item.name }}</router-link>
          <span v-else>{{ item.name }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import breadcrumbComp from "@/components/breadcrumbComp.vue";
export default {
  name: 'DashboardSidebar',
  components: {
    // breadcrumbComp,
  },
  props: {
    breadcrumbItems: {
      type: Array,
      default: () => [],
    },
  },
};
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