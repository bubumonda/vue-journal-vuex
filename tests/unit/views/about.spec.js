import AboutView from '@/views/AboutView'
import { shallowMount, VueWrapper } from '@vue/test-utils'
describe('About View Component',()=>{

    test('Snapshot',()=>{
        const wrapper = shallowMount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})