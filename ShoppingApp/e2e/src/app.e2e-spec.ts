import { AppPage } from './app.po';
import { browser, element, by, logging } from 'protractor';

// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getTitleText()).toEqual('ShoppingApp app is running!');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });

  
// });

describe('workspace-project App', () => {

  it('should navigate to server page and reset DB', function () {
    browser.waitForAngularEnabled(false);
    browser.get("http://localhost:3000/setupDb");
    expect(browser.getCurrentUrl()).toContain("setupDb");
  })


  it('should navigate to login page', function () {
    browser.get("http://localhost:4200/login");
    expect(browser.getCurrentUrl()).toContain("login");
  })

  it('should login successfully', function () {
    var email = element(by.name("emailId"));
    var pass = element(by.name("password"));

    email.sendKeys("demo@infy.com");
    pass.sendKeys("demo");

    browser.sleep(1000);
    var button = element(by.name("submit"));
    button.click();

    var successButton = element(by.name("successbutton"));
    successButton.click()

    expect(browser.getCurrentUrl()).toContain("dashboard");
  });

  // it('SHould search for products', function () {
  //   var searchInput = element(by.name('search'));
  //   searchInput.sendKeys('electronics');
  //   var searchButton = element(by.name("searchbutton"));
  //   searchButton.click();
  // })

  it("Should check for products by clicking on different categories", function () {
    var fur = element(by.name('furniture'));
    fur.click();
    browser.sleep(1000);
    element.all(by.name("buynow")).then(function (allButtons) {
      allButtons[0].click();
      allButtons[1].click();
    })

    browser.sleep(1000);
    var viewCart = element(by.name("vieworders"));
    viewCart.click();
    expect(browser.getCurrentUrl()).toContain("view-orders");
  })

  // it('should add item to cart', function () {

  // })
  browser.sleep(1000);
  it('should check no of products bought', function () {
    var noofProds = element(by.id('products'));
    expect(noofProds.getText()).toContain("You have 2 products in your cart!");
  })

  browser.sleep(1000);
  it('should go back to dashboard', function () {
    var continueShopping = element(by.name('cntue'));
    continueShopping.click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  })
  
  browser.sleep(1000);
  it('should logout', function () {
    var logout = element(by.name('logout'));
    logout.click();
    expect(browser.getCurrentUrl()).toContain("login");

  })
  
});
