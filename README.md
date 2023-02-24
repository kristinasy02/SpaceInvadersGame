# SpaceInvadersGame

## 23 February 

### Update:
- Made an object for every invader, but the code was mess, everything was on the same place(and it was not working, there were errors in the console), so i started again from scratch the implementation of the , i have learned my lesson, to make everything step by step, and to not rush

### Next Steps:
- Implement the solution step by step-> the first will be to create an object which will not be in functions and for loops, then set their properties with a function, which we will call in the for loop

## 20 February

### Update:
- I am still trying to figure out how to understand if a bullet hit an invader, a thing that i am currently trying to do is - every invader will be object have x, y and invader html element properties, and we will check if the bullet x and y are the same as the one of the invaders if yes, we will remove the invader from the invaders array

### Next Steps:
- Implement the solution above
## 17 February

### Update:

- Created a bullet array in which we push objects which contains bullet’s x and y and bullet html element
- Created a function which deletes every bullet it goes out of the screen
- Now every bullet went to its own direction when it is shot
- So the shooting functionality for the spaceship is ready

### Next steps:

- Try to understand how to detect if a bullet hit an invader

## 16 February

### Update:
Created a base logic for the spaceship shooting: 
  -Cut bullet spritesheet
  -On space click a bullet will appear
  -An animation to the top starts(until I found out how to detect invaders)

 ### Next Steps: 
-Make every bullet to have his own “brain” so he can continue on it’s own way
-Start with the invaders shooting

## 15 February 

### Update:
-Facing troubles with the implementation of the functions and arrow animation, that is caused because I am switching my mind between the different parts of the points that i mentioned
-So i created a todo list which is
- First made the animation(almost done)
-Second create the invaders shooting function, attach the animation, after it is done create the spaceship shooting function

### Next steps:
- First finish the shooting animation(which only includes the bullet movement and spritesheet cut)
- Then continue with the other points 

## 14 February 

### Update:
- Currently working on the bullet animation 
- Trying to found a solution for the shooting logic, that will be in the game loop what i currently have in mind is that:
we will have two functions, one for the space ship and one for the invaders- the invaders function will include a random generator, which will choose which of the invaders will shoot, we will have a loop which will shoot in every couple of seconds. The spaceship function will be simple, on space click, the space ship will shoot

### Next Steps:
- I have decided to firstly done the shooting part and after that the part with the walls, because we need the first in case to do the second, so that are my next steps 

## 13 February 

### Update:
-Changed the spritesheet image and cropped all of the items again(that took a lot of time, because i did not use any other source, and done it with only guessing
- started implementing states of the walls

### Next Steps:
Implement the states if the walls( which will contend 4 states for every hit the every state will go down by one)

## 9 February

### Update:
 -Made the initialisation of the invaders
- two dimensional array which have 5 arrays with 11 elements(invaders)
- a loop which went through the array and makes a table which is presented by the front end part

### Next Steps:
-continue with the points that we discussed in the daily

## 6 February

### Update:
	- Working on the array that we spoke about in the last call, still not able to adjust it but, the solution is near and it will be soon ready
  
### Next steps:
	- Adjust the array
	- Continue with the next steps that we already spoke about.

## 3 February 2022

### Update:
- Researched about what could be used for the shooting. For now the idea for the ship shooting is to hide bullet behind the space ship and then with an animation we will move them. But I am still not able to find out how we will detect if a bullet has hit enemy or the space ship so that is what I am gonna research next
- Homework
  - Game Loop
  - Logical development through comments

### Next Steps:
- Implement the logic for shooting

## 2 February

### Update:
- Researched how to execute logic after exactly keyboard button is pressed

- Implemented the logic for moving the hero with keyboard arrows(attached EventListener which listens for pressing the arrows and then we executed a logic which moves our hero)

### Next Steps:
- Add EventListener for the space button and start creating the logic for the shooting


## 1 February

### Update:

- Made an animation for every enemy character
- Created an array with all of the enemies and the boss enemy on the top of the container
- Created an animation for the whole enemy container to move on the x-axes
- Positioned the space ship and the walls above it

### Next Steps:

- The frontend part is almost done so I will start the backend part (firstly I will start with the shooting an then with the score)


## 31 January

### Update:

- Found the way to cut the sprite sheet properly from different positions by selecting a start position from the sprite sheet(the start position is set by height and width), by setting the width and the height of the element, we are getting the desired result
- Started investigating and learning how the sprite sheet css animation works
  - currently there is implemented animation but it is not final because the desired result is still not achieved

### Next Steps:

- Continue with the frontend implementation(firstly make every enemy to be an animated)


## 27 January

### Update:

- Still trying to crop the spritesheet in different positions, to get the characters images, tried with cutting of exact part of the image, with setting up the width and the height, with defining a background and its position(left, top),with object fit and position, with transform, clip path etc so my next step is to find out the right way to cut them

### Next Steps:

-  find the right way to cut the sprite sheet from different position
- setup the frontend part  step by step(the invaders will be an array with different sprite sheet cut images for different rows)


## 26 January

### Update:

- Played the game to understand how it works
- Created a repo in gitHub - https://github.com/kristinasy02/SpaceInvaders
- Researched how to cut couple of images which are in different position in one sprite sheet - https://www.youtube.com/watch?v=ekI7vjkFrGA
- Created a project - SpaceInvaders, added the sprite sheet in HTML and cut one character with css

### Next Steps:

- Link the project with gitHub repo
- The invaders - array with five rows(top row-character1, second and third-character2, fourth and fifth-character3)
- The whole array will move with animation, each single character will have two states which will be its two images from the sprite sheet which will change an animation
