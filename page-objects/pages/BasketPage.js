import Base from '../Base'
import App from '../App'

class BasketPage extends Base {
	get addButtonElement() {
		return $('.btn.btn-danger.addToBasketBtn.progress.default')
	}
	clickAddButton() {
		this.addButtonElement.waitForExist()
		this.addButtonElement.click()
	}
	get addBasketMessageElement() {
		return $('.addToBasketMessageText')
	}

	checkAddedMessage() {
		this.addBasketMessageElement.waitForExist()
		expect(this.addBasketMessageElement).toHaveText('Added')
	}
}

export default new BasketPage()
