Narrator.addNarration({
	file: "0_intro",
	markers:{
		
		"intro0": ["0:00.0", "0:03.0"], // So, I always used to get anxiety.
		"intro1": ["0:03.0", "0:05.7"], // Then I would get anxiety ABOUT getting anxiety.
		"intro2": ["0:05.7", "0:08.0"], // It was anxiety all the way
		"intro3": ["0:08.0", "0:09.0"], // down.

		"prop0": ["0:15.0", "0:16.3"], // Hi, I'm Nicky Case,
		"prop1": ["0:16.3", "0:19.6"], // and this is an interactive explanation about neurons.
		"prop2": ["0:22.0", "0:23.5"], // Yup! You can actually interact with this,
		"prop3": ["0:23.5", "0:25.4"], // ♬ so why don't you try that thing ♬
		"prop4": ["0:25.4", "0:27.8"], // and click on a neuron, and see what happens?

		"prop5": ["0:29.0", "0:31.7"], // Ex-CUSE me, I was talking!... I'm just kidding.
		"prop6": ["0:33.0", "0:35.4"], // Okay, wow, you're really into this, clicking EVERYTHING,
		"prop7": ["0:35.4", "0:36.5"], // COOL. GOT IT. AWESOME.

		"prop8": ["0:38.0", "0:40.5"], // Yeah! Watch how the signals propagate down,
		"prop9": ["0:40.5", "0:42.6"], // from neuron to neuron to neuron.
		"prop10": ["0:45.0", "0:46.1"], // Try clicking some more.

		"prop11": ["0:48.0", "0:50.3"], // Of course, this is a simplified model,
		"prop12": ["0:50.3", "0:52.2"], // but that's roughly how neurons work.
		"prop13": ["0:52.2", "0:54.7"], // One thought fires the next, and so on,
		"prop14": ["0:54.7", "0:57.3"], // but... in the ANXIOUS brain...

		"fear0": ["0:57.5", "0:59.2"], // THIS is what happens.
		"fear1": ["1:00.0", "1:03.0"], // Innocent thoughts connect to anxious thoughts.
		"fear2": ["1:03.0", "1:08.1"], // Personally, I used to be so afraid of being seen as a failure,
		"fear3": ["1:08.1", "1:10.2"], // of being close to people,
		"fear4": ["1:10.2", "1:11.3"], // and of...
		"fear5": ["1:11.3", "1:12.0"], // holes.
		"fear6": ["1:12.0", "1:15.0"], // They creep me out, I don't know why,
		"fear7": ["1:15.0", "1:18.5"], // but holy ■■■■ I do NOT like holes. 

	}
});

Narrator.addStates({
	INTRO:{
		start:function(){
			Narrator.scene("Intro").talk("intro0","intro1","intro2")
					.scene("Propagation")
					.music("sfx_loop",{volume:0.05,loop:-1})
					.talk("intro3");
		}
	}
});