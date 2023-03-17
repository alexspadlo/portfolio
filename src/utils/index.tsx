import $ from 'jquery'

export const UpperFirst = (sentence?: string) => {
    if (!sentence) return null
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`
}

export const helperCloser = () => $('#popUpAlex').modal('hide')

export const sleep = (ms?: number) => new Promise((resolve) => setTimeout(resolve, ms))
