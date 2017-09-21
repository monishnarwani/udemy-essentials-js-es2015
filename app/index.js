let power = false;
let color = 'White';
let myobj = {
  power: true,
  value: 10,
  model: 'New',
  color: 'Blue'
};

({power, color} = myobj);
console.log(power, color);
