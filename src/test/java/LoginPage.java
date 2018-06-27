import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    public static WebDriver driver;
    public void login(String username,String pwd) throws InterruptedException {
        WebDriverFactory webDriverFactory = new WebDriverFactory();
        //open Chrome and set environment
        webDriverFactory.setEnvironment();
        driver.findElement(WidgetBasePage.SINGIN_BUTTON).click();
        Thread.sleep(3000);
        //switch window handle
        String handle = driver.getWindowHandle();
        for (String handles : driver.getWindowHandles()){
            if(handles.equals(handle)){
                continue;
            }
            driver.switchTo().window(handles);
        }
      //  new WebDriverWait(driver,60).until(ExpectedConditions.numberOfElementsToBe(By.xpath("//*[@id=\"credential\"]"),1));
        WebElement element2 = driver.findElement(WidgetBasePage.FIRST_USERNAME_BOX);
        element2.clear();
        element2.sendKeys(username);
        WebElement webElement =driver.findElement(WidgetBasePage.NEXT_BUTTON);
        webElement.click();
        Thread.sleep(6000);
        WebElement element1 = driver.findElement(WidgetBasePage.SECOND_USERNAME_BOX);
        element1.clear();
        element1.sendKeys(username);
        WebElement password = driver.findElement(WidgetBasePage.PASSWORD_BOX);
        password.clear();
        password.sendKeys(pwd);
        driver.findElement(WidgetBasePage.SING_BUTTON).click();
        driver.switchTo().window(handle);
        //Navigate to call history
        driver.findElement(WidgetBasePage.CALLHISTORY).click();
        Thread.sleep(3000);
    }
}
