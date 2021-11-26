# js-calc
Calculator in JavaScript

Structure:
-Flexbox UI
-DOM manipulation to display JS logic
-EventListener for HTML to JS interaction
-Conditional and Boolean logic running operators
-Multiple string concatenation converted to number using parseFloat()

Features:
-Error for div by 0
-Only accepts one decimal
-Accepts a string of operators (i.e. 12 + 7 - 5 * 3 = 42)
-Rounds floats and long decimals
-Limits max numbers displayed on screen
-Clear button
-Percent
-Sqrt

This was a fun project. I feel that I learned a lot. While the operators (*, /, +, -) were not that difficult to arrange, storing the variables were. I had three vars: a, b, and num. Variable num would take the numbers inputted and transfer said numbers to a or b. It took me a while to be able to have the functions and operators accept the data for both a and b, check that these were not undefined, and execute them (a * b). 

I used strings to receive the data from numbers 0-9. It was easier to concatenate them and then convert them into a number for operator use. 

After I got the operators working, I found that my next challenge was the 0, decimal, and undefined:

-Preventing multiple 0s from being inputted "000000"
-Accepting multiple 0s after decimal ("0.0000008")
-Preventing 0's omission with decimal use ".3"
-Allowing multiple 0s ("10000001")
-Allowing decimals to be stored in vars num, a, and b

Sorting vars, 0s, and decimals took the longest. I had to make sure my conditional logic was selecting and functioning in the exact instances.

Finally, I made the sqrt and percent operations work. 

Tied project up with a little css. Grayscale -- I prefer brutalist design. Voilà.





