/**
 * Entry point
 * @version 1.0.0
 *  - App loading
 *  @author Aelion - 2024-03 <ismail.bassaoud@gmail.com>
 */

class Main {
    constructor() {
        this.#boostrap();
    }

    #boostrap(){
        console.log("Hellow world!");
    }
}

(
    () => {
        const app = new Main();
    }
)(); // Autocalled JS function!
