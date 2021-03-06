import Row from './row'
import { mount } from '@vue/test-utils'

describe('layout > row', () => {
  it('has expected default structure', async () => {
    const wrapper = mount(Row)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.text()).toEqual('')
  })

  it('renders custom root element when prop tag is set', async () => {
    const wrapper = mount(Row, {
      propsData: {
        tag: 'p'
      }
    })

    expect(wrapper.is('p')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.text()).toEqual('')
  })

  it('renders default slot content', async () => {
    const wrapper = mount(Row, {
      slots: {
        default: 'foobar'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.text()).toEqual('foobar')
  })

  it('has class no-guttens when prop no-gutters is set', async () => {
    const wrapper = mount(Row, {
      propsData: {
        noGutters: true
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes()).toContain('no-gutters')
    expect(wrapper.classes().length).toBe(2)
  })

  it('has vertial align class when prop align-v is set', async () => {
    const wrapper = mount(Row, {
      propsData: {
        alignV: 'baseline'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes()).toContain('align-items-baseline')
    expect(wrapper.classes().length).toBe(2)
  })

  it('has horizontal align class when prop align-h is set', async () => {
    const wrapper = mount(Row, {
      propsData: {
        alignH: 'center'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes()).toContain('justify-content-center')
    expect(wrapper.classes().length).toBe(2)
  })

  it('has content align class when prop align-content is set', async () => {
    const wrapper = mount(Row, {
      propsData: {
        alignContent: 'stretch'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('row')
    expect(wrapper.classes()).toContain('align-content-stretch')
    expect(wrapper.classes().length).toBe(2)
  })
})
