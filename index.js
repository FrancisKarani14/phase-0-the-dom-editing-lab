// Get the body element
const body = document.body;

// Create and append the <h1> tag
const h1 = document.createElement('h1');
h1.textContent = 'Welcome to My Blog';
body.appendChild(h1);

// Create the <p> element
const p = document.createElement('p');

// Add <strong> inside <p>
const strong = document.createElement('strong');
strong.textContent = 'Bold text';
p.appendChild(strong);

// Add a space
p.appendChild(document.createTextNode(' '));

// Add <em> inside <p>
const em = document.createElement('em');
em.textContent = 'Italic text';
p.appendChild(em);

// Add a space
p.appendChild(document.createTextNode(' '));

// Add <a> inside <p> with the correct href
const a = document.createElement('a');
a.href = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
a.textContent = 'Learn more about HTML';
p.appendChild(a);

// Append the <p> to body
body.appendChild(p);

// Create and append a <table> with one row and one cell
const table = document.createElement('table');
const row = table.insertRow();
const cell = row.insertCell();
cell.textContent = 'Table Cell Content';
body.appendChild(table);
