const express = require('express');
var cors = require('cors')
const app = express();

//Middleware hisebe kaz korche port er khettre
app.use(cors());

//Middleware hisebe app.js er stringify data jason formate korche
app.use(express.json());

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('this is my second shitty node with nodemon express ops auto auto')
})

const users = [
  { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '018587985' },
  { id: 2, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '0185789787' },
  { id: 3, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01854787977' },
  { id: 4, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '0185678778' },
  { id: 5, name: 'Soniya', email: 'Soniya@gmail.com', phone: '0185474587' },
  { id: 6, name: 'Susmita', email: 'Susmita@gmail.com', phone: '0121354132' }
];


//app.Method

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser)
  res.json(newUser)
})


// Dynamic API
app.get('/users/:id', (req, res) => {
  const id = req.params.id - 1;
  const user = users[id];
  res.send(user)

})

app.get('/users', (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult)
  } else {
    res.send(users)
  }

});

app.listen(port, () => {
  console.log('Now we are running', port, 'port')
})