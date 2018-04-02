const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' })
  await page.click(`.Button--add`)
  await page.click(`.Button--add`)
  await page.click(`.Button--add`)
  await page.click('[data-test-selector="list-item"]')
  await page.click(`.Button--delete`)
  await page.click(`.Button`)

  await browser.close()
})()
