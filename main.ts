input.onGesture(Gesture.Shake, function () {
    if (0 == 0) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
        basic.pause(500)
        is_hatched = 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
})
let is_hatched = 0
is_hatched = 0
music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (is_hatched == 1) {
        basic.showIcon(IconNames.Happy)
    }
})
