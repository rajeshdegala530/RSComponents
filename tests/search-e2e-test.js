import App from '../page-objects/App'

describe('RS Search Functionality', () => {
	it('User To Land on Search Results Page - Keyword Search', () => {
		App.openHomePage()
		App.popUpWindowPresent()
		$('#js-cookie-accept').waitForExist()
		$('#js-cookie-accept').click()
		$('#searchTerm').waitForExist()
		$('#searchTerm').click()
		$('#searchTerm').setValue('test')
		$('#btnSearch').click()
		const foundmessage = $('.found-message')
		foundmessage.waitForExist()
		expect(foundmessage).toHaveTextContaining('products found for')

		/* 	if ($('.fsrInvite').isDisplayed()) {
            browser.closeWindow()
            /* const iframe = $('.fsrInvite')
            iframe.scrollIntoView()
            browser.switchToFrame(iframe)
            $('#fsrFocusFirst').isDisplayed()
			$('#fsrFocusFirst').click()  
		} else {
			console.log('No Iframe displayed')
		} */
	})

	it('User To Land on Zero Search Results Page - Invalid Search', () => {
		//$('#js-cookie-accept').waitForExist()
		//$('#js-cookie-accept').click()
		App.popUpWindowPresent()
		$('#searchTerm').waitForExist()
		$('#searchTerm').click()
		$('#searchTerm').setValue('oijojojjkoi')
		$('#btnSearch').click()
		const sorryMessage = $('//body//h1[1]')
		sorryMessage.waitForExist()
		expect(sorryMessage).toHaveTextContaining('Sorry')

		/* if ($('.fsrInvite').isDisplayed()) {
            browser.closeWindow()
            /* const iframe = $('.fsrInvite')
            iframe.scrollIntoView()
            browser.switchToFrame(iframe)
            $('#fsrFocusFirst').isDisplayed()
			$('#fsrFocusFirst').click()  
		} else {
			console.log('No Iframe displayed')
		} */
	})

	it('User should land on Product Details Page - Product id Search', () => {
		//$('#js-cookie-accept').waitForExist()
		//$('#js-cookie-accept').click()
		App.popUpWindowPresent()
		$('#searchTerm').waitForExist()
		$('#searchTerm').click()
		const input = $('#searchTerm').setValue('201-8298')
		$('#btnSearch').click()
		$('.keyValue').waitForExist()
		const productNumber = $('.keyValue')
		productNumber.waitForExist()
		expect(productNumber === input)

		/* 	if ($('.fsrInvite').isDisplayed()) {
            browser.closeWindow()
            /* const iframe = $('.fsrInvite')
            iframe.scrollIntoView()
            browser.switchToFrame(iframe)
            $('#fsrFocusFirst').isDisplayed()
			$('#fsrFocusFirst').click() 
		} else {
			console.log('No Iframe displayed')
		} */
	})

	it('User should land on Product Details Page - Product Name Search', () => {
		//$('#js-cookie-accept').waitForExist()
		//$('#js-cookie-accept').click()
		App.popUpWindowPresent()
		$('#searchTerm').waitForExist()
		$('#searchTerm').click()
		const input = $('#searchTerm').setValue('RS PRO Speed Bump')
		$('#btnSearch').click()
		$('.col-xs-12 main-page-header').waitForExist()
		const productName = $('.col-xs-12 main-page-header')
		productName.waitForExist()
		expect(productName === input)

		/* 	if ($('.fsrInvite').isDisplayed()) {
            browser.closeWindow()
            /* const iframe = $('.fsrInvite')
            iframe.scrollIntoView()
            browser.switchToFrame(iframe)
            $('#fsrFocusFirst').isDisplayed()
			$('#fsrFocusFirst').click() 
		} else {
			console.log('No Iframe displayed')
		} */
	})
})
