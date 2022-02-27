import textContent from '@/components/textContent/index.vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('index.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'sample text'
    const wrapper = shallowMount(textContent, {
      propsData: { text },
      mocks: {
        $store: {
          state: {
            loginError: false
          }
        }
      }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
