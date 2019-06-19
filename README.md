# Beautiful Wall Clocks

## Custom Hook: useClock

```
const useClock = (initialTime = new Date()) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(() => new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
```

[Medium Story](https://medium.com/@ankurr.singhal/creating-beautiful-wall-clocks-using-react-hooks-useclock-9a4fad6f7242)

![alt text](https://raw.githubusercontent.com/ankurrsinghal/weekly-react-02-beautiful-wall-clocks-using-hooks/master/public/screenshot.png)
