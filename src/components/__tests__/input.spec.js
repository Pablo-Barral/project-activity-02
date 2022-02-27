import input from '@/components/input/index.vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('index.vue', () =>{
    it('renders inputs when passed', () => {
        const type = 'text'
        const sample = 'User'
        const fieldData = ''
        const wrapper = shallowMount(input, {
            propsData: { type, sample, fieldData},
            mocks: {
                $store: {
                  state: {
                    loginError: false,
                  }
                }
              }
        })
        expect(wrapper.text()).toMatch(fieldData)
    })
})