#!/bin/bash

#ask user for numeric score
read -p "Enter numeric score (0-100): " score

#validating input
#check if there is no input
if [ -z "$score" ]; then
    echo "Error: Please enter a score !"
    exit 1
fi

#check if user input is numerical
if ! [[ "$score" =~ ^[0-9]+$ ]]; then
    echo "Error: Please enter a valid number"
    exit 1
fi

#check if score entered is between 0 and 100
if [ "$score" -lt 0 ] || [ "$score" -gt 100 ]; then
    echo "Error:Please enter a number between 0 and 100"
    exit 1
fi

#calculate grade
echo "Your Score: $score"

#grade classification
if [ "$score" -ge 70 ]; then
    echo "Grade: A"
    echo "Message: Excellent! You passed with distinction."
elif [ "$score" -ge 60 ] ; then
        echo "Grade: B"
        echo "Message: Very Good! You passed with merit."
elif [ "$score" -ge 50 ]; then
     echo "Grade: C"
    echo "Message: Good! You passed."
elif [ "$score" -ge 40 ]; then
     echo "Grade: D"
    echo "Message: Satisfactory! You passed."
else
     echo "Grade: F"
     echo "Message: Unfortunately, you did not pass."
fi