import { shallowMount } from "@vue/test-utils";
import { Signup } from "@/components/auth/Signup";

test("Signup", () => {
  // render the component
  const wrapper = shallowMount(Signup);

  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({ name: " ".repeat(7) });

  // assert the error is rendered
  expect(wrapper.find(".error").exists()).toBe(true);

  // update the name to be long enough
  wrapper.setData({ name: "Lachlan" });

  // assert the error has gone away
  expect(wrapper.find(".error").exists()).toBe(false);
});

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
