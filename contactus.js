
    function showMenu(selected, level) {

        removeAllOutcomes()

        var classy = '#level' + level + selected;
        var x = document.querySelector(classy);

        if(!x.classList.contains('show')){
            clearAll();

            x.classList.add('show');
        }
        else {
            clearAll();
        }
        
    }

function showOutcome(selected) {

        removeAllOutcomes()

        var x = document.querySelector('#' + selected);

        if(x.classList.contains('hide')){
            x.classList.remove('hide');
            x.classList.add('show');
        }

}

function removeAllOutcomes() {
    var y = document.querySelectorAll('.outcome');
            y.forEach(function(item) {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        );
}

    function clearAll() {
        let x = document.querySelectorAll('.l2');

        x.forEach(function(y) {
            if(y.classList.contains('show')){
                y.classList.remove('show');
            }

        })
    }