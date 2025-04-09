function startLoading() {
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');

    const interval = setInterval(() => {
        progress++;

        progressBar.style.width = progress + '%';
        statusText.textContent = 'progress: ' + progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

document.getElementById('startButton').addEventListener('click', startLoading);