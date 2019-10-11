const cardTemplate = (name, numbers, numbersDrawn) => {
  let html = '<table class="card" cellpadding=4 cellspacing=4>';
  html += `<tr><th class="table-title" colspan="3">${name}</th></tr>`;
  for (let i = 0; i <= numbers.length; i++) {
    html += (i % 3 == 0) ? '<tr>' : '';
    if (i == numbers.length/2) {
      html += '<th class="blank"></th>'
    } else {
      let index = i < numbers.length/2 ? i : i-1;
      let find = numbersDrawn.find((element) => {
        return element == numbers[index];
      });
      html += '<th';
      html += find ? ' class="mark"' : ''; 
      html += `>${numbers[index]}</th>`;
      
    }
    html += (i % 3 == 2) ? '</tr>' : ''; 
  }
  html += '</table>';
  return html;
}

const numberDrawnTemplate = (number) => {
  return `<div class="number-drawn">${number}</div>`
}

export { cardTemplate, numberDrawnTemplate };