

radio.setGroup(2)
let start = false
let start2 = false

music.setVolume(225)
music.changeTempoBy(20)

input.onButtonPressed(Button.A, function() {
    radio.sendValue("kod", 15)
    start = true


radio.onReceivedValue(function(name: string, value: number) {
    
    if (name == "kod"){
        while (value == 15) {
            radio.sendValue("potvrzeni", 15)
            
        }
    }

    if (name == "potvrzeni") {
        if (value == 15) {
            start2 = true
            console.log("ano")

        }
    }

})
})
if (start && start2) {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("READY!")
        basic.pause(10)
        basic.showString("GO!")
    music.stopMelody(MelodyStopOptions.All)
    console.log("neco")
}


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

*/