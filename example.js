const logger = (message) => console.log(message)
const logger1 = message => console.log(message)


logger('Error')


const sum = (a, b) => ({a: a, b: b})

const course = {
    name: 'Python',
    getName: () => {
        return this.name
    }
}