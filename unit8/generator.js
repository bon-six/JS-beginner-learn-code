function * get_marks () {
    mark = 10;
    while (mark <=100) {
        yield mark;
        mark += 10;
    }
}


let mark_gen = get_marks();
for (const mark of mark_gen) {
    console.log(mark);
}



