# Word Puzzle Game

A modern, online version of the popular Sunday Word Puzzle featured in Dawn newspaper! Built with Next.js and Material UI, this digital version brings the beloved print challenge to life. Every Sunday, thousands enjoy solving this engaging word game — now, players can dive into the same experience online anytime, anywhere.

## 📰 From Print to Pixels

This online puzzle is a faithful adaptation of the word challenge regularly published in Dawn newspaper each Sunday. Known for its fun yet brain-teasing format, the game has earned a loyal following. With this project, we bring the same excitement to your screen — making it more interactive, accessible, and enriched with new features like real-time scoring and word definitions.

![Word Puzzle Game Screenshot](screenshot.png)

## 🎮 Game Rules

1. Find words using the letters displayed in the 3×3 grid
2. Rules for valid words:
   - Must be at least 4 letters long
   - Must include the center letter (highlighted in blue)
   - Can use each letter multiple times
   - Must be valid English words
3. Score increases with each valid word found
4. Each word can only be used once

## 🚀 Features

- Inspired by the classic Dawn newspaper word puzzle
- Modern, responsive UI built with Material UI
- Real-time word validation
- Dictionary definitions for found words
- Score tracking and word history display
- Graceful error handling with user-friendly messages
- Animated letter grid with hover effects

## 🛠️ Technical Stack

- **Framework**: Next.js 14
- **UI Library**: Material UI (MUI)
- **API**: Free Dictionary API for word definitions
- **Styling**: Material UI's styling solution
- **State Management**: React useState hooks

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dawn-words-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dawn-words-game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
dawn-words-game/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── LetterGrid.js    # 3x3 letter grid component
│   │   │   └── WordInput.js     # Word input and validation component
│   │   ├── layout.js            # Root layout with MUI providers
│   │   ├── page.js              # Main game page
│   │   └── theme.js             # MUI theme configuration
│   └── ...
├── package.json
└── README.md
```

## 🎯 Game Components

### LetterGrid
- 3×3 grid of letters with hover animations
- Center letter is visually distinct
- Fully responsive for all screen sizes

### WordInput
- Word submission & validation logic
- Error feedback and score updates
- Word history and definition display

## 🔄 API Integration

The game uses the Free Dictionary API to validate words and fetch definitions:
```javascript
GET https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```
Used to validate English words and fetch definitions.

## 🎨 Customization

You can customize the game by:

1. Modifying the theme in `src/app/theme.js`
2. Changing the game word in `src/app/page.js`
3. Adjusting validation rules in `src/app/components/WordInput.js`

## 🚀 Deployment

This app can be deployed to any platform that supports Next.js:

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📝 Future Enhancements

- [ ] Difficulty levels
- [ ] Score scaling with word length
- [ ] Timer challenge mode
- [ ] Multiplayer competition
- [ ] Themed word grids
- [ ] User accounts & leaderboards

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/) for word definitions
- [Material UI](https://mui.com/) for the UI components
- [Next.js](https://nextjs.org/) for the framework
- Dawn newspaper for the original puzzle inspiration
