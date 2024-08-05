# Random
import random

def processGuess(theAnswer, theGuess):
    position = 0
    clue = ""
    for letter in theGuess:
        if letter == theAnswer[position]:
            clue += "[X]"
        elif letter in theAnswer:
            clue += "[0]"
        else:
            clue += "[_]"
        position += 1
    print(clue)
    return "_" not in clue 

def play():
    word_list = []
    with open("all_words.txt", "r") as word_file:
        for word in word_file:
            word_list.append(word.strip())

    answer = random.choice(word_list)
    print(answer)  # This line is for debugging
    num_of_guesses = 0
    guessed_correctly = False

    while num_of_guesses < 6 and not guessed_correctly:
        guess = input("Enter your word: ")
        print("You have guessed", guess)
        num_of_guesses += 1
        guessed_correctly = processGuess(answer, guess)
        if guessed_correctly:
            print("Congratulations! You guessed the correct word in", num_of_guesses, "tries.")

    if not guessed_correctly:
        print("You have used up your guesses. The correct word is", answer)

def instruction():
    # Name
    print("Please enter your name: ")
    user = input()

    #Instructions
    print("Welcome to Wordle Game " + user + "!\n")
    print("The rules are: ")
    print("Enter 5 letters to guess the word")
    print("You have 6 chances!")
    print("Letter X is in the word and in the correct spot")
    print("Letter 0 is in the word but the wrong spot")
    print("Letter _ is not in the word and any spot\n")

    #User ready
    print("Are you ready?[yes/ready]")
    user_ready = input()
    if (user_ready == "yes"):
        print("Let's play Wordle!, Good luck " + user + "!\n")
    if (user_ready == "ready"):
        print("Let's play Wordle!, Good luck " + user + "!\n")


instruction()
play()









