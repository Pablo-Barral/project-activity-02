import clock from '@/components/clock/index.vue'
import { shallowMount } from '@vue/test-utils'

describe('index.vue', () => {
    it('renders props for time when passed', () => {
        const hourShow = '11'
        const minuteShow = '26'
        const wrapper = shallowMount(clock, {
            propsData: { hourShow, minuteShow}
        })
        expect(wrapper.text()).toMatch(`${hourShow}:${minuteShow}`)
    })
    // it('renders props for date when passed', () => {
    //     const weekDay = 'quarta-feira'
    //     const monthDay = '02'
    //     const month = 'março'
    //     const year = '2022'
    //     const weapper = shallowMount(clock, {

    //     })
    // })
})