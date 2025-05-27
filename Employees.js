class Employees {
    #employees = {}; // private data member

    addEmployee(eid, name) { // method to operate on private data
        this.#employees[eid] = name;
    }

    updateEmployee(eid, newName) { // method to operate on private data
        if (this.#employees.hasOwnProperty(eid)) {
            this.#employees[eid] = newName;
        }
    }
}

const employees = new Employees();
employees.addEmployee(1, "John");
employees.addEmployee(2, "Mark");

employees.updateEmployee(2, "Jake");
