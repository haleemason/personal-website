/**
 * @class FullyReveal
 * Use IntersectionObserver to detect if an element
 * is in view or not. Then add and delete a class.
 * Use this to animate the element
 *
 * Usage: Add `data-reveal` on the DOM objects you wanna listen to.
 * You can also set `data-revealThreshold="0.5"` for a different threshold,
 * else it fallbacks to 0.25
 * If you only want it to trigger once, write `data-reveal="once"`
 *
 * Import FullyReveal and initialize it like this:
 *
 * import FullyReveal from './FullyReveal.js';
 * var fullyReveal = new FullyReveal;
 * fullyReveal.init();
 *
 * An then in your HTML:
 * <div data-reveal>Some content</div>
 * 
 * And in your CSS
 * [data-reveal] {
 *   opacity: 0;
 *   transition: opacity 0.8s;
 * }

 * [data-reveal].visible {
 *   opacity: 1;
 * }
 */
class FullyReveal {
    constructor() {
        this.observer = false;
    }
    init() {
        if (this.observer) {
            this.observer.disconnect();
        }
        let className = "visible";
        let threshold = [0, 0.25, 0.5, 0.75];
        let defaultTriggerThreshold = 0.25;
        this.debug = false;

        this.className = className;
        this.threshold = threshold;
        this.defaultTriggerThreshold = defaultTriggerThreshold;
        this.elements = [...document.querySelectorAll("[data-reveal]")];

        this.options = {
            threshold: this.threshold
        };

        if (this.elements) {
            // Setup scroll lisseners
            this.events();
        }
    }
    events() {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                const entryThreshold = entry.target.dataset.revealThreshold
                    ? Number(entry.target.dataset.revealThreshold)
                    : this.defaultTriggerThreshold;
                // Check if the target is more than 50% visible
                if (entry.intersectionRatio >= entryThreshold && entry.isIntersecting) {
                    if (this.debug) console.log("Reveal! ", entry.isIntersecting);
                    console.log(entry.target.dataset);
                    if (entry.target.dataset.reveal === "once") {
                        this.observer.unobserve(entry.target);
                    }
                    entry.target.classList.add(this.className);
                }
                // Check if the target is completely hidden
                else if (!entry.isIntersecting) {
                    if (this.debug) console.log("Hidden! ", entry.isIntersecting);
                    entry.target.classList.remove(this.className);
                }
            });
        };

        this.observer = new IntersectionObserver(observerCallback, this.options);

        this.elements.forEach((item) => {
            this.observer.observe(item);
        });
    }
}
export default FullyReveal;
