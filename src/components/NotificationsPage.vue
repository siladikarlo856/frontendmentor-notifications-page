<template>
  <div class="notifications-page-container">
    <div class="header-container">
      <div class="left-container">
        <span class="notification-label">Notifications</span>
        <span class="notification-badge">{{ unreadNotificationCount }}</span>
      </div>
      <div class="right-container">
        <button @click="markAllAsRead">Mark all as read</button>
      </div>
    </div>
    <div class="notification-list-container">
      <NotificationList :notifications="notificationsRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationList from "./NotificationList.vue";
import notifications from "@/data/data.json";
import { ref, computed } from "vue";
import type { NotificationDto } from "@/types/NotificationDto";
import { NotificationDtoModel } from "@/models/NotificationDtoModel";

const notificationsRef = ref<NotificationDtoModel[]>(
  notifications.map((el) => new NotificationDtoModel(el as NotificationDto))
);
const unreadNotificationCount = computed(() => {
  let count = 0;
  notificationsRef.value.forEach((el) => {
    if (el.unread === true) count++;
  });
  return count;
});

function markAllAsRead() {
  notificationsRef.value.forEach((notification) => {
    notification.unread = false;
  });
}
</script>
<style>
body {
  background-color: var(--c-neutral-very-light-grayish-blue);
}
.notifications-page-container {
  width: 50vw;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.left-container .notification-label {
  font-size: var(--fs-notification-label);
  font-weight: var(--font-weight-bold);
}

.left-container .notification-badge {
  background-color: var(--c-primary-blue);
  color: var(--c-neutral-white);
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
  padding: 0.2rem 0.8rem;
  border-radius: var(--border-radius-small);
  margin-left: 1ch;
}

button {
  border: 0;
  background-color: transparent;
  color: var(--c-neutral-dark-grayish-blue);
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: var(--font-weight-normal);
  cursor: pointer;
}

button:hover {
  color: var(--c-primary-blue);
}

.notification-list-container {
  margin-top: 2rem;
}

@media only screen and (max-width: 600px) {
  * {
    font-size: 12px;
  }

  .notifications-page-container {
    width: 100vw;
    margin: 0;
  }

  .left-container .notification-label {
    font-size: 1.2rem;
  }

  .left-container .notification-badge,
  button {
    font-size: 1rem;
  }
}
</style>
