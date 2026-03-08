const missions = [
    { 
        news: "SECURITY BREACH",
        text: "A massive data leak has exposed government secrets. The public is furious and demands transparency.", 
        options: [
            { text: "Admit Fault & Declassify", sub: "Boosts trust, weakens security", deltas: {app: 15, mil: -15}, run: (s) => { s.app += 15; s.mil -= 15; } }, 
            { text: "Censor & Detain", sub: "Iron-fisted stability", deltas: {app: -20, mil: 15}, run: (s) => { s.app -= 20; s.mil += 15; } },
            { text: "Blame a Scapegoat", sub: "Risky 50/50 gamble", deltas: {app: '?', mil: '?'}, run: (s) => { if(Math.random() > 0.5) { s.app += 5; } else { s.app -= 25; s.mil -= 10; } } }
        ] 
    },
    { 
        news: "FOREIGN DEBT",
        text: "A foreign power offers a massive loan to fix infrastructure, but they want permanent control of your ports.", 
        options: [
            { text: "Accept the Loan", sub: "Immediate wealth, lost sovereignty", deltas: {bud: 800, mil: -15}, run: (s) => { s.bud += 800; s.mil -= 15; } }, 
            { text: "Reject & Austerity", sub: "High public pain", deltas: {app: -15, mil: 5}, run: (s) => { s.app -= 15; s.mil += 5; } }
        ] 
    },
    { 
        news: "MILITARY LOBBY",
        text: "The military high command demands a 20% budget increase for 'strategic modernization'.", 
        options: [
            { text: "Grant Full Funding", sub: "Strong defense, empty pockets", deltas: {bud: -400, mil: 20}, run: (s) => { s.bud -= 400; s.mil += 20; } }, 
            { text: "Reallocate to Social", sub: "Popular with voters", deltas: {app: 15, mil: -20}, run: (s) => { s.app += 15; s.mil -= 20; } },
            { text: "Compromise (10%)", sub: "Keep both sides lukewarm", deltas: {bud: -200, mil: 5, app: 5}, run: (s) => { s.bud -= 200; s.mil += 5; s.app += 5; } }
        ] 
    },
    { 
        news: "TECH MONOPOLY",
        text: "A major tech giant is under investigation for tax evasion. They threaten to move operations abroad.", 
        options: [
            { text: "Seize Assets", sub: "The populist route", deltas: {bud: 500, app: 10, mil: -5}, run: (s) => { s.bud += 500; s.app += 10; s.mil -= 5; } }, 
            { text: "Offer Tax Breaks", sub: "Keep the jobs, lose the cash", deltas: {bud: -300, app: -5}, run: (s) => { s.bud -= 300; s.app -= 5; } },
            { text: "Nationalize Platform", sub: "Total state control", deltas: {app: -15, mil: 15, bud: 200}, run: (s) => { s.app -= 15; s.mil += 15; s.bud += 200; } }
        ] 
    },
    { 
        news: "CROP FAILURE",
        text: "Severe drought has decimated the harvest. Food prices are skyrocketing.", 
        options: [
            { text: "Import & Subsidize", sub: "Keep the people fed", deltas: {bud: -450, app: 20}, run: (s) => { s.bud -= 450; s.app += 20; } }, 
            { text: "Food Rationing", sub: "Order via the military", deltas: {app: -25, mil: 15}, run: (s) => { s.app -= 25; s.mil += 15; } },
            { text: "Export anyway", sub: "Greed over people", deltas: {bud: 300, app: -40}, run: (s) => { s.bud += 300; s.app -= 40; } }
        ] 
    },
    { 
        news: "RELIGIOUS TENSION",
        text: "A controversial law has sparked religious protests in the capital.", 
        options: [
            { text: "Repeal the Law", sub: "Apologize to the masses", deltas: {app: 15, mil: -5}, run: (s) => { s.app += 15; s.mil -= 5; } }, 
            { text: "Enforce Secularism", sub: "Assert state authority", deltas: {app: -20, mil: 15}, run: (s) => { s.app -= 20; s.mil += 15; } }
        ] 
    },
    { 
        news: "SPACE DISCOVERY",
        text: "Deep space probes have found rare minerals on a nearby moon. A race begins.", 
        options: [
            { text: "Launch Expedition", sub: "Massive cost, huge prestige", deltas: {bud: -600, app: 15, mil: 10}, run: (s) => { s.bud -= 600; s.app += 15; s.mil += 10; } }, 
            { text: "Sell Mining Rights", sub: "Quick cash injection", deltas: {bud: 400, app: -5}, run: (s) => { s.bud += 400; s.app -= 5; } }
        ] 
    },
    { 
        news: "ORGANIZED CRIME",
        text: "A powerful cartel has infiltrated the police force in the southern district.", 
        options: [
            { text: "Martial Law", sub: "Extreme military force", deltas: {app: -15, mil: 20, bud: -100}, run: (s) => { s.app -= 15; s.mil += 20; s.bud -= 100; } }, 
            { text: "Legalize & Tax", sub: "Undercut the cartel", deltas: {bud: 300, app: 10, mil: -10}, run: (s) => { s.bud += 300; s.app += 10; s.mil -= 10; } },
            { text: "Negotiate", sub: "Peace at a dark price", deltas: {app: -5, bud: 100, mil: -10}, run: (s) => { s.app -= 5; s.bud += 100; s.mil -= 10; } }
        ] 
    },
    { 
        news: "INTELLECTUAL PROPERTY",
        text: "A neighboring nation is blatantly cloning your country's proprietary medical tech.", 
        options: [
            { text: "Trade Sanctions", sub: "Economic warfare", deltas: {bud: -200, mil: 5}, run: (s) => { s.bud -= 200; s.mil += 5; } }, 
            { text: "Cyber Sabotage", sub: "Deniable operations", deltas: {mil: 10, app: '?'}, run: (s) => { s.mil += 10; if(Math.random() > 0.7) s.app -= 20; } },
            { text: "Do Nothing", sub: "Maintain peace", deltas: {mil: -10, app: -5}, run: (s) => { s.mil -= 10; s.app -= 5; } }
        ] 
    },
    { 
        news: "EDUCATION REFORM",
        text: "Teachers are on strike for higher wages and better facilities.", 
        options: [
            { text: "Meet Demands", sub: "Invest in the future", deltas: {bud: -300, app: 20}, run: (s) => { s.bud -= 300; s.app += 20; } }, 
            { text: "Replace with AI", sub: "Efficiency over humans", deltas: {bud: -100, app: -25, mil: 5}, run: (s) => { s.bud -= 100; s.app -= 25; s.mil += 5; } },
            { text: "Ignore Strike", sub: "The hardline stance", deltas: {app: -15}, run: (s) => { s.app -= 15; } }
        ] 
    },
    { 
        news: "PANDEMIC FEAR",
        text: "A new virus is spreading in the slums. Health officials recommend a total lockdown.", 
        options: [
            { text: "Mandatory Quarantine", sub: "Safety through force", deltas: {app: -20, mil: 10, bud: -200}, run: (s) => { s.app -= 20; s.mil += 10; s.bud -= 200; } }, 
            { text: "Fund Vaccine Research", sub: "Long term recovery", deltas: {bud: -500, app: 15}, run: (s) => { s.bud -= 500; s.app += 15; } },
            { text: "Ignore the Reports", sub: "Economy over all", deltas: {app: -10, bud: 100}, run: (s) => { s.app -= 10; s.bud += 100; } }
        ] 
    },
    { 
        news: "OIL SPILL",
        text: "A massive tanker leak is destroying the coastline's ecosystem and tourism.", 
        options: [
            { text: "Fine the Company", sub: "Corporate accountability", deltas: {bud: 400, app: 10}, run: (s) => { s.bud += 400; s.app += 10; } }, 
            { text: "State-Led Cleanup", sub: "Fast but expensive", deltas: {bud: -300, app: 5}, run: (s) => { s.bud -= 300; s.app += 5; } },
            { text: "Cover it Up", sub: "Protect the industry", deltas: {app: '?', bud: 50}, run: (s) => { s.bud += 50; if(Math.random() > 0.6) { s.app -= 30; } } }
        ] 
    },
    { 
        news: "BORDER DISPUTE",
        text: "Tensions flare as soldiers from a neighboring state cross into a demilitarized zone.", 
        options: [
            { text: "Mobilize the Army", sub: "Show of strength", deltas: {mil: 20, bud: -200, app: -5}, run: (s) => { s.mil += 20; s.bud -= 200; s.app -= 5; } }, 
            { text: "Diplomatic Talks", sub: "Avoid war at all costs", deltas: {app: 10, mil: -10}, run: (s) => { s.app += 10; s.mil -= 10; } },
            { text: "Cede the Territory", sub: "Humiliating peace", deltas: {mil: -30, app: -20}, run: (s) => { s.mil -= 30; s.app -= 20; } }
        ] 
    },
    { 
        news: "CYBER ATTACK",
        text: "The national power grid is under a sustained attack by unknown hackers.", 
        options: [
            { text: "Full System Reset", sub: "Temporary chaos", deltas: {app: -15, bud: -100}, run: (s) => { s.app -= 15; s.bud -= 100; } }, 
            { text: "Upgrade Firewalls", sub: "Costly defense", deltas: {bud: -400, mil: 15}, run: (s) => { s.bud -= 400; s.mil += 15; } },
            { text: "Retaliate blindly", sub: "Hack back", deltas: {mil: 10, app: '?'}, run: (s) => { s.mil += 10; if(Math.random() > 0.5) { s.app -= 20; } } }
        ] 
    },
    { 
        news: "NUCLEAR ENERGY",
        text: "Scientists propose building a nuclear plant to solve the energy crisis, but locals are terrified.", 
        options: [
            { text: "Build the Plant", sub: "Cheap power, high risk", deltas: {bud: 600, app: -20}, run: (s) => { s.bud += 600; s.app -= 20; } }, 
            { text: "Renewable Project", sub: "Green but slow", deltas: {bud: -400, app: 20}, run: (s) => { s.bud -= 400; s.app += 20; } },
            { text: "Cancel the Plans", sub: "Safety first", deltas: {app: 5, bud: -100}, run: (s) => { s.app += 5; s.bud -= 100; } }
        ] 
    },
    // --- NEW EXTRA MISSIONS ---
    { 
        news: "AI SUPREMACY",
        text: "Silicon Valley researchers have developed an AI that can manage the economy better than humans.", 
        options: [
            { text: "Give AI Control", sub: "Perfect efficiency", deltas: {bud: 700, app: -25}, run: (s) => { s.bud += 700; s.app -= 25; } }, 
            { text: "Ban AI Management", sub: "Keep human jobs", deltas: {app: 15, bud: -200}, run: (s) => { s.app += 15; s.bud -= 200; } }
        ] 
    },
    { 
        news: "INSIDER TRADING",
        text: "Your Finance Minister was caught leaking treasury data to bank executives.", 
        options: [
            { text: "Public Prosecution", sub: "Transparency wins", deltas: {app: 15, bud: -100}, run: (s) => { s.app += 15; s.bud -= 100; } }, 
            { text: "Take a Cut", sub: "Private payoff", deltas: {bud: 500, app: -30}, run: (s) => { s.bud += 500; s.app -= 30; } }
        ] 
    },
    { 
        news: "PRISON RIOT",
        text: "The largest state prison has been taken over by inmates protesting conditions.", 
        options: [
            { text: "Storm the Prison", sub: "Military solution", deltas: {mil: 10, app: -15}, run: (s) => { s.mil += 10; s.app -= 15; } }, 
            { text: "Negotiate Reform", sub: "Human rights approach", deltas: {app: 15, bud: -200}, run: (s) => { s.app += 15; s.bud -= 200; } }
        ] 
    },
    { 
        news: "COUP PLOT",
        text: "Intelligence suggests a mid-level Colonel is planning a move against your cabinet.", 
        options: [
            { text: "Quiet Purge", sub: "Remove the threat", deltas: {mil: -15, app: -5}, run: (s) => { s.mil -= 15; s.app -= 5; } }, 
            { text: "Promote Him", sub: "Keep your enemies close", deltas: {mil: 10, app: '?'}, run: (s) => { s.mil += 10; if(Math.random() > 0.4) { s.app -= 15; } } }
        ] 
    },
    { 
        news: "OLYMPIC BID",
        text: "The Committee asks your nation to host the upcoming Games.", 
        options: [
            { text: "Host the Games", sub: "Global glory, high debt", deltas: {bud: -800, app: 30}, run: (s) => { s.bud -= 800; s.app += 30; } }, 
            { text: "Decline Offer", sub: "Focus on basics", deltas: {bud: 100, app: -10}, run: (s) => { s.bud += 100; s.app -= 10; } }
        ] 
    },
    { 
        news: "CURRENCY CRASH",
        text: "The national currency is losing value rapidly against global markets.", 
        options: [
            { text: "Raise Interest Rates", sub: "Halt inflation", deltas: {app: -20, bud: 100}, run: (s) => { s.app -= 20; s.bud += 100; } }, 
            { text: "Print More Money", sub: "Dangerous gamble", deltas: {bud: 500, app: '?'}, run: (s) => { s.bud += 500; s.app -= 40; } }
        ] 
    },
    { 
        news: "WILDERNESS FIRE",
        text: "A massive wildfire is threatening the nation's timber industry and air quality.", 
        options: [
            { text: "Emergency Response", sub: "Save the forests", deltas: {bud: -300, app: 10}, run: (s) => { s.bud -= 300; s.app += 10; } }, 
            { text: "Let it Burn", sub: "Save the budget", deltas: {bud: 50, app: -25}, run: (s) => { s.bud += 50; s.app -= 25; } }
        ] 
    },
    { 
        news: "TAX THE RICH",
        text: "A popular movement demands a 70% wealth tax on billionaires.", 
        options: [
            { text: "Pass the Tax", sub: "Voters love it", deltas: {app: 25, bud: 600}, run: (s) => { s.app += 25; s.bud += 600; } }, 
            { text: "Protect Business", sub: "Keep investors happy", deltas: {bud: -200, app: -15, mil: 5}, run: (s) => { s.bud -= 200; s.app -= 15; s.mil += 5; } }
        ] 
    },
    { 
        news: "NATIONAL HOLIDAY",
        text: "It is the anniversary of the country's founding. Citizens expect a celebration.", 
        options: [
            { text: "Grand Parade", sub: "High morale, military pride", deltas: {app: 15, mil: 10, bud: -300}, run: (s) => { s.app += 15; s.mil += 10; s.bud -= 300; } }, 
            { text: "Humble Ceremony", sub: "Save resources", deltas: {app: -5, bud: 50}, run: (s) => { s.app -= 5; s.bud += 50; } }
        ] 
    },
    { 
        news: "WATER PRIVATIZATION",
        text: "A global utility corp wants to buy the national water supply system.", 
        options: [
            { text: "Sell System", sub: "Huge cash windfall", deltas: {bud: 900, app: -40}, run: (s) => { s.bud += 900; s.app -= 40; } }, 
            { text: "Keep Public", sub: "Safe but expensive", deltas: {bud: -200, app: 10}, run: (s) => { s.bud -= 200; s.app += 10; } }
        ] 
    }
];
