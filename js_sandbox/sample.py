def hello():
    return 'hello'

sample_dict = {
    'hello': 'hey',
    'function': hello()
}


print(sample_dict['function'])