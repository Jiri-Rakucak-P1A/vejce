
/*
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
*/



let x = 2
let y = 2


let accX  = 0
let accY = 0
let accZ = 0

let calibrateX = accX
let calibrateY = accY
let calibrateZ = accZ

let rX = 0
let rY = 0
let rZ = 0
let block = false
basic.forever(function() {

    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    accZ = input.acceleration(Dimension.Z)

    input.onButtonPressed(Button.B, function() {
        calibrateX = accX
        calibrateY = accY
        calibrateZ = accZ
        
        for (let i = 0; i < 6; i++) {
        basic.showIcon(IconNames.Duck)

            accX = input.acceleration(Dimension.X)
            accY = input.acceleration(Dimension.Y)
            accZ = input.acceleration(Dimension.Z)
            
        calibrateX = calibrateX + accX
        calibrateX = calibrateX/2

        calibrateY = calibrateY + accY
        calibrateY = calibrateY / 2

        calibrateZ = calibrateZ + accZ
        calibrateZ = calibrateZ / 2

        
        }

        Math.round(calibrateX)
        Math.round(calibrateY)
        Math.round(calibrateZ)

        console.logValue("x", calibrateX)
        console.logValue("y", calibrateY)
        console.logValue("z", calibrateZ)
        basic.clearScreen()
    block = true
        
    })
    
    rX = calibrateX + 20
    rY = calibrateY + 20
    
    while (block = true) {
        if (calibrateX < rX) {
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()

        }
    }

})
   



