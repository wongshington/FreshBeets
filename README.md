# 🎤🎧:beetle: Fresh Beets! 🎤🎧:beetle:

### Are you a secret adlib sound expert? Do you find yourself repeating yourself often? Do you think the world just needs a little bit more of your voice?

## Welcome to Fresh Beets!

**Record** your favorite sounds and noises to any one of your **SoundPads** and play them back again and again whenever the moment ⚡️strikes. Fresh Beets is the web app for at least one your recording and playback needs!

_Next time you get trapped in a conversation thats going a little too long...**play that frog🐸 noise** you saved last week! Excuse yourself and say that you must leave to go 🕵🏾‍♀️🕵🏾‍♂️🔎🔎investigate._

_Don't like telling siri to add la croix to your weekly shopping list? **Play that 🎙recording** you setup last 🗓month!!_

## With **OVER 15** different **SoundPads**, you can keep a catch phrase on hand for any occasion!

_"Any Black Cherry left in the variety pack?"_

_"Please don't touch my hair Karen."_

_"Who wants snacks from the kitchen?👀"_

The Limit is your own imagination and vocal chord range!

# Coming Soon...

- MOBILE FRIENDLY!!!(can't come any sooner am I right?!)
- Play your favorite **Fresh Beats** over a loop and make your own **Fresh Track**!

# Technologies

I record the audio input by using the Navigator Web API to access the user's microphone and the `Media Stream Recording API` to record the audio input from the user. I utilized the native `FileReader API` to process my base64 encoded audio file and `localStorage` from the `Web Storage API` to save it for later.
The icons on my SoundPads are from FontAwesome I've included the Font Awesome CDN in my `index.html` file.
When styling I write `SCSS` rules and use the `node-sass` package to compile my styles into a css file.

# Future DEV

- Option to switch to a prebuilt Default board if the user doesn't want to allow access to their microphone.
- Play recorded sounds over a loop to make a repeatable/editable beat.
- Save and send audio files to other users.
