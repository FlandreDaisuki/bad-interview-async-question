# bad-interview-async-question

## Why?

In following environment:

- [node 8](https://github.com/FlandreDaisuki/bad-interview-async-question/runs/2067474756?check_suite_focus=true#step:4:4)
- [node 12](https://github.com/FlandreDaisuki/bad-interview-async-question/runs/2067475056?check_suite_focus=true#step:4:4)
- [node 14](https://github.com/FlandreDaisuki/bad-interview-async-question/runs/2067475165?check_suite_focus=true#step:4:4)
- Firefox v87 @Ubuntu
- Chromium v87.0.4280.66 @Ubuntu

```text=4
start
async2 end
Promise 1
Promise 2
end
async1 end
Promise 1, then 1
Promise 2, then 1
Promise 1, then 2
Promise 2, then 2
setTimeout end
```

In [node 10](https://github.com/FlandreDaisuki/bad-interview-async-question/runs/2067474944?check_suite_focus=true#step:4:4):

```text=4
start
async2 end
Promise 1
Promise 2
end
Promise 1, then 1
Promise 2, then 1
Promise 1, then 2
Promise 2, then 2
async1 end
setTimeout end
```

:zany_face:
