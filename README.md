1. Setup instructions:
   File Structure:
   Ensure you have the following files in your project directory:
      index.html: The HTML structure of the slideshow application.
      styles.css: The CSS file for styling the slideshow and controls.
      script.js: The JavaScript file for handling the slideshow functionality.
   Open the Application:
      Open index.html in a web browser to view and interact with the application. You can also use a local server if required.

2. Functionality Details:
   Slideshow Display:
      Displays a series of movie images in a slideshow format.
      Initially shows three predefined movie images.
   Image Transitions:
      Automatically transitions between images every 2 seconds using setInterval.
      Provides controls to manually navigate through images.
   User Input:
      Allows users to input their own image URL and specify the position to insert the image into the slideshow.
      Updates the slideshow dynamically based on user input.
   Interactive Controls:
      Play/Pause Button: Starts or stops automatic transitions.
      Previous Button: Shows the previous image in the slideshow.
      Next Button: Shows the next image in the slideshow.
      Add Image Button: Adds a new image to the slideshow at a specified position.

3. Explanation of Implementation Choices:
    HTML (index.html):
      Provides the structure of the application with a container for the slideshow, input fields for user interaction, and control buttons.
      Utilizes semantic elements and id attributes to allow easy DOM manipulation.
    CSS (styles.css):
      Styles the slideshow to ensure images are displayed properly and provides a clean, user-friendly interface.
      Includes styling for buttons, input fields, and the slideshow container to enhance the visual appeal and usability.
    JavaScript (script.js):
      Handles the core functionality of the slideshow:
      Image Transition: Uses setInterval to automatically change images every 2 seconds.
      Play/Pause Functionality: Toggles the slideshow between automatic and manual modes.
      Navigation: Implements previous and next buttons to manually navigate through images.
      Dynamic Image Addition: Allows users to add images to the slideshow at specified positions by modifying the DOM.
      Ensures smooth user experience by managing the state of the slideshow and updating the DOM based on user interactions.
   
   Notes :
      The image URLs used in this example are placeholders. You can replace them with actual URLs to movie images.
      Ensure that the application handles edge cases, such as invalid image URLs or out-of-bounds positions for image insertion.
