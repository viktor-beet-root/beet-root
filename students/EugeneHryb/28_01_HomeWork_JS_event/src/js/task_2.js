(function(){
    const productTable = document.querySelector('.product-table')

    productTable.addEventListener('click', sortTable);

    function sortTable(event){
        if(event.target.tagName === "TH"){
            const indexSort = event.target.cellIndex;

            const table = Array.from(productTable.rows);
            table.splice(0,1);
            table.sort(function(itemA, itemB){
                let contentA = itemA.cells[indexSort].innerText;
                let contentB = itemB.cells[indexSort].innerText;
                contentA = contentA.toLowerCase();
                contentB = contentB.toLowerCase();

                if(contentA > contentB) return 1;
                else return -1;
            })
            productTable.tBodies[0].append(...table);
        }
    }
    //console.log(productTable.rows)
})()
