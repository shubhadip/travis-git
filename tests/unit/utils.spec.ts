import { capitalize, allLowercase } from '../../src/utils/index'

describe('Test Capitalize Function', () => {
    it('input not avaliable', () => {
        const response = capitalize('')
        expect(response).toBeFalsy()
        expect(response).toBe('')
    })
    it('input avaliable', () => {
        const response = capitalize('test')
        expect(response).toBeTruthy()
        expect(response).toBe('Test')
    })
})

describe('All LowerCase Function', () => {
    it('input not avaliable', () => {
        const response = allLowercase('')
        expect(response).toBeFalsy()
        expect(response).toBe('')
    })
})