
name = input("What is your SECRET?: ")
while True:
    try:    
        #shifting @ 26, returns the same position
        shift = int(input("Number of Caesar shifts?: ")) % 26
    except ValueError:
        print ("Please input a number!")
        continue
    else:
        break

print('Your SECRET is:', name)
print('Your shift is:', shift)

secretName = ''

for char in name:
    # ord returns the integer value
    secretName += chr(ord(char) + int(shift))
    
print ('Your shifted SECRET is:', secretName)