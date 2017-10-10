const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://docker.for.mac.localhost:4444/wd/hub')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
