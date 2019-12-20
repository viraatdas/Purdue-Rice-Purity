f = open("questions.md", "r")
questions = []
for i, question in enumerate(f):
    questions.append(question.lstrip('0123456789.- ').strip())

print(questions)