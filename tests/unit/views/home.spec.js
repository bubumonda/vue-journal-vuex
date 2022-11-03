import HomeView from '@/views/HomeView'
import { shallowMount, VueWrapper } from '@vue/test-utils'
describe('About View Component',()=>{

    test('Snapshot',()=>{
        const wrapper = shallowMount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Hacer un click debe redireccionar',()=>{

        const mockRouter={
            push: jest.fn()
        }
        
        const wrapper = shallowMount(HomeView, {
            global:{
                mocks:{
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')

        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'})

    })

})