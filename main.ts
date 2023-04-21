input.onButtonPressed(Button.A, function () {
	
})
bitbot.ledRainbow()
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # # . # #
    # # . # #
    `)
let speed = 100
basic.forever(function () {
    speed = randint(1, 5)
    basic.pause(200)
    if (speed == 1) {
        bitbot.go(BBDirection.Forward, 10)
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
        bitbot.setLedColor(0xFF0000)
    }
    if (speed == 2) {
        bitbot.go(BBDirection.Forward, 20)
        basic.showLeds(`
            # . . # .
            . # . . #
            . . # . .
            . # . . #
            # . . # .
            `)
        bitbot.setLedColor(0xFFC000)
    }
    if (speed == 3) {
        bitbot.go(BBDirection.Forward, 30)
        basic.showLeds(`
            # . # . #
            . # . # .
            . . # . .
            . # . # .
            # . # . #
            `)
        bitbot.setLedColor(0x18E600)
    }
    if (speed == 4) {
        bitbot.go(BBDirection.Forward, 40)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        bitbot.setLedColor(0x0000FF)
    }
    if (speed == 5) {
        bitbot.go(BBDirection.Forward, 50)
        basic.showLeds(`
            # . . . #
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            `)
        bitbot.setLedColor(0xFF00FF)
    }
})
