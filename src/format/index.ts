const plural = input => (word: string, config: object) => {
    return input.length == 1 ? word : word + 's'
}

const format = input => () => {
    return {
        plural
    }
}

const yolo = () => {
    return 'swag twerk'
}

export {
    format,
    yolo
}