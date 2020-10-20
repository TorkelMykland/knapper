input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        led.plot(0, 0)
        basic.pause(1000)
        led.unplot(0, 0)
        led.plot(1, 1)
        basic.pause(1000)
        led.unplot(1, 1)
        led.plot(2, 2)
        basic.pause(1000)
        led.unplot(2, 2)
    }
})
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.pause(100)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    # . . . .
    # # # # .
    `)
basic.pause(100)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.pause(100)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.pause(100)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.forever(function () {
	
})
