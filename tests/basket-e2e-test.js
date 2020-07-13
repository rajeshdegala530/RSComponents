import App from '../page-objects/App'
import HomePage from '../page-objects/pages/HomePage'
import CategoryListingPage from '../page-objects/pages/CategoryListingPage'
import BasketPage from '../page-objects/pages/BasketPage'

describe('Add items to basket', () => {
	it('User Should be able to add item to basket - Navigation', () => {
		App.openHomePage()
		App.popUpWindowPresent()
		HomePage.cookieAccept()
		HomePage.allProductMenu()
		HomePage.allProductsListSelect()
		CategoryListingPage.categoryTitle()
		CategoryListingPage.subCatProductlist()
		CategoryListingPage.click_subCategoryPageLink2()
    CategoryListingPage.check_productAddHeader()
    BasketPage.clickAddButton()
    BasketPage.checkAddedMessage()
	/* 	const mainpageheader = $('.main-page-header')
		mainpageheader.waitForExist()
		expect(mainpageheader).toBeDisplayed
    console.log(mainpageheader.getText())
    $('.btn.btn-danger.addToBasketBtn.progress.default').waitForExist()
    $('.btn.btn-danger.addToBasketBtn.progress.default').click()
    $('.addToBasketMessageText').waitForExist()
    console.log($('.addToBasketMessageText'))
    expect($('.addToBasketMessageText')).toHaveValue('Added') */

		// expect(mainpageheader).toHaveText('Battery Chargers - Lead Acid & Automotive')

		//  $('li.allProducts a.menu.product-menu').click()
		//	$('li.allProducts li.verticalMenuOption.book0:nth-child(2)>a').click()
		/* // let gridText = $('#categories-grid div:nth-child(3)')
   // console.log(gridText.getText())
   // gridText.click()
    
    // const test1 = $('#categories-grid div.card.js-tile :nth-child(2) ')
   // const test1 = $('#categories-grid div.content :nth-child(5)>a')
    const test1 = $('#categories-grid div:nth-child(2) > div')
    expect(test1).toBeDisplayed()
    test1.click() */

		//  $('#body > div.headerContainer > div > ul > li.allProducts > ul').waitForExist()
	})
})
