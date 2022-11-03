import FabItem from '@/modules/daybook/components/FabItem'
import { shallowMount } from '@vue/test-utils'

describe('Prueba de fab',()=>{
    test('Debe de colocar el icono por defecto',()=>{
        const wrapper = shallowMount(FabItem
            
        )
        expect((wrapper.props().icon)).toBe('fa-plus')
        

    })
    test('Debe de colocar el icono por argumento fa-circle',()=>{

    })
    test('Debe metir evento on:click cuando se hace click',()=>{

    })

})
