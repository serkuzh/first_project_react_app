let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: " It's my first post", likesCount: 25 },
    ],
  },

  messagesPage: {
    dialogs: [
      { id: 1, name: " Vita" },
      { id: 2, name: " Olya" },
      { id: 3, name: " Kolya" },
      { id: 4, name: " Victor" },
      { id: 5, name: " Masha" },
    ],
    messages: [
      { id: 1, message: " Hi" },
      { id: 2, message: " How are you" },
      { id: 3, message: " Yo" },
      { id: 4, message: " Yo" },
      { id: 5, message: " Yo" },
    ],
  },
  sidebar: {
    users: [
      { id: 1, name: "Катя" },
      { id: 2, name: "Вика" },
      { id: 3, name: "Люда" },
    ],
  },
};

export default state;
