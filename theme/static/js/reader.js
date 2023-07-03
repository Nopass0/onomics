//#blocks_container - div block with all blocks
//File uses jQuery
//#csrf_token - hidden input with csrf token
//#ch_id - hidden input with chapter id

let blocks_container = $("#blocks_container")
let csrf_token = $("#csrf_token").val()
let ch_id = $("#ch_id").val()
let lastScrollTop = 0;
let header = $("#header")
let menu = $("#bottom_menu")

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//Function for getting blocks by sequnce_number from server and adding them to blocks_container div
function addBlock(sequnce_number) {
    $.ajax({
        url: `/api/v1/block.get/${ch_id}/${sequnce_number}`,
        type: "GET",
        headers: {
            "X-CSRFToken": csrf_token,
        },
        success: function (data) {
            let block = data[0]['image']
            //create image element
            let image = document.createElement("img")
            //add classes to image element
            image.className = "w-full sm:w-[800px]"
            image.id = "block"
            //add data-sequnce_number attribute to image element
            image.setAttribute("data-sequnce_number", sequnce_number)
            image.src = `/${block}`
            //add image element to blocks_container div at the end using insertAfter function
            insertAfter(blocks_container.children().last()[0], image)
        },
        error: function (data) {
            console.log("error")
        },
    })
}

//On load page get first three blocks and add them to blocks_container div
$(document).ready(function () {
  //add first block with class w-full sm:w-[800px] h-8
  let nullBlock = document.createElement("div")
  nullBlock.className = "w-full sm:w-[800px] h-12"
  blocks_container.append(nullBlock)

  //get first three blocks
  addBlock(1)
  addBlock(2)
})

//On scroll to bottom of page get next block and add it to blocks_container div
$(window).scroll(function () {

  
  //if mobile device then hide header on scroll down and show on scroll up
  let style = "transition: top 0.25s linear;" 
  header.attr("style", style)
  menu.attr("style", style)
  if ($(window).width() < 640) {
    let st = $(this).scrollTop();
    if (st+1 > lastScrollTop){
        //animation slow tranlate
        setTimeout(function() {
          document.querySelector("header").style.top = "-200px"
          document.querySelector("#bottom_menu").style.bottom = "-200px"
        }, 200);

    } else {
        //animation slow tranlate
        setTimeout(function() {
          document.querySelector("header").style.top = "0px"
          document.querySelector("#bottom_menu").style.bottom = "0px"
        }, 200);
    }
    lastScrollTop = st;
  }


  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      let last_block = blocks_container.children().last()
      let sequnce_number = last_block.attr("data-sequnce_number")
      addBlock(parseInt(sequnce_number) + 1)
  }


})