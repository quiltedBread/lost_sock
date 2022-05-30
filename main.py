import csv
import json

from geopy.distance import distance

data = dict()
l = list()
with open(r"C:\Users\Matthew\Desktop\US.txt", mode='r') as in_file, \
    open("output.txt", mode="w") as out_file:
        reader = csv.reader(in_file, delimiter="\t")
        for line in reader:
            if (line[0] == 'US' and 
                line[4] in ['KY','OH'] and
                line[5].lower() in ['hamilton', 'kenton', 'boone', 'campbell']):
                start = (39.075840,-84.489011) # Newport, 41071
                delta = distance(start, (line[-3], line[-2])).mi
                data.update({int(line[1]): [line[2], delta]})
                l.append(line[1])
print(",".join(l))
                # out_file.write(",".join(line))
                # out_file.write("\n")