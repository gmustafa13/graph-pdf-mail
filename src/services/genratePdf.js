const puppeteer = require('puppeteer');
const fs = require('fs')
const path = require('path')
const { sendEmail } = require('./mail')

const pdfGenerator = async () => {
    try {
        let image = new Date().getTime(); // genrating unique image name
        let pdf = new Date().getTime(); // genrating unique pdf name
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('file://' + __dirname + '/index.html'); // reading html file
        await page.screenshot({ path: `images/${image}.png` }); // taking ss
        await page.pdf({ path: `downloads/${pdf}.pdf`, format: 'A4' }) // downloading pdf
        await browser.close();
        // call email function
        await sendEmail(path.join(__dirname, `../../downloads/${pdf}.pdf`), pdf)

        // Promise.all([
        //     fs.unlinkSync(path.join(__dirname, `../../downloads/${pdf}.pdf`)),
        //     fs.unlinkSync(path.join(__dirname, `../../images/${image}.png`))
        // ]) // deleting saved pdf/image file from server
        return true;
    } catch (error) {
        // removed file if sendemailfailed or any error any how it will throw error if not exist file
        Promise.all([
            fs.unlinkSync(path.join(__dirname, `../../downloads/${pdf}.pdf`)),
            fs.unlinkSync(path.join(__dirname, `../../images/${image}.png`))
        ]) 
        throw new Error(error.message)
    }
}

module.exports = {
    pdfGenerator
}