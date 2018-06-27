import org.openqa.selenium.*;
import org.apache.commons.io.FileUtils;
import java.io.IOException;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class Runner {
    public static WebDriver driver;
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 50; i++) {
            WebDriverFactory webDriverFactory = new WebDriverFactory();
            webDriverFactory.setEnvironment();
            JavascriptExecutor js = (JavascriptExecutor)driver;
            js.executeScript("runner._server.auth.login({username: '18442085445', extension: '101', password: 'Test!123'})");
            Thread.sleep(3000);
            //Click Skip
            WebElement skip = driver.findElement(WidgetBasePage.SKIP_BUTTON);
            webDriverFactory.waitForElementPresent(5,skip);
            skip.click();
            Thread.sleep(3000);
            driver.findElement(WidgetBasePage.CALLHISTORY).click();
            Thread.sleep(3000);
            //screenshot
            takeScreenShot();
            //Close Chrome
            webDriverFactory.closeChrome();
        }
    }

    public static void takeScreenShot() throws InterruptedException {
        DateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
        Calendar calendar = Calendar.getInstance();
        String imageName = df.format(calendar.getTime());
        //Take screenshot
        File screenShot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        //copy screenShot
        try {
            String savePath = "/Users/paddy.zhong/Documents/loginImage/";
            FileUtils.copyFile(screenShot,new File(savePath+imageName+".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Thread.sleep(2000);
    }
}
