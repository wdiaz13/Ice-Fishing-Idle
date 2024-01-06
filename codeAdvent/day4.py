import re
import os

desktop_path = "/Users/Wesleys-MacBook-Pro/Desktop"
dataset_filename = "card_Numbers.txt"
dataset_path = os.path.join(desktop_path, dataset_filename)

print(f"Absolute path: {dataset_path}")

with open(dataset_path) as fin:
    lines = fin.read().strip().split("\n")

total = 0

for line in lines:
    parts = re.split("\s+", line)
    winning = list(map(int, parts[2:12]))
    ours = list(map(int, parts[13:]))

    score = 0
    for num in ours:
        if num in winning:
            score += 1

        if score > 0:
            total += 2 ** (score - 1)

print(total)

