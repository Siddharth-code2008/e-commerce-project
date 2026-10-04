// take value of category through anchor tags of index.html
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const products = [

    // SHOES
    {
        name: "Running Shoes",
        price: "Rs 1499",
        category: "shoes",
        src: "images/running shoes.jpg"
    },
    {
        name: "Casual Sneakers",
        price: "Rs 1799",
        category: "shoes",
        src: "images/casual sneakers.jpg"
        
    },
    {
        name: "Formal Shoes",
        price: "Rs 2299" ,
        category: "shoes",
        src: "images/formal shoes.jpg"
    },
    {
        name: "Sports Shoes",
        price: "Rs 1999",
        category: "shoes",
        src: "images/sports shoes.jpg"
    },
    {
        name: "Walking Shoes",
        price: "Rs 1299",
        category: "shoes",
        src: "images/walking shoes.jpg"
    },
    {
        name: "Leather Boots",
        price: "Rs 2499",
        category: "shoes",
        src: "images/boots.jpg"
    },
    {
        name: "Canvas Sneakers",
        price:"Rs 1599",
        category: "shoes",
        src: "images/canvas sneakers.jpg"
    },
    {
        name: "Training Shoes",
        price:"Rs 1899",
        category: "shoes",
        src: "images/traning shoes.jpg"
    },


    // T-SHIRTS
    {
        name: "Cotton T-Shirt",
        price:"Rs 599",
        category: "tshirts",
        src: "images/cotton tshirt.jpg"
    },
    {
        name: "Oversized T-Shirt",
        price:"Rs 699",
        category: "tshirts",
        src: "images/oversized tshirt.jpg"
    },
    {
        name: "Graphic T-Shirt",
        price:"Rs 749",
        category: "tshirts",
        src: "images/graphic tshirt.jpg"
    },
    {
        name: "Printed T-Shirt",
        price:"Rs 649",
        category: "tshirts",
        src: "images/printed tshirt.jpg"
    },
    {
        name: "Polo T-Shirt",
        price:"Rs 899",
        category: "tshirts",
        src: "images/polo tshirt.jpg"
    },
    {
        name: "Roundneck T-Shirt",
        price:"Rs 549",
        category: "tshirts",
        src: "images/roundneck tshirt.jpg"
    },
    {
        name: "Slimfit T-Shirt",
        price:"Rs 699",
        category: "tshirts",
        src: "images/slimfit tshirt.jpg"
    },
    {
        name: "Sports T-Shirt",
        price:"Rs 799",
        category: "tshirts",
        src: "images/sports tshirt.jpg"
    },


    // COSMETICS
    {
        name: "Face Wash",
        price:"Rs 299",
        category: "cosmetics",
        src: "images/face wash.jpg"
    },
    {
        name: "Body Lotion",
        price:"Rs 349",
        category: "cosmetics",
        src: "images/body lotion.jpg"
    },
    {
        name: "Lip Balm",
        price:"Rs 199",
        category: "cosmetics",
        src: "images/lip balm.jpg"
    },
    {
        name: "Face Cream",
        price:"Rs 449",
        category: "cosmetics",
        src: "images/face cream.jpg"
    },
    {
        name: "Makeup Kit",
        price:"Rs 899",
        category: "cosmetics",
        src: "images/makeup kit.jpg"
    },
    {
        name: "Eye Shadow",
        price:"Rs 499",
        category: "cosmetics",
        src: "images/eye shadow.jpg"
    },
    {
        name: "Hair Serum",
        price:"Rs 399",
        category: "cosmetics",
        src: "images/hair serum.jpg"
    },
    {
        name: "Body Scrub",
        price:"Rs 379",
        category: "cosmetics",
        src: "images/body scrub.jpg"
    },


    // TOYS
    {
        name: "Toy Car",
        price:"Rs 399",
        category: "toys",
        src: "images/toy car.jpg"
    },
    {
        name: "Building Blocks",
        price:"Rs 599",
        category: "toys",
        src: "images/jenga.jpg"
    },
    {
        name: "Remote Car",
        price:"Rs 899",
        category: "toys",
        src: "images/remote car.jpg"
    },
    {
        name: "Toy Robot",
        price:"Rs 749",
        category: "toys",
        src: "images/robot.jpg"
    },
    {
        name: "Action Figure",
        price:"Rs 499",
        category: "toys",
        src: "images/action figures.jpg"
    },
    {
        name: "Puzzle Game",
        price:"Rs 349",
        category: "toys",
        src: "images/puzzle game.jpg"
    },
    {
        name: "Soft Teddy",
        price:"Rs 699",
        category: "toys",
        src: "images/teddy bear.jpg"
    },
    {
        name: "Toy Train",
        price:"Rs 549",
        category: "toys",
        src : "images/toys.jpg"
    },


    // FURNITURE
    {
        name: "Office Chair",
        price:"Rs 4999",
        category: "furniture",
        src : "images/office chair.jpg"
    },
    {
        name: "Study Table",
        price:"Rs 5999",
        category: "furniture",
        src : "images/study table.jpg"
    },
    {
        name: "Wooden Chair",
        price:"Rs 2999",
        category: "furniture",
        src : "images/wooden table.jpg"
    },
    {
        name: "Coffee Table",
        price:"Rs 3999",
        category: "furniture",
        src: "images/coffee table.jpg"
    },
    {
        name: "Bookshelf Cabinet",
        price:"Rs 6499",
        category: "furniture",
        src : "images/bookshelf cabinet.jpg"
    },
    {
        name: "Bedside Table",
        price:"Rs 2499",
        category: "furniture",
        src : "images/bedside table.jpg"
    },
    {
        name: "Dining Table",
        price:"Rs 8999",
        category: "furniture",
        src : "images/dining table.jpg"
    },
    {
        name: "Sofa Set",
        price:"Rs 14999",
        category: "furniture",
        src : "images/sofa-set.jpg"
    },


    // ELECTRONICS
    {
        name: "Wireless Headphones",
        price:"Rs 1999",
        category: "electronics",
        src : "images/wireless headphone.jpg"
    },
    {
        name: "Gaming Headphones",
        price:"Rs 2499",
        category: "electronics",
        src : "images/gaming headphone.jpg"
    },
    {
        name: "Bluetooth Headphones",
        price:"Rs 1799",
        category: "electronics",
        src : "images/bluetooth headphone.jpg"
    },
    {
        name: "Gaming Laptop",
        price:"Rs 54999",
        category: "electronics",
        src : "images/gaming laptop.jpg"
    },
    {
        name: "Business Laptop",
        price:"Rs 44999",
        category: "electronics",
        src : "images/wireless headphone.jpg"
    },
    {
        name: "Mechanical Keyboard",
        price:"Rs 2499",
        category: "electronics",
        src : "images/mechanical keyboard.jpg"
    },
    {
        name: "Wireless Keyboard",
        price:"Rs 1499",
        category: "electronics",
        src : "images/wireless keyboard.jpg"
    },
    {
        name: "Wireless Mouse",
        price:"Rs 799",
        category: "electronics",
        src : "images/wireless mouse.jpg"
    }

];
const boxes = document.querySelectorAll(".box");

function productsrc(category){
    let i=0;
    for(let product of products){
         if (product.category == category){
            let block = document.createElement("img");
            block.src = product.src;
            block.classList.add("block");
            boxes[i].appendChild(block);

            

            let block_heading = document.createElement("b");
            block_heading.innerText = product.name;
            block_heading.classList.add("block_heading");
            boxes[i].appendChild(block_heading);

            
            let block_price = document.createElement("div");
            block_price.innerText = product.price;
            block_price.classList.add("block_price");
            boxes[i].appendChild(block_price);

            
            let add_button = document.createElement("button");
            add_button.innerText = "Add +";
            add_button.classList.add("add_button");
            boxes[i].appendChild(add_button);
            

            
            add_button.addEventListener("click",() =>{
                add_button.innerText = "added";
                add_button.style.backgroundColor = "green";
                add_button.style.color = "white";
                localStorage.setItem(product.name,JSON.stringify(product.name));
            
            })            
            i++;
            
        }
    }
}

productsrc(category);

