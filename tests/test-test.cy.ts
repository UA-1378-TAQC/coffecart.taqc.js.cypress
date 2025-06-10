import {CartPage} from '@pages/cart-page';
import {MenuPage} from '@pages/menu-page';
import {ItemsInCartData as Data} from '@tests/data/decrease-items-in-cart-data';

describe.only('Decrease Items in Cart', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it.only('Verify that user can decrease the number of items in the Cart', () => {
        cy.allure().step(`Click on drink: ${Data.stepTwoTestData}`,false);
        menuPage.clickOnDrink(Data.stepTwoTestData);
        menuPage.clickOnDrink(Data.stepTwoTestData);

        cy.allure().step(`Go to Cart Page`);
        menuPage.goToCartPage();

        cy.allure().step(`Click on the '-' button`);
        cartPage.clickMinusButton();

        cy.allure().step('Verify step 6-9');
        cartPage.getCartData().should('have.text',Data.stepSixTestData);
        cartPage.getTotalPriceOfItem().should('have.text',Data.stepSevenTestData);
        cartPage.getTotalButton().should('have.text',Data.stepEightTestData);

        cy.allure().step('Verify it the text of the link to the "Cart" page on the header is equal to "cart (1)"')
        cartPage.getCartAmount().should('have.text',Data.stepNineTestData);

        cy.allure().step(`Click on the '-' button`);
        cartPage.clickMinusButton();

        cy.allure().step('No coffee, go add some.');
        cartPage.cartStatus().should('have.text',Data.stepTenTestData);

    });
});
