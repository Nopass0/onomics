import random

def generate_email_code(chars):
    code = ""
    for x in range(chars):
        code += str(random.randint(0, 9))

    return code