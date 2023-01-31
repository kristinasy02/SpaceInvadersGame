# SpaceInvadersGame

//31 January

# Update:

- Found the way to cut the sprite sheet properly from different positions by selecting a start position from the sprite sheet(the start position is set by height and width), by setting the width and the height of the element, we are getting the desired result
- Started investigating and learning how the sprite sheet css animation works
  - currently there is implemented animation but it is not final because the desired result is still not achieved
  
# Next Steps:

- Continue with the frontend implementation(firstly make every enemy to be an animated)


//27 January

# Update:

- Still trying to crop the spritesheet in different positions, to get the characters images, tried with cutting of exact part of the image, with setting up the width and the height, with defining a background and its position(left, top),with object fit and position, with transform, clip path etc so my next step is to find out the right way to cut them

#Next Steps:

-  find the right way to cut the sprite sheet from different position
- setup the frontend part  step by step(the invaders will be an array with different sprite sheet cut images for different rows)


//26 January

# Update:

- Played the game to understand how it works
- Created a repo in gitHub - https://github.com/kristinasy02/SpaceInvaders
- Researched how to cut couple of images which are in different position in one sprite sheet - https://www.youtube.com/watch?v=ekI7vjkFrGA
- Created a project - SpaceInvaders, added the sprite sheet in HTML and cut one character with css

# Next Steps:

- Link the project with gitHub repo
- The invaders - array with five rows(top row-character1, second and third-character2, fourth and fifth-character3)
- The whole array will move with animation, each single character will have two states which will be its two images from the sprite sheet which will change an animation
