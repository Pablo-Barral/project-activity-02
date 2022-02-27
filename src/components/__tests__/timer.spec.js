import timer from '@/components/timer/index.vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'


const localVue = createLocalVue()

localVue.use(Vuex)

describe('index.vue', () => {
  it('renders props.seconds when passed', () => {
    const seconds = '600'
    const wrapper = shallowMount(timer, {
      propsData: { seconds },
      mocks: {
        $store: {
          state: {
            seconds: 600
          }
        }
      }
    })
    expect(wrapper.text()).toEqual(seconds)
  })
})