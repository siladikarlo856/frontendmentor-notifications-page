import NotificationCard from "@/components/NotificationCard.vue";

export default {
  title: "NotificationCard",
  component: NotificationCard,
};

const Template = (args) => ({
  components: { NotificationCard },
  setup() {
    return {};
  },
  /* html */
  template: `<NotificationCard />
      `,
});
export const Playground = Template.bind({});
