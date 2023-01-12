<template>
  <div class="notification-card-container unread-notification">
    <div class="avatar-container">
      <img src="images/avatar-angela-gray.webp" alt="user-avatar" />
    </div>
    <div class="info-container">
      <div class="notification-text">
        <span class="user link">Angela Gray</span> followed you
      </div>
      <div class="created-at">5m ago</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.notification-card-container {
  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: var(--border-radius-normal);
  padding: var(--padding-normal);
  background-color: var(--color-card-normal);
}
.avatar-container {
  height: 3rem;
}

img {
  height: 100%;
}

.info-container {
  color: var(--color-card-info-text);
}
.link {
  color: var(--color-card-info-user);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
}

.link:hover {
  color: var(--c-primary-blue);
}

.notification-text::after {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--c-primary-red);
  border-radius: 50%;
  content: "";
  margin-left: 0.2rem;
  vertical-align: middle;
}

.created-at {
  color: var(--color-card-info-created-at);
}

.unread-notification {
  background-color: var(--color-card-unread);
}
</style>
