import App from '../page-objects/App'

describe('Add items to basket',() =>{

    it('User Should be able to add item to basket - Navigation',() => {
        App.openHomePage()
        App.popUpWindowPresent()
        $('#js-cookie-accept').waitForExist()
		$('#js-cookie-accept').click()
        const allProductsMenu =  $('.allProducts').click()
        $('#body > div.headerContainer > div > ul > li.allProducts > ul').waitForExist()
        

        





    })
    

})