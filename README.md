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

![alt text](https://raw.githubusercontent.com/ankurrsinghal/weekly-react-02-beautiful-wall-clocks-using-hooks/master/public/screenshot.png)
