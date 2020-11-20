<template>
  <div>
  	<div class="row">
	<h3>Music Architecture</h3>
	<img style="float:right;"  src="../assets/music_architecture.jpg" class="img-responsive">	
	</div>
    <button>Button</button>
  </div>
</template>

<script>
// import * as Tone from "tone";

export default {
  // data() {
  //   return {
  //     playing: false,
  //     currentNoteIndex: 0,
  //     music: [
  //       ["C2", "D#2", "G2", "C3", "G2", "D#2"], // Cm (i)
  //       ["B1", "D2", "G2", "B2", "G2", "D2"], // G (V)
  //       ["A#1", "D2", "F2", "A#2", "F2", "D2"], // Bb (VII)
  //       ["A1", "C2", "F2", "A2", "F2", "C2"], // F (V / VII)
  //       ["G#1", "C2", "D#2", "G#2", "D#2", "C2"], // Ab (VI)
  //       ["G1", "C2", "D#2", "G2", "D#2", "C2"], // Cm (i)
  //       ["F#1", "C2", "D#2", "F#2", "D#2", "C2"], // F#dim7 (vii° / V)
  //       ["G1", "C2", "D2", "G2", "D2", "B1"] // Gsus4 (?) -> G (V)
  //     ]
  //   };
  // },

 //  created() {
 //    //create a synth and connect it to the main output (your speakers)
	// const synth = new Tone.Synth().toDestination();
	 
	// //play a middle 'C' for the duration of an 8th note
	// synth.triggerAttackRelease("C4", "8n");
 //  },

  // methods: {
  //   step() {
  //     if (++this.currentNoteIndex > this.music.length - 1) {
  //       this.currentNoteIndex = 0;
  //     }
  //   },

  //   toggle() {
  //     if (this.playing) {
  //       Transport.pause();
  //     } else {
  //       Transport.start();
  //     }

  //     this.playing = !this.playing;
  //   }
  // },

  // computed: {
  //   toggleButtonText() {
  //     return this.playing ? "Pause music" : "Play music";
  //   },

  //   activeNote() {
  //     return this.music[this.currentNoteIndex];
  //   }
  // }
};
</script>


<!-- <template>
  <div>
    <button @click="toggle">{{ toggleButtonText }}</button>
  </div>
</template>

<script>
import { Sampler, Transport, Synth, PolySynth } from "tone";

export default {
  data() {
    return {
      playing: false,
      currentNoteIndex: 0,
      music: [
        ["C2", "D#2", "G2", "C3", "G2", "D#2"], // Cm (i)
        ["B1", "D2", "G2", "B2", "G2", "D2"], // G (V)
        ["A#1", "D2", "F2", "A#2", "F2", "D2"], // Bb (VII)
        ["A1", "C2", "F2", "A2", "F2", "C2"], // F (V / VII)
        ["G#1", "C2", "D#2", "G#2", "D#2", "C2"], // Ab (VI)
        ["G1", "C2", "D#2", "G2", "D#2", "C2"], // Cm (i)
        ["F#1", "C2", "D#2", "F#2", "D#2", "C2"], // F#dim7 (vii° / V)
        ["G1", "C2", "D2", "G2", "D2", "B1"] // Gsus4 (?) -> G (V)
      ]
    };
  },

  created() {
    this.music = this.music.flat();

    Transport.bpm.value = 120;

    const synth = new PolySynth(4, Synth, {
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 1
      }
    }).toMaster();

    Transport.scheduleRepeat(time => {
      synth.triggerAttackRelease(this.activeNote, "8n");

      this.step();
    }, "8n");
  },

  methods: {
    step() {
      if (++this.currentNoteIndex > this.music.length - 1) {
        this.currentNoteIndex = 0;
      }
    },

    toggle() {
      if (this.playing) {
        Transport.pause();
      } else {
        Transport.start();
      }

      this.playing = !this.playing;
    }
  },

  computed: {
    toggleButtonText() {
      return this.playing ? "Pause music" : "Play music";
    },

    activeNote() {
      return this.music[this.currentNoteIndex];
    }
  }
};
</script>

<style scoped>
button {
  padding: 1rem;
}
</style> -->