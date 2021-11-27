import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.section.attrs({
    className: `
        h-screen bg-gray-200 flex justify-center items-center overflow-hidden
    `
})`
    & {
        h1 {
            ${
                tw`font-bold text-6xl`
            }
        }
    }
    h1 {
        transform: rotate(90deg)
    }
`