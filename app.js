console.log('Hello World!');

// basic info
const name = "Jeziah Cortez"; 

let downloadCount = 0;

// project info
const projectTitles = ["Portfolio Site", "C++ Practice Stuff", "Network Check"];
const projectDescriptions = [
    "Responsive site built with Flexbox, Grid, bootstrap and java script.",
    "Zybooks labs from chapters 1 to 8.",
    "Cybersecurity projects (none yet) ."
];
const projectDeadlines = ["2025-12-01", "2025-10-01", "2026-06-01"];

// greeting message
function showGreeting(userName) {
    const hour = new Date().getHours();
    let timeGreeting;

    if (hour < 12) timeGreeting = "Early day";
    else if (hour < 18) timeGreeting = "close to/or sunset ";
    else timeGreeting = "Moon's out, any stars tonight?";

    return `Good ${timeGreeting}, I'm ${userName}. Welcome to my site!`;
}

// add a new skill card
function addSkill() {
    const input = document.getElementById("skill-input");
    const skill = input.value.trim();

    if (skill === "") return;

    const skillsList = document.getElementById("skills-list");

    const div = document.createElement("div");
    div.className = "col-md-3";
    div.innerHTML = `<div class="card p-3 shadow-sm">${skill}</div>`;

    skillsList.appendChild(div);
    input.value = "";
}

// show projects on page
function displayProjects() {
    const container = document.getElementById("projects-container");
    const today = new Date();

    for (let i = 0; i < projectTitles.length; i++) {
        const deadline = new Date(projectDeadlines[i]);

        let status = "";
        if (deadline > today) {
            status = "Still working on it";
        } else {
            status = "Done";
        }

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5>${projectTitles[i]}</h5>
                    <p>${projectDescriptions[i]}</p>
                    <p><strong>Due:</strong> ${projectDeadlines[i]}</p>
                    <p class="text-primary">${status}</p>
                </div>
            </div>
        `;

        container.appendChild(col);
    }
}

// school + experience data
const educationData = [
    ["northern arizona univercity ", "Cs", "2025 ~ 2029"]
];

const experienceData = [
    ["Student", "NAU", "2025 - Now"],
    ["Personal Projects", "Self", "2025 - Now"]
];

// build a table from data
function createTable(data, headers, containerId) {
    const container = document.getElementById(containerId);

    let table = "<table class='table table-striped text-center'>";
    
    table += "<thead class='table-dark'><tr>";
    headers.forEach(h => table += `<th>${h}</th>`);
    table += "</tr></thead><tbody>";

    data.forEach(row => {
        table += "<tr>";
        row.forEach(cell => table += `<td>${cell}</td>`);
        table += "</tr>";
    });

    table += "</tbody></table>";

    container.innerHTML = table;
}

// dark mode toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// run everything when page loads
window.onload = () => {
    const greetingElement = document.getElementById('greeting-display');
    if (greetingElement) {
        greetingElement.textContent = showGreeting(name);
    }

    displayProjects();

    createTable(educationData, ["School", "Focus", "Years"], "education-table");
    createTable(experienceData, ["What I Do", "Where", "Time"], "experience-table");

    const downloadBtn = document.getElementById('download-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadCount++;
            document.getElementById("download-count").textContent = downloadCount;
        });
    }
};
