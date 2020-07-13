import Base from '../Base'

class HomePage extends Base {
	get AcceptCookieElement() {
		return $('#js-cookie-accept')
	}
	cookieAccept() {
		this.AcceptCookieElement.waitForExist()
		this.AcceptCookieElement.click()
	}

	get allProductsMenuLink() {
		return $('li.allProducts a.menu.product-menu')
	}
	allProductMenu() {
		this.allProductsMenuLink.waitForExist()
		this.allProductsMenuLink.click()
	}
	get allProductsListItem() {
		return $('li.allProducts li.verticalMenuOption.book0:nth-child(2)>a')
	}
	allProductsListSelect() {
		this.allProductsListItem.waitForExist()
		this.allProductsListItem.click()
	}
}

export default new HomePage()
