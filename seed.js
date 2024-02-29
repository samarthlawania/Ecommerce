const mongoose = require('mongoose');
const Product = require('./models/productSchema');

const product = [
    {
        name:'Iphone 11',
        img:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70&crop=false',
        price:177990,
        desc:"iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro."
    },
    {
        name:'Downshifter 13 Training & Gym Shoes For Men  (Black)',
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/f/b/7-fd6454-006-7-nike-black-bronzine-sea-glass-olive-aura-original-imagx9p4fxaqhgps.jpeg?q=70&crop=false',
        price:4295,
        desc:"Whether you're starting your running journey or an expert eager to switch up your pace, the Downshifter 13 is down for the ride. With a revamped upper, cushioning and durability, it helps you find that extra gear or take that first stride towards chasing down your goals."
    },
    {
        name:"TIMEWEAR New Track Number Dial, Day & Date, Brown Leather Strap Analog Watch - For Men 305WDTG",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/watch/3/b/m/na-1-csd-626-gold-gold-dd-casado-men-original-imagzbgh459qmywh.jpeg?q=70&crop=false",
        price:329,
        desc:"This men's watch has an added feature that displays the day and date. The watch's functionality is increased by the fact that you can use it to track the date and the day in addition to tracking the time. Thus, even if you have a habit to forget the date and day, the watch will make sure that you are always updated on them."
    },
    {
        name:'ASUS Aspire',
        img:'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/t/h/j/-original-imagwyp2uee8zxez.jpeg?q=70&crop=false',
        desc:"The Acer Aspire 3 laptop is not just a device; it's a companion that empowers your passion, enhances your productivity, and brings you closer to the people who matter. With its ready-to-go performance, Windows 11 integration, connectivity features, sleek design, and vibrant display, the Aspire 3 redefines what a laptop can be. Elevate your computing experience with a device that understands your needs and complements your lifestyle. The Acer Aspire 3 is not just a laptop; it's a gateway to a world of possibilities. Welcome to a new era of computing excellence.",
        price:34990
    }
];

async function seedDB() {
    await Product.insertMany(product);
    console.log("DATA SEEDED SUCCESSFULLY");
}

module.exports = seedDB;