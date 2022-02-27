import { shallowMount } from '@vue/test-utils'
import title from '@/components/title/index.vue'

describe('index.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'sample title'
    const wrapper = shallowMount(title, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})