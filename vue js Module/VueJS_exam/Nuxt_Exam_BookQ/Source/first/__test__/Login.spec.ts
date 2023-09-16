import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { describe } from 'node:test'
import { render, screen, fireEvent } from '@testing-library/vue'
import Login from '../pages/index.vue'
import {createTestingPinia} from '@pinia/testing'

describe('Login test Cases', async()=>{
    test("Heading exists", async()=>{
        expect(Login).toBeTruthy()
        vi.stubGlobal('definePageMeta', vi.fn())
        const pinia= createTestingPinia()
        const wrapper= mount(Login)
        expect(wrapper.find('h2').exists()).toBeTruthy()
    })
})