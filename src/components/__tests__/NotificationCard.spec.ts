import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import NotificationCard from "../NotificationCard.vue";
import { NotificationDtoModel } from "@/models/NotificationDtoModel";
import {
  NotificationType,
  type NotificationDto,
} from "@/types/NotificationDto";

const notificationTextIdLocator = '[data-testid="notification-description"]';
const referenceIdLocator = '[data-testid="reference"]';

const unreadNotificationObject = new NotificationDtoModel({
  id: "1",
  user: "Karlo Siladi",
  avatar: "images/avatar-karlo-siladi.webp",
  type: "follow",
  description: "followed you",
  reference: null,
  time: "1m ago",
  unread: true,
} as NotificationDto);

const readNotificationObject = new NotificationDtoModel({
  id: "1",
  user: "Karlo Siladi",
  avatar: "images/avatar-karlo-siladi.webp",
  type: "follow",
  description: "followed you",
  reference: null,
  time: "1m ago",
  unread: false,
} as NotificationDto);

const followNotificationObject = new NotificationDtoModel({
  id: "1",
  user: "Karlo Siladi",
  avatar: "images/avatar-karlo-siladi.webp",
  type: "follow",
  description: "followed you",
  reference: null,
  time: "1m ago",
  unread: false,
} as NotificationDto);

const groupJoinNotificationObject = new NotificationDtoModel({
  id: "1",
  user: "Karlo Siladi",
  avatar: "images/avatar-karlo-siladi.webp",
  type: "group-join",
  description: "followed you",
  reference: "Group name",
  time: "1m ago",
  unread: false,
} as NotificationDto);

describe("NotificationCard", () => {
  it("when no data is passed, should render properly", () => {
    const wrapper = mount(NotificationCard);
  });

  it("when unread notification is passed, should render unread card", () => {
    const wrapper = mount(NotificationCard, {
      props: {
        notification: unreadNotificationObject,
      },
    });

    expect(wrapper.find(".unread-notification").exists()).toBe(true);
    expect(wrapper.find(".unread-sign-container").exists()).toBe(true);
  });

  it("when read notification is passed, should render unread card", () => {
    const wrapper = mount(NotificationCard, {
      props: {
        notification: readNotificationObject,
      },
    });

    expect(wrapper.find(".unread-notification").exists()).toBe(false);
    expect(wrapper.find(".unread-sign-container").exists()).toBe(false);
  });

  it(`renders unread ${NotificationType.Follow} notification type`, () => {
    const wrapper = mount(NotificationCard, {
      props: {
        notification: followNotificationObject,
      },
    });

    expect(wrapper.find(".reference").exists()).toBe(false);
    expect(wrapper.find(".right-container").exists()).toBe(false);
    expect(wrapper.find(".unread-sign-container").exists()).toBe(false);
    expect(wrapper.find(".message-container").exists()).toBe(false);
  });

  it(`renders unread ${NotificationType.GroupJoin} notification type`, () => {
    const wrapper = mount(NotificationCard, {
      props: {
        notification: groupJoinNotificationObject,
      },
    });

    expect(wrapper.find(".reference").exists()).toBe(true);
    expect(wrapper.find(".right-container").exists()).toBe(false);
    expect(wrapper.find(".unread-sign-container").exists()).toBe(false);
    expect(wrapper.find(".message-container").exists()).toBe(false);

    expect(wrapper.find(notificationTextIdLocator).text()).toBe(
      groupJoinNotificationObject.description
    );
    expect(wrapper.find(referenceIdLocator).text()).toBe(
      groupJoinNotificationObject.reference
    );
  });
});
