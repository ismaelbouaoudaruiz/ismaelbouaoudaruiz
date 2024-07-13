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
    meditation: { energy: 0.1, intelligence: 0.05, confidence: 0.2 },
    programming: { intelligence: 0.2, luck: 0.05, confidence: 0.1 },
    socializing: { confidence: 0.3, luck: 0.1 },
    gaming: { agility: 0.05, luck: 0.1, confidence: 0.1 },
    learning_language: { intelligence: 0.3, confidence: 0.2 },
    tattooing: { intelligence: 0.05, confidence: 0.05 },
    volunteering: { confidence: 0.2, luck: 0.1 },
    yoga: { vitality: 0.2, energy: 0.1, confidence: 0.2 },
    cooking: { vitality: 0.1, intelligence: 0.1, confidence: 0.1 },
    gardening: { vitality: 0.1, intelligence: 0.1 },
    crafting: { intelligence: 0.1, confidence: 0.1 }
};

let activityCounts = {
    sport: 0,
    nutrition: 0,
    reading: 0
};

function updateStatsDisplay() {
    for (const stat in stats) {
        document.getElementById(stat).textContent = Math.round(stats[stat]);
    }
}

function updateActivityCounts() {
    for (const activity in activityCounts) {
        document.getElementById(`${activity}-count`).textContent = activityCounts[activity];
    }
}

function performActivity(activity) {
    const effect = effects[activity];
    for (const stat in effect) {
        stats[stat] += effect[stat];
    }
    if (activityCounts.hasOwnProperty(activity)) {
        activityCounts[activity]++;
        updateActivityCounts();
    }
    updateStatsDisplay();
}

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
