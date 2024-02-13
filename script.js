class QueueVisualizer {
    constructor() {
        this.queue = [];
        this.visualization = document.getElementById("queue-visualization");
        this.enqueueInput = document.getElementById("enqueue-input");
        this.enqueueButton = document.getElementById("enqueue-button");
        this.dequeueButton = document.getElementById("dequeue-button");
        this.peekButton = document.getElementById("peek-button");
        this.clearButton = document.getElementById("clear-button");

        this.enqueueButton.addEventListener("click", this.enqueue.bind(this));
        this.dequeueButton.addEventListener("click", this.dequeue.bind(this));
        this.peekButton.addEventListener("click", this.peek.bind(this));
        this.clearButton.addEventListener("click", this.clear.bind(this));
    }

    updateQueueView() {
        this.visualization.innerHTML = "";
        for (const item of this.queue) {
            const element = document.createElement("div");
            element.classList.add("queue-item");
            element.innerText = item;
            this.visualization.appendChild(element);
        }
    }

    enqueue() {
        const inputValue = this.enqueueInput.value;
        if (inputValue.trim() !== "") {
            this.queue.push(inputValue);
            this.updateQueueView();
            this.enqueueInput.value = "";
        }
    }

    dequeue() {
        if (this.queue.length > 0) {
            this.queue.shift();
            this.updateQueueView();
        }
    }

    peek() {
        if (this.queue.length > 0) {
            alert("Front element: " + this.queue[0]);
        } else {
            alert("Queue is empty.");
        }
    }

    clear() {
        this.queue = [];
        this.updateQueueView();
    }
}

// Initialize the QueueVisualizer
const queueVisualizer = new QueueVisualizer();
queueVisualizer.updateQueueView();