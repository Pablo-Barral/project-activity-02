import weather from '@/components/weather/index.vue'
import { shallowMount } from '@vue/test-utils'

describe('index.vue', () => {
  it('renders weather icon when passed', async () => {
      const iconShow = 'cloudy'
      const mockSource = require(`@/assets/${iconShow}.png`)
    const wrapper = shallowMount(weather, {
      propsData: { iconShow },
    }) 
    expect(wrapper.find('img').attributes().src).toEqual(mockSource)
  })
})