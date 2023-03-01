export const UpperFirst = (sentence?: string) => {
    if (!sentence) return null
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`
}
