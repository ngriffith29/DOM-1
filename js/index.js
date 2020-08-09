const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};


let navCreateA = document.querySelector('nav')

navCreateA.prepend('I am First')

let a = document.createElement('a')
a.style.color = "green"
let textNode = 'CHECK THIS OUT'
a.append(textNode)
navCreateA.append(a)
console.log(a)


let nav = document.querySelector('nav').children
let prependA = document.createElement('a')
prependA.append(textNode)



let index = -1
for (var x in siteContent.nav) {

  // console.log(siteContent.nav[x])

  if (siteContent.nav[x] === 'img/logo.png') {


  } else {

    index++
    // console.log(siteContent.nav[x])
    // console.log(index)
    // console.log(nav[index])
    nav[index].innerHTML = `${siteContent.nav[x]}`
    nav[index].style.color = "green"

  }
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById('cta-img')

ctaImage.setAttribute('src', siteContent.cta["img-src"])

let ctaTextH1 = document.querySelector('h1').innerHTML = siteContent.cta.h1

let button = document.querySelector('button').innerHTML = siteContent.cta.button

let mainContent = document.querySelector('nav').children
let mainIndex = -1




let h4Titles = []



let o = Object.entries(siteContent["main-content"])

// console.log(o)

o.map((e, index) => {
  // console.log(e[0])
  // console.log(index)
  if (e[0].includes('img')) {

    let middleImage = document.getElementById('middle-img')
    middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

  } else {
    h4Titles.push(e)
  }



})

console.log(h4Titles)
var x = document.querySelectorAll(".text-content");
let titleIndex = 0
let titleIndexContent = 1

let pIndex = 1
let pIndexContent = 1
for (const h4 of x) {

  console.log(h4.querySelector('h4'))

  h4.querySelector('h4').innerHTML = h4Titles[titleIndex][titleIndexContent]
  titleIndex += 2

  h4.querySelector('p').innerHTML = h4Titles[pIndex][pIndexContent]
  pIndex += 2


}


let contact = document.querySelector('.contact')

console.log(contact)

contact.querySelector('h4').innerHTML = siteContent.contact["contact-h4"]
let contactPTags = contact.querySelectorAll('p')







function iterate(item, index) {
  let newContactArr = Object.values(siteContent.contact)
  console.log(index)
  console.log(newContactArr)
  item.innerHTML = newContactArr[index + 1]
}

contactPTags.forEach(iterate);


let footer = document.querySelector('footer').querySelector('p').innerHTML = siteContent.footer.copyright

console.log(footer)


let ul = document.createElement("ul")
document.querySelector('footer').append(ul)
let firstLi = document.createElement("li")
firstLi.innerHTML = 'hi'

ul.append(firstLi)


let secondLi = document.createElement('li')
secondLi.innerHTML = 'second'

ul.prepend('im first')









