
function func3(a1, a2, ...ax) {
    console.log('Inside func3');
    console.log(`a1 is ${a1}`);
    console.log(`a2 is ${a2}`);
    console.log(`ax is ${ax}`);
    console.log(`lenght of ax is ${ax.length}`);
}

func3();
func3(1);
func3(1, 2);
func3(1, 2, 3);
func3(1,2,3,4);
func3(1,[2,3],[4,5,6],7,8);