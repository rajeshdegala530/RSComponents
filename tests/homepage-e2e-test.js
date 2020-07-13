import App from '../page-objects/App'

describe('RS Home Page', () => {
	it('User Should be able to accept RS Cookie', () => {
		App.openHomePage()
		App.popUpWindowPresent()
		$('#js-cookie-accept').waitForExist()
		$('#js-cookie-accept').click()
	})

	it('User able to see RS Logo', () => {
		App.popUpWindowPresent()
		const logo = $('.icon-rslogo')
		const isDisplayed = logo.isExisting()
		console.log('RS Logo is Displayed -- ' + isDisplayed)
	})
	it('User should be able to Reload RS Home Page', () => {
		App.popUpWindowPresent()
		$('.icon-rslogo').waitForExist()
		$('.icon-rslogo').click()
		$('.icon-rslogo').waitForExist()
	})
})
