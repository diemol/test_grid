var webdriver = require('selenium-webdriver'),
    driver = new webdriver.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities({'browserName': 'chrome'})
        .build();    

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();