---
id: problemsolving
title: Problem Solving
slug: /problemsolving
---

## Whack-a-mole

### Summary

We want to implement a game which consist in [smashing some moles](https://romeojeremiah.github.io/whack-a-mole/)

### Requirements

1. The moles will show up from several holes in the ground.
2. We need a button to allow the player to start the game
3. A counter will hold the player's score
4. There's a timer. When the timer reaches 0; the game ends.
5. The moles will appear randomly and at different speed levels while there's game time remaining.
6. When the time is over, moles stop popping up, and display a message of end with your score.

### Future requeriments

1. The holes could be replaced by different landscapes
2. The user could set up the game's level
   1. Number of holes
   2. Min and max speed of mole's animation
   3. Game time
3. It could be fancy that all the moles show up before game starts. After game starts, all moles will hide.
4. Allow to the user to set up the timer's visibility.
5. When "Start" button pressed, we hide it and we display a "Restart" button
6. Scoreboard on localStorage
   1. Save the score
   2. Save username with input will display at the end of game

### Configuration and state management

Which variables could be useful to hold our app state?

- Score
  - Every succesfull hit on a mole, score goes one up
  - Restart the game, updates counter to 0
- Remaining game time
  - When the game restarts, the timer get the value of initial game time
  - Every second gets updated
- Game state: ready, end, playing 
  - Ready: When the game loads and before user clicking "Start"
  - End: When the time finishes
  - Playing: User clicks "Start" button
- Next hole in which the mole will appear
  - When the previous mole finishes the showing animation, we calculate a new hole.
- Max and min speed mole
- Number of holes
- Initial game time

### User interface and DOM manipulation

#### Start
- Pressing the "Start" button initialize the game

#### Score
- We will use a textual counter inicialized at 0, and every time the user succesfully clicks a mole, the counter will get upgraded by one.
- At pressing the start button again to restart the game, the counter will get automatically updated to 0.


#### Moles 
- Before starting the game, under the start button, the user will see a grid system that will display the holes and moles ready for starting the game
- When we start the game, we will hide the moles, and they will start popping up randomly and get ready to get clicked.

#### End Message
- At the end of game, we show a message with the total score of the user