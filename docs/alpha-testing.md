---
id: alpha-testing
title: Alpha Testing Phase
sidebar_label: Alpha Testing
---

## Alpha Testing of the Game

The game is in the Alpha testing phase at the current moment (26th May, 2021) and it is being tested accordingly. Some tests have already been done and they are documented as follows -

### **Test Case #1**

- **Functionality :**  Basic Display of Characters
  
- **Description :** Check whether the game characters are being displayed properly or not.
  
- **Pre-conditions :**
  1. Game is running on the Windows 10 operating system.
  2. The machine running the game has at least GTX 1050Ti GPU.
  
- **Assumptions :**
  1. The Game is being run inside the Unreal Game Engine.
  2. The tester is a developer of the game.
  
- **Expected Test Result :** The game characcters displayed properly when the game is played.

- **Test Results :**
  1. The characters were not being displayed properly.
  2. The characters had various animation glitches.

- _**Test Status :** Fail._

- **Issues Found :**
  1. Test failed despite characters being put in all nodes.
  2. Parent code was incorrectly attached to characters' nodes.
  3. Parent code had some bugs that were causing the glitches.

- **Steps Taken :**
   1. Recoded the parent code from scratch.
   2. Attached the parent code to nodes and characters properly.

- _**Test Status :** Success._

### **Test Case #2**

- **Functionality :**  Player Damage and Heath

- **Description :** Check whether the player character is damaging and gettig hurt by the enemy as it should.

- **Pre-conditions :**
  1. Game is running on the Windows 10 operating system.
  2. The machine running the game has at least GTX 1050Ti GPU.

- **Assumptions :**
  1. The Game is being run inside the Unreal Game Engine.
  2. The tester is a developer of the game.

- **Expected Test Result :** The player character damages the enemy character when it attacks and the player character's health gets depleted when hit by the enemy.

- **Test Results :**
  1. The player character's health was getting depleted when the enemy got attacked.
  2. The enemy character's health was not getting affected by the player character's attacks.

- _**Test Status :** Fail._

- **Issues Found :**
  1. Test failed despite correct parent code and character codes.
  2. The health code for characters was incorrectly attached to the player and enemy characters.

- **Steps Taken :**
   1. Recoded the health code to fix some undiscovered bugs while looking for issues.
   2. Implemented the health code to the right characters correctly.
  
- _**Test Status :** Success._

### **Test Case #3**

- **Functionality :**  Attack Mechanism

- **Description :** Check whether the characters's attack mechanism is working properly or not.

- **Pre-conditions :**
  1. Game is running on the Windows 10 operating system.
  2. The machine running the game has at least GTX 1050Ti GPU.

- **Assumptions :**
  1. The Game is being run inside the Unreal Game Engine.
  2. The tester is a developer of the game.

- **Expected Test Result :** The attack mechanism is working correctly on the developer side.

- **Test Results :**
  1. The hitboxes were spawning correctly.
  2. But hitboxes didn't ger de-spawned when the attack ended.

- _**Test Status :** Fail._

- **Issues Found :**
  1. The hitboxes were de-spawning when the whole scene ended.
  2. Hitboxes de-spawn time was not set to the correct frame.

- **Steps Taken :**
   1. Fixed the hitboxed to spawn with the attack start and to de-spawn with the attack end..
   2. Set the correct de-spawning frame to when the attack ended.
  
- _**Test Status :** Success._

### **Test Case #4**

- **Functionality :**  Player-Enemy Interaction

- **Description :** Check whether the player character is interacting properly with the enemy character(S).

- **Pre-conditions :**
  1. Game is running on the Windows 10 operating system.
  2. The machine running the game has at least GTX 1050Ti GPU.

- **Assumptions :**
  1. The Game is being run inside the Unreal Game Engine.
  2. The tester is a developer of the game.

- **Expected Test Result :** The player character constantly keeps the enemy in sight while the match/stage is going on.

- **Test Results :**
  1. The player character looked only in one direction.
  2. The position of the enemy did not affect the direction in which the character was looking.

- _**Test Status :** Fail._

- **Issues Found :**
  1. The player character's line of sight is always unidirectional.
  2. The character wasn't looking at the enemy even after actions like jumping, walking, etc.

- **Steps Taken :**
   1. Recoded the Character Model scale.
   2. Set the scale to flip according to the relative position of the enemy.
   3. This resulted in the player character always looking in direction of the enemy.
  
- _**Test Status :** Success._

### **Test Case #5**

- **Functionality :**  In-game Buttons

- **Description :** Check whether the in-game buttons are working properly.

- **Pre-conditions :**
  1. Game is running on the Windows 10 operating system.
  2. The machine running the game has at least GTX 1050Ti GPU.

- **Assumptions :**
  1. The Game is being run inside the Unreal Game Engine.
  2. The tester is a developer of the game.

- **Expected Test Result :** The in-game buttons get clicked and trigger the funstions they are supposed to trigger.

- **Test Results :**
  1. The buttons were not getting clicked.
  2. The button functions were also not getting triggered.

- _**Test Status :** Fail._

- **Issues Found :**
  1. The button graphic image sitting on top of the button was actually getting clicked.
  2. But because the image was getting clicked, the button was not.

- **Steps Taken :**
   1. Coded the button graphic image to be non-hit-testable.
   2. The click now got through the image to the button, which triggered the specific functionality.

- _**Test Status :** Success._

### **Test Case #6**

- **Functionality :**  Code Grammar

- **Description :** Check whether the game code is written and compiled properly.

- **Pre-conditions :**
  1. Game is running on the Windows 10 operating system.
  2. The machine running the game has at least GTX 1050Ti GPU.

- **Assumptions :**
  1. The Game is being run inside the Unreal Game Engine.
  2. The tester is a developer of the game.

- **Expected Test Result :** The game code is well formatted compiles properly.

- **Test Results :**
  1. 14,076 errors in code compilation.

- _**Test Status :** BIG Fail._

- **Issues Found :**
  1. A line of code was missing some parantheses.

- **Steps Taken :**
   1. The parantheses were added correctly. 😎

- _**Test Status :** BIG Success._
