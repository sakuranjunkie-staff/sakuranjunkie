// イベントデータを読み込み
fetch('data.json')
    .then(res => res.json())
    .then(events => {
        window.events = events;
        displayEvents(events);
        setupFilters(events);
    });

// イベント表示
function displayEvents(events) {
    const container = document.getElementById('events-container');
    container.innerHTML = `<div class="event-grid">${events.map(event => `
        <div class="event-card" onclick="openEvent('${event.id}')">
            <img class="event-image" src="${event.image}" alt="${event.title}">
            <div class="event-info">
                <div class="event-title">${event.title}</div>
                <div class="event-date">${event.date}</div>
                <div class="event-place">${event.place}</div>
                ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('')}</div>`;
}

// 検索・フィルタ
document.getElementById('search').addEventListener('input', filterEvents);
document.getElementById('filter').addEventListener('change', filterEvents);

function filterEvents() {
    const query = document.getElementById('search').value.toLowerCase();
    const genre = document.getElementById('filter').value;
    
    const filtered = window.events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(query) || 
                             event.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesGenre = !genre || event.tags.includes(genre);
        return matchesSearch && matchesGenre;
    });
    
    displayEvents(filtered);
}

function setupFilters(events) {
    const genres = [...new Set(events.flatMap(e => e.tags))].sort();
    const filter = document.getElementById('filter');
    genres.forEach(genre => {
        filter.innerHTML += `<option value="${genre}">${genre}</option>`;
    });
}

function openEvent(id) {
    const url = `event.html?id=${id}`;
    window.open(url, '_blank');
}