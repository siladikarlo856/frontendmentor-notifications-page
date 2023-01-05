import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NotificationsPage from "../NotificationsPage.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(NotificationsPage);
    expect(true).toBe(false);
  });
});
