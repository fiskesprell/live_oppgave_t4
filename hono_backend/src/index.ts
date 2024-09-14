import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

// Legger til data for dadJokes i backend (her du er nå!)
const dadJokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    title: "What do you call a fake noodle?",
    answer: "An impasta!"
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    answer: "He was outstanding in his field!"
  },
  {
    id: 4,
    title: "How do you organize a space party?",
    answer: "You planet!"
  },
  {
    id: 5,
    title: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  },
  {
    id: 6,
    title: "THIS DATA IS FROM BACKEND.",
    answer: "IF YOU SEE THIS IT IS WORKING."
  }
];

type Joke = {
  title: string,
  answer: string
}

const app = new Hono()

// husk å legge til cors
app.use('*', cors())

// Sender ut dadJokes[]
app.get('/', (c) => {
  return c.json(dadJokes)
})

// Oppdaterer dadJokes[]
app.post("/addDadJoke", async (c) => {
  const newDadJoke: Joke = await c.req.json();
  dadJokes.push(
    {
      id: (dadJokes.length + 1), 
      title: newDadJoke.title,
      answer: newDadJoke.answer
    }
  )
});

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
