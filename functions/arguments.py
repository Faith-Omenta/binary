def concatenate_args(*strngs):
    answer=""
    for strng in strngs:
        answer += strng
    return answer

def concatenate_kwargs(**kwargs):
    answer=""
    for text in kwargs.values():
        answer += text
    return answer

