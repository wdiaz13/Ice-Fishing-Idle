weight = float(input("Welcome to the WEIGHT CONVERTER\nInput Weight: "))
unit = input("(K)g or (L)bs: ")
if unit.upper() == "K":
    converted = weight / 0.45
    print("you weigh: " + str(converted) + "lbs")
elif unit.upper() == "L":
    converted = weight * 0.45
    print("you weigh: " + str(converted) + "kg")
else:
    print("please indicate 'K' or 'L' :) ")
    fun.py.run()