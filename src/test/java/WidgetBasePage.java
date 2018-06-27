import org.openqa.selenium.By;

public class WidgetBasePage {
    public static final By SERVER_BOX = By.xpath("//div[contains(text(),'Server')]//input");
    public static final By ENABLE_BUTTON = By.cssSelector("[class*='slider']");
    public static final By SAVE_BUTTON = By.xpath("//div[contains(text(),'Save')]");
    public static final By SINGIN_BUTTON = By.xpath("//*[text()='Sign In']");
    public static final By FIRST_USERNAME_BOX = By.xpath("//*[@id=\"credential\"]");
    public static final By NEXT_BUTTON = By.xpath("//*[text()='Next']");
    public static final By SECOND_USERNAME_BOX = By.xpath("//*[@name='LoginName']");
    public static final By PASSWORD_BOX = By.xpath("//*[@id=\"password\"]");
    public static final By SING_BUTTON = By.xpath("//*[@type=\'submit\']");
    public static final By POPUPSINGIN_BUTTON = By.xpath("//*[@id=\"pageContent\"]/div/div/div/div/div/div[2]/div[2]/form/div/div[5]/button");
    public static final By CALLHISTORY = By.xpath("//div[@title='History']");
    public static final By SKIP_BUTTON = By.xpath("//div[contains(@class,'secondaryButton')]");
}
