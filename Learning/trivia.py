#get name
name = input("Welcome to Movie Trivia!\nPlease enter your name " )
print("Hello, " + name + " are you ready to play?")

#ready to play?
ready = input("Y / N : ")
if ready.upper() == "Y":
    print("Cool, each question is worth 5 points\n")
else:
    print("Come back when you have some free time...")
 

#score set
score = 0 

#question 1
print("Question 1\nWhich movie was directed by Jon Favrau?\n")
answer1 = input("A. Suicide Squad\nB. Paddington\nC. Elf    \n\n Answer: ")
if answer1.upper() == "A":
    print("wrong")
elif answer1.upper() == "B":
    print("wrong")
elif answer1.upper() == "C":
    print("\nCORRECT! +5 pts! Well done, " + name)
    print("score:")
    print(int(score + 5))
else:
    print("please enter A, B, C")
