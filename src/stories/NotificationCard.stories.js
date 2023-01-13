import NotificationCard from "@/components/NotificationCard.vue";
import notifications from "@/data/data.json";

export default {
  title: "NotificationCard",
  component: NotificationCard,
};

const Template = (args) => ({
  components: { NotificationCard },
  setup() {
    return { args };
  },
  /* html */
  template: `<NotificationCard v-bind="args" style="width: 80vw"/>
      `,
});
export const Playground = Template.bind({});
Playground.args = {
  notification: {
    user: "Angela Gray",
    avata: "images/avatar-angela-gray.webp",
    type: "follow",
    description: "followed you",
    reference: null,
    time: "5m ago",
    unread: true,
  },
};

export const PostReactionUnread = Template.bind({});
PostReactionUnread.args = {
  notification: notifications[0],
};
export const FollowUnread = Template.bind({});
FollowUnread.args = {
  notification: notifications[1],
};
export const GroupJoinUnread = Template.bind({});
GroupJoinUnread.args = {
  notification: notifications[2],
};

export const MessageSent = Template.bind({});
MessageSent.args = {
  notification: notifications[3],
};

export const PictureComment = Template.bind({});
PictureComment.args = {
  notification: notifications[4],
};

export const PostReaction = Template.bind({});
PostReaction.args = {
  notification: notifications[5],
};

export const GroupLeft = Template.bind({});
GroupLeft.args = {
  notification: notifications[6],
};
