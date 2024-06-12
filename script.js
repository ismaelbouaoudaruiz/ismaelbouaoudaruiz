const stats = {
    level: 28,
    vitality: 50,
    energy: 50,
    strength: 10,
    agility: 10,
    intelligence: 10,
    luck: 10,
    confidence: 10
};

const effects = {
    sport: { vitality: 0.2, strength: 0.2, energy: 0.2, confidence: 0.1 },
    nutrition: { vitality: 0.5, strength: 0.05, energy: 0.2, agility: 0.05, intelligence: 0.1, luck: 0.01, confidence: 0.05 },
    reading: { energy: 0.01, intelligence: 0.1, luck: 0.1 },
    drawing: { intelligence: 0.05, confidence: 0.05 },
    // Add more activities with their effects here
};

function updateStatsDisplay() {
    for (const stat in stats) {
        document.getElementById(stat).textContent = Math.round(stats[stat]);
    }
}

function performActivity(activity) {
    const effect = effects[activity];
    for (const stat in effect) {
        stats[stat] += effect[stat];
    }
    updateStatsDisplay();
}

function decrementStats() {
    for (const activity in effects) {
        const effect = effects[activity];
        for (const stat in effect) {
            stats[stat] -= effect[stat];
            if (stats[stat] < 0) stats[stat] = 0;
        }
    }
    updateStatsDisplay();
}

function increaseLevel() {
    stats.level++;
    updateStatsDisplay();
}

updateStatsDisplay();
setInterval(decrementStats, 86400000); // Decrease stats every 24 hours
setInterval(increaseLevel, 31536000000); // Increase level every 365 days

(function($) {
    $('li:not(.slide)').on('click', function() {
        var index = $(this).index();
        var slideWidth = $(this).width();
        var slideLeft = slideWidth * index;
        $('.slide').css({
            width: slideWidth + 'px',
            left: slideLeft + 'px'
        });
        $('li').removeClass('active');
        $(this).addClass('active');
    });
})(jQuery);
