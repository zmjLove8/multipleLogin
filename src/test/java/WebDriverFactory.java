import org.apache.logging.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public class WebDriverFactory {
    WebDriver driver;

    public WebDriverFactory(){
        System.out.println("Init driver");
        this.driver = initDriver();
    }

    //public Logger logger = org.apache.logging.log4j.LogManager.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());

    public void closeChrome(){
        driver.close();
    }

    public WebDriver initDriver(){
        String path = System.getProperty("user.dir");
        String osName = System.getProperty("os.name");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("load-extension=" + path + "//extension//rc");
        options.addArguments("--disable-web-security");
        options.addArguments("--disable-confirmation");
        options.addArguments("--disable-popup-blocking");
        options.addArguments("--use-fake-ui-for-media-stream");
        options.addArguments("--use-fake-device-for-media-stream");
        options.addArguments("--enable-logging=stderr");
        options.addArguments("--log-level=4");
        options.addArguments("--no-sandbox");
        options.addArguments("--allow-running-insecure-content");
        options.addArguments("--disable-infobars");
        options.addArguments("--allow-cross-origin-auth-prompt");
        if (osName.equals("Mac OS X")){
            System.out.println("chromedriver for Mac OS is running");
            System.setProperty("webdriver.chrome.driver",path+"//drivers//chromedriver");
        }
        driver = new ChromeDriver(options);
        LoginPage.driver = driver;
        Runner.driver = driver;
        return driver;
    }

    public void setEnvironment() throws InterruptedException {
        driver.get("chrome-extension://pgjpmeckehbghpkamdammcgmmmbojbdi/background.html"); //open Google
        Thread.sleep(3000);
        //Change Environment
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("toggleEnv()");
        Thread.sleep(3000);
        WebElement element = driver.findElement(WidgetBasePage.SERVER_BOX);
        element.clear();
        element.sendKeys("https://api-xmnup.lab.nordigy.ru");
        driver.findElement(WidgetBasePage.ENABLE_BUTTON).click();
        driver.findElement(WidgetBasePage.SAVE_BUTTON).click();
        Thread.sleep(2000);
    }

    public WebElement waitForElementPresent(int timeout, WebElement webElement) {
        return new WebDriverWait(driver, timeout).until(ExpectedConditions.visibilityOf(webElement));
    }
}
