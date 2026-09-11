import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots');

if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function preparePage(page) {
  await page.addStyleTag({
    content: `
      [data-aos] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
      * {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }
    `
  });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto('https://ksa-afflite.vercel.app/', { waitUntil: 'networkidle2' });
  await preparePage(page);
  await new Promise(r => setTimeout(r, 1000));

  // 1. Hero Header
  console.log('1. Hero');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '01_hero_header.png') });

  // 2. About section element
  console.log('2. About element');
  const aboutEl = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('المصطفى كلين'));
    const section = h2?.closest('.bg-\\[\\#911938\\]');
    section?.scrollIntoView({ behavior: 'instant', block: 'center' });
    return section;
  });
  await new Promise(r => setTimeout(r, 500));
  if (aboutEl.asElement()) {
    await aboutEl.asElement().screenshot({ path: path.join(OUTPUT_DIR, '02_about_company.png') });
  }

  // 3. Termite Banner element
  console.log('3. Termite element');
  const termiteEl = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('النمل الابيض'));
    const section = h2?.closest('.relative.w-full');
    section?.scrollIntoView({ behavior: 'instant', block: 'center' });
    return section;
  });
  await new Promise(r => setTimeout(r, 500));
  if (termiteEl.asElement()) {
    await termiteEl.asElement().screenshot({ path: path.join(OUTPUT_DIR, '03_termite_banner.png') });
  }

  // 4. Services Grid (dedicated page)
  console.log('4. Services Grid');
  await page.goto('https://ksa-afflite.vercel.app/خدماتنا', { waitUntil: 'networkidle2' });
  await preparePage(page);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '04_services_grid.png') });

  // Return to home
  await page.goto('https://ksa-afflite.vercel.app/', { waitUntil: 'networkidle2' });
  await preparePage(page);
  await new Promise(r => setTimeout(r, 800));

  // 5. Rodents Control element
  console.log('5. Rodents element');
  const rodentEl = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('القوارض'));
    const section = h2?.closest('.bg-\\[rgb\\(50\\,136\\,167\\)\\]');
    section?.scrollIntoView({ behavior: 'instant', block: 'center' });
    return section;
  });
  await new Promise(r => setTimeout(r, 500));
  if (rodentEl.asElement()) {
    await rodentEl.asElement().screenshot({ path: path.join(OUTPUT_DIR, '05_rodents_control.png') });
  }

  // 6. Garden Spraying element
  console.log('6. Garden element');
  const gardenEl = await page.evaluateHandle(() => {
    const p = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('مبيدات أوروبية'));
    const section = p?.closest('.bg-\\[rgb\\(255\\,202\\,0\\)\\]');
    section?.scrollIntoView({ behavior: 'instant', block: 'center' });
    return section;
  });
  await new Promise(r => setTimeout(r, 500));
  if (gardenEl.asElement()) {
    await gardenEl.asElement().screenshot({ path: path.join(OUTPUT_DIR, '06_garden_spraying.png') });
  }

  // 7. Cockroaches element
  console.log('7. Cockroaches element');
  const insectEl = await page.evaluateHandle(() => {
    const p = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('آمنة 100% على صحة'));
    const section = p?.closest('.bg-\\[rgb\\(50\\,136\\,167\\)\\]');
    section?.scrollIntoView({ behavior: 'instant', block: 'center' });
    return section;
  });
  await new Promise(r => setTimeout(r, 500));
  if (insectEl.asElement()) {
    await insectEl.asElement().screenshot({ path: path.join(OUTPUT_DIR, '07_insects_control.png') });
  }

  // 8. Contact Form
  console.log('8. Contact Form');
  await page.goto('https://ksa-afflite.vercel.app/تواصل-معنا', { waitUntil: 'networkidle2' });
  await preparePage(page);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '08_contact_section.png') });

  // 9. Mobile Responsive View
  console.log('9. Mobile Showcase');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('https://ksa-afflite.vercel.app/', { waitUntil: 'networkidle2' });
  await preparePage(page);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '09_mobile_showcase.png') });

  // 10. Full Landing Page Desktop
  console.log('10. Full Landing Page');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto('https://ksa-afflite.vercel.app/', { waitUntil: 'networkidle2' });
  await preparePage(page);
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '10_full_landing_page.png'), fullPage: true });

  console.log('Screenshots with full opacity and styles completed!');
  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
