
def solve(n,s):
    value = []
    for i in range(n):
        max_val = min(9, max(s, s - 9))
        print(i)
        print(max_val)
        value.append(max_val)
        s -= max_val
    s = map(str, value)   # ['1','2','3']
    s = ''.join(s)          # '123'
    s = int(s)              # 123

    return max_val


solve(2, 15)
