input.onButtonPressed(Button.A, function () {
    num_6 = 0
    for (let index = 0; index < numOfThrows; index++) {
        if (randint(1, 6) == 6) {
            num_6 += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num_6 / numOfThrows)
})
input.onGesture(Gesture.Shake, function () {
    numOfThrows = numOfThrows * 2
    basic.showNumber(numOfThrows)
})
let num_6 = 0
let numOfThrows = 0
numOfThrows = 10
num_6 = 0
