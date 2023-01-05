import NotificationsPage from "@/components/NotificationsPage.vue";

export default {
  title: "NotificationsPage",
  component: NotificationsPage,
};

const Template = (args) => ({
  components: { NotificationsPage },
  setup() {
    return {};
  },
  /* html */
  template: `<NotificationsPage />
      `,
});
export const Playground = Template.bind({});
