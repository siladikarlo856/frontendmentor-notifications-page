<template>
  <div
    class="notification-card-container"
    :class="{ 'unread-notification': notification?.unread }"
  >
    <div class="left-container">
      <div class="avatar-container">
        <img :src="notification?.avatar" alt="user-avatar" />
      </div>
      <div class="info-container">
        <div class="notification-text">
          <span class="link user">{{ notification?.user }}</span>
          <span data-testid="notification-description">{{
            notification?.description
          }}</span>
          <span
            v-if="isReferenceLink"
            class="link reference"
            data-testid="reference"
          >
            {{ notification?.reference }}</span
          >
          <div v-if="notification?.unread" class="unread-sign-container">
            <span class="unread-sign"> </span>
          </div>
        </div>
        <div class="created-at">{{ notification?.time }}</div>
        <div v-if="isMessageVisible" class="message-container">
          {{ notification?.reference }}
        </div>
      </div>
    </div>
    <div v-if="isImageVisible" class="right-container">
      <img :src="notification?.reference!" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { NotificationDtoModel } from "@/models/NotificationDtoModel";
import { computed } from "vue";
import { NotificationType } from "@/types/NotificationDto";

const props = defineProps({
  notification: NotificationDtoModel,
});

const isReferenceLink = computed(() => {
  if (
    props.notification?.type === NotificationType.GroupJoin ||
    props.notification?.type === NotificationType.GroupLeft ||
    props.notification?.type === NotificationType.PostReaction
  ) {
    return true;
  } else {
    return false;
  }
});

const isMessageVisible = computed(() => {
  if (props.notification?.type === NotificationType.MessageSent) {
    return true;
  } else {
    return false;
  }
});

const isImageVisible = computed(
  () => props.notification?.type === NotificationType.PictureComment
);
</script>
<style scoped>
.notification-card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border-radius: var(--border-radius-normal);
  padding: var(--padding-normal);
  background-color: var(--color-card-normal);
}

.left-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}
.avatar-container,
.right-container {
  height: 3rem;
}

img {
  height: 100%;
}

.info-container {
  color: var(--color-card-info-text);
}
.link {
  font-weight: var(--font-weight-bold);
  cursor: pointer;
}

.link:hover {
  color: var(--c-primary-blue);
}

.user {
  color: var(--color-card-user);
}

.reference {
  color: var(--color-card-reference);
}

.unread-sign-container {
  display: inline-block;
  position: relative;
  margin-left: 0.25rem;
  height: 1rem;
}

.unread-sign {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--c-primary-red);
  border-radius: 50%;
  position: absolute;
  top: 7px;
}

.created-at {
  color: var(--color-card-info-created-at);
}

.unread-notification {
  background-color: var(--color-card-unread);
}

.message-container {
  border: 1px solid var(--c-neutral-light-grayish-blue-1);
  border-radius: var(--border-radius-normal);
  padding: var(--padding-normal);
  margin-top: 1rem;
  margin-right: 2rem;
  cursor: pointer;
}
.message-container:hover {
  background-color: var(--c-neutral-light-grayish-blue-1);
}

.right-container img {
  cursor: pointer;
}
</style>
