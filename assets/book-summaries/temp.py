
def solve(n,s):
    value = []
    for i in range(n):
        max_val = min(9, max(0, s - 9))
        value.append(max_val)
        s -= max_val
    print(max_val)
    return max_val
