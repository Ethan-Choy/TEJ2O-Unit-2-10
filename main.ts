/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program turns on neopixels according to light level
*/


//variables
let amountOfLight: number
let neopixelStrip: neopixel.Strip = null

//cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// light up Neopixels
input.onButtonPressed(Button.A, function () {
    // get light level
    amountOfLight = input.lightLevel()

    // show light level
    basic.clearScreen()
    basic.showNumber(amountOfLight)

    if (amountOfLight <= 51) {
        // no lights
    }

    // light up 1 neopixel
    if (amountOfLight > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    }

    // light up 2 neopixels
    if (amountOfLight > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    }

    // light up 3 neopixels 
    if (amountOfLight > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    }

    // light up 4 neopixels 
    if (amountOfLight > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    }

    neopixelStrip.show()
    basic.pause(3000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
