class App {

    openHomePage() {
        browser.url('https://uk.rs-online.com/web/')
       // browser.setWindowSize(1920, 1080)
       browser.maximizeWindow()
    }

    popUpWindowPresent() {
        if ($('#fsrFocusFirst').isDisplayed()) {
            const experienceWindow = $('#fsrFocusFirst')
            experienceWindow.click()
        }

    }
}

export default new App()