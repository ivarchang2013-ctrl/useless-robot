input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onSound(DetectedSound.Loud, function () {
    servos.P0.setAngle(180)
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
    midi.playDrum(DrumSound.AcousticBassDrum)
})
input.onSound(DetectedSound.Quiet, function () {
    servos.P0.setAngle(90)
})
input.setSoundThreshold(SoundThreshold.Loud, 126)
input.setSoundThreshold(SoundThreshold.Quiet, 43)
