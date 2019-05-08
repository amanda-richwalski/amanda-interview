import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

document.getElementById('simple-menu').addEventListener('click', () => {
  const formContainer = document.createElement('menu-item')
  formContainer.innerHTML = 'A message here'
  formContainer.setAttribute('OutlinedTextFields-container-150')
  document.body.appendChild(formContainer)
})

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
	let browser = await puppeteer.launch({
	  headless: false
	});
	let page = await browser.newPage();

	page.emulate({
	  viewport: {
		width: 500,
		height: 2400
	  },
	  userAgent: ''
	});

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.DenseAppBar-root-1');

	const html = await page.$eval('.DenseAppBar-root-1', e => e.innerHTML);
	expect(html).toBe('.App-header');

	browser.close();
  }, 16000);
});
