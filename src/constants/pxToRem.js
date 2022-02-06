export function pxToRem(size) {
    try {
        if (typeof (size) === "number") {
            return `${size / 16}rem`;
        }
    } catch (error) {
        console.log(error)
    }
}