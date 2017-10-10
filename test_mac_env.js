var webdriver = require('selenium-webdriver'),
    driver = new webdriver.Builder()
        .usingServer('http://docker.for.mac.localhost:4444/wd/hub')
        .withCapabilities({'browserName': 'chrome'})
        .build();    

driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver', webdriver.Key.RETURN);
driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
