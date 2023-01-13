<template>
  <NotificationCard
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification"
    class="notification-card"
  />
</template>
<script setup lang="ts">
import type { NotificationDtoModel } from "@/models/NotificationDtoModel";
import type { PropType } from "vue";
import NotificationCard from "./NotificationCard.vue";

const props = defineProps({
  notifications: Array as PropType<NotificationDtoModel[]>,
});
</script>
<style scoped>
.notification-card {
  margin-bottom: 1rem;
}
</style>
