inputs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
print(inputs)

inputs.extend(i.upper() for i in inputs)
