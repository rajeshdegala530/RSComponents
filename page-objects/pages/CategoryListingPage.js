import Base from '../Base'

class CategoryListingPage extends Base {
	
	get productlistpagetitle() {
		return $('#categoryNameTitle')
	}

	categoryTitle() {
		this.productlistpagetitle.waitForExist()
		expect(this.productlistpagetitle).toBeDisplayed()
	}

	get subCatPage() {
		return $('#categories-grid div:nth-child(3) > div > a')
	}
	subCatProductlist() {
		this.subCatPage.waitForExist()
		this.subCatPage.click()
	}
	get subCatPage2() {
		return $('#categories-grid div:nth-child(4)>div>a')
	}
	click_subCategoryPageLink2() {
		this.subCatPage2.waitForExist()
		expect(this.subCatPage2).toBeDisplayed()
		this.subCatPage2.click()
	}

	get productAddPage() {
		return $('.main-page-header')
	}

	check_productAddHeader() {
		this.productAddPage.waitForExist()
		expect(this.productAddPage).toBeDisplayed()
		console.log(this.productAddPage.getText())
    }
    
    get addButtonElement()
    {
        return $('.btn.btn-danger.addToBasketBtn.progress.default')

    }
    clickAddButton()
    {
        this.addButtonElement.waitForExist()
        this.addButtonElement.click()
    }
    get addBasketMessageElement()
    {
        return $('.addToBasketMessageText')
    }

    checkAddedMessage()
    {
        this.addBasketMessageElement.waitForExist()
        expect(this.addBasketMessageElement).toHaveText('Added')
    }

}

export default new CategoryListingPage()
