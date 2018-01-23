new Vue({
  el: '#app',
  data: {
    msg: 'Quiz your knowledge of Baroque, Classical, and Romantic period music history.',
    msg2: 'The quiz has started',
    start: false,
    count: 31,
    timeOut: 'Time Ran Out',
    questions: [
      {
        question: "What was Mozart's full name?",
        answer: "Wolfgang Amadeus Mozart",
        option: [
          "Wolfgang Amadeus Mozart",
          "Rock Me Amadeus Mozart",
          "Ludwig Van Mozart",
          "Wolverine Amadeus Mozart"
        ]
      },
      {
        question: "Richard Wagner's opera \"The Valkyrie\" is from which cycle?",
        answer: "The Ring of the Nibelung",
        option: [
          "Lord of the Rings",
          "Thor",
          "The Ring of the Nibelung",
          "The Ride of the Valkyrie"
        ]
      },
      {
        question: "Music by which 20th century composers appeared in the 1980 film, \"The Shining\"?",
        answer: "Penderecki, Ligeti, Bartok",
        option: [
          "Cage, Bartok, Ligeti",
          "Penderecki, Ligeti, Bartok",
          "Adams, Penderecki, Ligeti",
          "Cage, Riley, Reich"
        ]
      },
      {
        question: "Hector Berlioz's \"Symphonie Fantastiquie\" consisted of how many movements?",
        answer: "5",
        option: [
          "1",
          "4",
          "5",
          "3"
        ]
      },
      {
        question: "Chopin primarly wrote for what instrument?",
        answer: "Piano",
        option: [
          "Piano",
          "Violin",
          "Harpsichord",
          "Hurdy Gurdy"
        ]
      },
      {
        question: "Which of these is an instrumental composition by Johann Sebastian Bach?",
        answer: "Brandenburg Concertos",
        option: [
          "St Matthew Passion",
          "Mass in B Minor",
          "Brandenburg Concertos",
          "Christ lag in Todes Banden"
        ]
      },
      {
        question: "What is real name to the Richard Strauss composition used in \"2001: A Space Odyssey\"?",
        answer: "Also sprach Zarathustra",
        option: [
          "Atmospheres",
          "The Blue Danube",
          "Also sprach Zarathustra",
          "Requiem"
        ]
      }
    ],
    que: []
  },
  methods: {
    countDown() {
      let setCount = setTimeout(this.countDown, 500)
      this.count--

      if (this.count === 0) {
        clearTimeout(setCount)
      }
      if (this.count > 0) setCount
    },
    setQue() {
      this.que = this.questions[0]
    }
  }
})