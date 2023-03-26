inputs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
print(inputs)

<<<<<<< HEAD
inputs.extend(i.upper() for i in inputs)
=======
for i in inputs:
    inputs.append(i.upper())
>>>>>>> main
