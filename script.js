let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() { // показывает текущую ступеньку
        alert(this.step);
        return this
    }
};

ladder.up().up().down().showStep();