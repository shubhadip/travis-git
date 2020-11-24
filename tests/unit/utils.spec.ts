import { capitalize, allLowercase, allUpperCase, square } from '../../src/utils/index'

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
    it('input not avaliable', () => {
        const response = allLowercase('sd')
        expect(response).toBeTruthy()
        expect(response).toBe('sd')
    })
})

describe('All UpperCase Function', () => {
    it('input avaliable', () => {
        const response = allUpperCase('dsdf')
        expect(response).toBeTruthy()
        expect(response).toBe('DSDF')
    })
    it('input not  avaliable', () => {
        const response = allUpperCase('')
        expect(response).toBeFalsy()
    })
})

describe('square', () => {
    it('input avaliable', () => {
        const response = square(3)
        expect(response).toBeTruthy()
        expect(response).toBe(9)
    })

    it('input avaliable', () => {
        const response = square()
        expect(response).toBeFalsy()
    })
})