import NotificationList from "@/components/NotificationList.vue";
// DATA
import notifications from "@/data/data.json";

export default {
  title: "NotificationList",
  component: NotificationList,
};

const Template = (args) => ({
  components: { NotificationList },
  setup() {
    return { args };
  },
  /* html */
  template: `<NotificationList v-bind="args" style="width: 80vw"/>
      `,
});

export const Playground = Template.bind({});
Playground.args = {
  notifications: notifications,
};
