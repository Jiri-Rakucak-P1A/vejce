radio.setGroup(2)

music.setVolume(225)
music.changeTempoBy(20)

input.onButtonPressed(Button.A, function() {
    radio.sendString("spustit program")
    console.log("odeslano kod")
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("READY!")
        basic.pause(10)
        basic.showString("GO!")
    music.stopMelody(MelodyStopOptions.All)
    console.log("prvni funguje")
})

radio.onReceivedString(function(receivedString: string) {
    if (receivedString == "spustit program") {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("READY!")
        basic.pause(10)
        basic.showString("GO!")
        music.stopMelody(MelodyStopOptions.All)
        console.log("druhy funguje")
    }
})

    






 
    



/*

let x =0
let y = 0
let z = 0
input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.forever(function() {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    console.logValue("x",x)
    //console.logValue("y",y)
    //console.logValue("z",z)


    if (Math.abs(x) <= x) {

        basic.showIcon(IconNames.Angry)
        basic.clearScreen()  
    }
    



    basic.pause(150)
})



radio.onReceivedValue(function(name: string, value: number) {
    if (name == "code") {
        start2 = true
        console.log("kod přišel")
        radio.sendNumber(1)
        console.log("potvrzeno")
    }
})

radio.onReceivedNumber(function(receivedNumber: number) {
    if (receivedNumber == 1) {
        start3 = true
        console.log("ano")
        radio.sendValue("kod", 0)
        console.log("funguje to")
    }
})
*/