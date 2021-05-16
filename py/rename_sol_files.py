import os
import re
PATH = 'solutions'
for filename in os.listdir(PATH):
    if filename.endswith('.mdx'):
        oldName = PATH + '/' + filename
        with open(oldName, 'r') as file:
            contents = ''.join(file.readlines())
            match = re.search('id:(.*)\n', contents)
            newName = PATH + '/' + match.group(1).strip() + '.mdx'
            os.rename(oldName, newName)
