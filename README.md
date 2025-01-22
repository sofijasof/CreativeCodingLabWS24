# CreativeCodingLabWS24

![mqdefault](https://github.com/user-attachments/assets/1413bd62-470e-47a6-ad83-a19545d4a43b)


This is my repository for my game "Garbage Gambit"

Today is the second day (14th of january) of our creative coding week. 

So far I have planned what I need to do/ implement (creating a figjam file). 
I have also downloaded the template from 2dbgc, looking through it and tweaking it towards my needs.
so far i have scaled the character upbecause it should be more visible in my game
also I have limited the space to the canvas (the character is bound to the canvas width and cant move outside of it) 

Today is the third day (15th of january) of our creative coding week. 

It is very late now, but I did loose track of time. 
Good things happening: I have managed to create items that randomly spawn (first It happened outside of the canvas, then something happened and my players character wasn't being drawn anymore - lots of bugs i managed to create but this is behind us..for now)
Bad things happening: 
-since I am making a 'collect and avoid' type of game, so far I have the collect part of it, and have tried to code the avoid part.. well this is not working out/ showing up on my canvas -> still needs fixing
-while i have items that can be collected, my character has to touch those at a specific angle for it to work, so I need to continue changing the reactToCollision function --> todo as well 

Today is the fourth day (16th of january) of our creative coding week. 
(It's past midnight but to me and my sleeping rhythm it's kinda still thursday.) 

<img width="305" alt="Bildschirmfoto 2025-01-16 um 22 31 29" src="https://github.com/user-attachments/assets/80612020-f587-4b0b-abe0-5c757db5ecaa" />

so far this is what we have now: 
* we have a character that moves within our canvas space. 
* We have an item that spawns on random places (within reach) -> which can be "eaten" by the character (counter goes up) and which disappear after a few seconds. 
* we have a "light" that moves horizontally across the canvas width (reaching the character), we also detect whether our player presses a specific button when they collide

still a long way to go, but it looks promising.  

Today is the fifth day (17th of january) of our creative coding week. 

Today I added a few more todos to my figjam board that I noticed would improve my game (e.g. sound effects) 
So far I have made a Game Over screen, that shows the score of the collected Items. I have also hidden this, so it doesn't show up. However, now I am working on the GameOver Screen showing, when my player looses. This is taking some time.

Today is the sixth day (18th of january) of our creative coding week. 

What has been done today: 
- the player was able to press the button to 'survive' the light while moving and collecting items, which defeated the purpose of the light -> this was fixed, now you can either move OR avoid the light.
- the box bounds were a bit too large, so the player almost immediately lost when the light was somewhere near the character, this was reduced 
- we have a Home Screen now 
- the logic behind making the Game Over screen visible when loosing is working

Today is the seventh day (19th of january - its actually the 20th and a bit after midnight, but I've been sitting on this for too long) of our creative coding week. 

Dear Diary, today i was fully immersed in the world of toggling the display visibility of my game screen,game over screen and canvas. A problem I was sitting the whole day on, was that "display: hidden" was often ignored, which in my case meant, that my game over screen was showing in front of my canvas, which made the game unplayable. Thankfully, a friend explained to me, that "display: flex" has overriden this value, which caused the problem. 

Which means, my game is actually playable by today. I have 
* a character, that can move (sideways, jump, pose)
* items that are generated randomly and in reach
* a counter for the items "eaten"
* a movable object that needs to be avoided (or "turned off" in time in case of collision)
* a home screen (with a button that starts the game)
* a game over screen (that shows your score, and has clickable buttons (home & playagain)

What's left to do is the actual (pixel) art, so far I have used the skeleton sprites that were provided in 2dbgc lecture. And all of the styling. 
(And lot's of playthroughs and (probably neccessary) changes to make the game experience as nice as possible) 

Today is the eight day (21th of january)

Dear Diary, today I worked some more on my html and css files. I also showed my working prototype to a tutor and have looked around some of my friends works. 
I have a doctors appointment tomorrow, that I had to prepare for, so I couldn't do too much today (which is why I worked a lot on the weekend to make up for it). Now everything that is left is the Design part. 

22th of January 

Dear diary, I missed to push this on time. On Tuesday i had my doctors appointment were I had had an anesthesia so sadly my brain was very foggy. I watched Youtube tutorials and prepared by making a custom pixel brush for Procreate. 






