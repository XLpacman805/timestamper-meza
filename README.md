How to Use Timestamper-Meza
=========================

Add either a unix timestamp or a datestring to the end of 
https://timestamper-meza.glitch.me/api/timestamp/

Example Unix: 

`https://timestamper-meza.glitch.me/api/timestamp/1502411431`

output : 
```
{
  "unix": 1502411431,
  "natural": "August 11 2017"
}
```

Example timeString: 

`https://timestamper-meza.glitch.me/api/timestamp/march%205%202016`

Output:

```
{
  "unix": 1457136000,
  "natural": "March 05 2016"
}

```
