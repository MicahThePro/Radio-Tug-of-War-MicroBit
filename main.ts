/**
 * receivedNumber = 6 is reset command
 */
/**
 * Set position away by 1
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showString("YOU LOSE!")
        control.reset()
    } else if (receivedNumber == 6) {
        control.reset()
    }
    position = 4 - receivedNumber
    turtle.setPosition(2, position)
})
/**
 * Execute move on every 5 clicks
 */
/**
 * If position reaches 4 you win
 */
/**
 * If position < 4 set new position
 */
input.onButtonPressed(Button.A, function () {
    pressed += 1
    if (pressed % 5 == 0) {
        if (position == 4) {
            radio.sendNumber(5)
            basic.showString("You WIN!")
            control.reset()
        }
        position = position + 1
        turtle.setPosition(2, position)
        radio.sendNumber(position)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
    control.reset()
})
let position = 0
let pressed = 0
radio.setGroup(1)
pressed = 0
position = 2
turtle.setPosition(2, position)
