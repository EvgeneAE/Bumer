// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, score, name) {
    // Тут всё рисуем.
    console.clear();
    console.log(`${name}'s score: ${score}`);
    const borders = '🌳🌲🏘️⛽️🏢🏭🚦🌳🌲🏘️⛽️🏢🏭';
    const lines = '-';
    console.log(`${borders.repeat(2)}`);
    console.log(`${lines.repeat(50)}`);
    console.log(track.map((subtrack) => subtrack.join('')).join('\n'));
    console.log(`${lines.repeat(50)}`);
    console.log(`${borders.repeat(2)}`);
  }

  dimon() {
    console.log('Dimooon!');
  }
}

module.exports = View;
