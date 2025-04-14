const progressWrapper = document.createElement('div');
progressWrapper.id = 'progressWrapper';
progressWrapper.style.width = '100%';
progressWrapper.style.backgroundColor = '#ccc';
progressWrapper.style.height = '30px';
document.body.appendChild(progressWrapper);

const progressBar = document.createElement('div');
progressBar.id = 'progressBar';
progressBar.style.width = '0%';
progressBar.style.backgroundColor = '#4caf50';
progressBar.style.height = '100%';
progressWrapper.appendChild(progressBar);

const statusText = document.createElement("p");
statusText.textContent = 'Progress: ';
document.body.appendChild(statusText);

function startLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + '%';
        statusText.textContent = 'progress: ' + progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);
}
const startButton = document.createElement("button");
startButton.id = 'startButton';
startButton.textContent = "Start Loadong";
document.body.appendChild(startButton);

document.getElementById('startButton').addEventListener('click', startLoading);