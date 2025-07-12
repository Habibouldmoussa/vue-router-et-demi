<script setup>
import { useRouteQuery } from "../libs/admin/index.js";
const query = useRouteQuery();
</script>

<template>
  <h1>Router Query: {{ query }}</h1>
</template>
