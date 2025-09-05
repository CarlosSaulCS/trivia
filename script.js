// F1 Hearts Trivia Game 💕
class F1HeartsTrivia {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.hearts = 5;
        this.messagesUnlocked = 0;
        this.gameQuestions = [];
        this.secretMessages = [
            "Formula 1 is about precision and timing. Speaking of timing, they say the best things happen when you least expect them. Sometimes the most beautiful connections happen across unexpected distances. 🏎️✨",
            "Estonia is known for its digital innovation - it's where Skype was born! Just like how technology connects the world, some connections transcend geography. The Baltic region has always been a crossroads of cultures and ideas. 🇪🇪💻",
            "In F1, champions are remembered not just for their wins, but for their grace under pressure. True champions inspire others and make the impossible seem effortless. Some people have that same natural elegance. 🏆⭐",
            "The Aurora Borealis can be seen from northern Estonia on clear nights. These natural light shows remind us that the most extraordinary beauty often appears when we're looking up at the right moment. ✨🌌",
            "Did you know Estonia has over 2,000 islands? Each one unique, each one special. Sometimes in life, you discover something rare and beautiful that stands apart from everything else you've known. 🏝️💎",
            "F1 engineering combines art and science - every component designed with purpose and beauty. Some things in life are just naturally well-designed, possessing both intelligence and grace. 🔧🎨",
            "Tallinn's Old Town is a UNESCO World Heritage site, preserved for over 800 years. Some treasures are worth protecting and cherishing, their beauty growing more apparent with each passing day. 🏰📚",
            "Estonia is one of the most linguistically diverse countries in Europe. Communication transcends language barriers when there's genuine understanding. Sometimes a smile says more than words ever could. 🗣️😊",
            "F1 drivers often say that racing is about finding the perfect line through each corner. In life, sometimes the perfect path isn't the obvious one - it's the one that feels right in your heart. 🛣️💫",
            "This trivia journey ends, but every ending is also a beginning. Thank you for racing through these questions. Here's to new adventures and the roads yet to be discovered. 🏁🌟"
        ];
        
        this.initializeGame();
    }

    initializeGame() {
        this.loadQuestions();
        this.bindEvents();
        this.handleResize();
        this.displayQuestion();
    }

    handleResize() {
        // Ajustar la UI según el tamaño de pantalla
        window.addEventListener('resize', () => {
            this.adjustUIForScreenSize();
        });
        this.adjustUIForScreenSize();
    }

    adjustUIForScreenSize() {
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 480;
        
        // Ajustar animaciones según dispositivo
        const questionContainer = document.getElementById('questionContainer');
        const secretMessage = document.getElementById('secretMessage');
        
        if (isMobile) {
            // Reducir animaciones en móviles para mejor rendimiento
            questionContainer.style.transition = 'all 0.2s ease';
            if (secretMessage) {
                secretMessage.style.animation = 'fadeInUp 0.3s ease';
            }
        } else {
            questionContainer.style.transition = 'all 0.3s ease';
            if (secretMessage) {
                secretMessage.style.animation = 'fadeInUp 0.5s ease';
            }
        }
    }

    loadQuestions() {
        this.gameQuestions = [
            {
                question: "Which F1 drivers currently share the record for most World Championships?",
                answers: [
                    "Lewis Hamilton and Michael Schumacher (7 each)",
                    "Michael Schumacher and Juan Manuel Fangio (5 each)", 
                    "Ayrton Senna and Alain Prost (3 each)",
                    "Sebastian Vettel and Fernando Alonso (4 each)"
                ],
                correct: 0,
                funFact: "Lewis Hamilton and Michael Schumacher both have 7 world titles. In Estonia, they celebrate their independence day on February 24th, marking their journey to freedom and self-determination. 🏆🇪🇪"
            },
            {
                question: "What does DRS stand for in Formula 1?",
                answers: [
                    "Dynamic Racing System",
                    "Drag Reduction System",
                    "Direct Response System", 
                    "Driver Regulation System"
                ],
                correct: 1,
                funFact: "DRS allows drivers to open their rear wing to reduce drag on straights. Estonia is known for its e-Residency program - the world's first digital nomad visa, showing how innovation can reduce barriers. 🏎️💻"
            },
            {
                question: "Which circuit is famously known as 'The Temple of Speed'?",
                answers: [
                    "Silverstone (UK)",
                    "Monaco Street Circuit",
                    "Monza (Italy)",
                    "Spa-Francorchamps (Belgium)"
                ],
                correct: 2,
                funFact: "Monza has been hosting F1 since 1950 and features the longest straights on the calendar. Tallinn's Old Town has been continuously inhabited for over 1000 years - both are temples to their respective crafts. 🏛️🏰"
            },
            {
                question: "What is the minimum weight requirement for an F1 car including the driver in 2024?",
                answers: [
                    "728 kg",
                    "798 kg",
                    "752 kg",
                    "830 kg"
                ],
                correct: 1,
                funFact: "F1 cars must weigh at least 798kg including the driver. Estonia, despite being one of Europe's smaller countries, punches above its weight in technology - home to Skype, Transferwise, and many unicorn startups. 📱⚖️"
            },
            {
                question: "Which Grand Prix was most recently added to the F1 calendar?",
                answers: [
                    "Miami Grand Prix (2022)",
                    "Las Vegas Grand Prix (2023)",
                    "Saudi Arabian Grand Prix (2021)",
                    "Qatar Grand Prix (2021)"
                ],
                correct: 1,
                funFact: "Las Vegas GP joined in 2023 as the newest addition. Estonia joined the EU in 2004 and NATO the same year - sometimes the best additions bring fresh energy to established communities. 🎰🇪🇪"
            },
            {
                question: "How many power unit components can an F1 driver use per season without penalty?",
                answers: [
                    "2 of each component",
                    "3 of each component", 
                    "4 of each component",
                    "5 of each component"
                ],
                correct: 1,
                funFact: "Drivers get 3 power units per season. Estonia has three main regions: Northern, Southern, and the Islands. Each region has its own character, like the components of an F1 engine working in harmony. ⚙️🏝️"
            },
            {
                question: "Which current F1 circuit has the most corners?",
                answers: [
                    "Marina Bay, Singapore (23 corners)",
                    "Baku City Circuit, Azerbaijan (20 corners)",
                    "Hungaroring, Hungary (14 corners)",
                    "Suzuka, Japan (18 corners)"
                ],
                correct: 0,
                funFact: "Singapore's street circuit has 23 turns and is famous for being the first night race. Estonia has some of the darkest skies in Europe, perfect for stargazing - different kinds of night magic. 🌃⭐"
            },
            {
                question: "What do the colors of the Estonian flag represent?",
                answers: [
                    "Blue: Sky, Black: Soil, White: Snow",
                    "Blue: Lakes, Black: Forests, White: Birch bark",
                    "Blue: Liberty, Black: Dark past, White: Bright future", 
                    "Blue: Sea, Black: Struggles, White: Hope"
                ],
                correct: 2,
                funFact: "Blue represents liberty and loyalty, black symbolizes the dark past and soil, white represents virtue and snow. The flag was first adopted in 1881 by Estonian students - symbols carry deep meaning. 🇪🇪📚"
            },
            {
                question: "Which constructor has won the most Formula 1 Constructors' Championships?",
                answers: [
                    "Ferrari (16 titles)",
                    "McLaren (8 titles)",
                    "Mercedes-AMG (8 titles)",
                    "Williams (9 titles)"
                ],
                correct: 0,
                funFact: "Ferrari leads with 16 constructor titles, their passion spanning over 70 years. Estonia's Song Festival happens every 5 years and involves 30,000+ singers - both traditions show how dedication creates lasting legacies. 🎵🏎️"
            },
            {
                question: "What was the fastest speed ever recorded in an F1 race?",
                answers: [
                    "372.5 km/h by Antonio Giovinazzi (2019)",
                    "397.3 km/h by Valtteri Bottas (2016)",
                    "378.1 km/h by Kimi Räikkönen (2017)",
                    "369.9 km/h by Lewis Hamilton (2020)"
                ],
                correct: 1,
                funFact: "Valtteri Bottas hit 397.3 km/h at Baku in 2016. Estonia's internet speed averages among the world's fastest - both show how the right conditions can achieve remarkable velocity. 🌐💨"
            }
        ];
    }

    bindEvents() {
        document.getElementById('nextButton').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restartButton').addEventListener('click', () => this.restartGame());
    }

    displayQuestion() {
        if (this.currentQuestion >= this.gameQuestions.length) {
            this.endGame();
            return;
        }

        const question = this.gameQuestions[this.currentQuestion];
        
        document.getElementById('questionNumber').textContent = this.currentQuestion + 1;
        document.getElementById('question').textContent = question.question;
        
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-button';
            button.textContent = answer;
            
            // Mejorar la experiencia táctil
            button.addEventListener('click', () => this.selectAnswer(index));
            button.addEventListener('touchstart', function() {
                this.style.backgroundColor = '#e9ecef';
            });
            button.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 100);
            });
            
            answersContainer.appendChild(button);
        });

        // Hide secret message
        document.getElementById('secretMessage').style.display = 'none';
        document.getElementById('questionContainer').style.display = 'block';
        
        // Scroll to top en móviles para mejor UX
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    selectAnswer(selectedIndex) {
        const question = this.gameQuestions[this.currentQuestion];
        const buttons = document.querySelectorAll('.answer-button');
        
        // Disable all buttons
        buttons.forEach(button => button.disabled = true);
        
        // Show correct answer
        buttons[question.correct].classList.add('correct');
        
        if (selectedIndex === question.correct) {
            // Correct answer
            this.score += 100;
            this.messagesUnlocked++;
            this.showSecretMessage(question.funFact);
        } else {
            // Wrong answer
            buttons[selectedIndex].classList.add('incorrect');
            this.hearts--;
            if (this.hearts <= 0) {
                setTimeout(() => this.endGame(), 1500);
                return;
            }
            setTimeout(() => this.nextQuestion(), 2000);
        }
        
        this.updateUI();
    }

    showSecretMessage(funFact) {
        document.getElementById('questionContainer').style.display = 'none';
        
        const messageContent = document.getElementById('messageContent');
        messageContent.innerHTML = `
            <div style="margin-bottom: 15px;">
                <strong>Fascinating F1 & Culture Fact:</strong> ${funFact}
            </div>
            <div style="border-top: 1px solid #ddd; padding-top: 15px;">
                <strong>✨ Your Secret Message:</strong><br>
                ${this.secretMessages[this.messagesUnlocked - 1]}
            </div>
        `;
        
        document.getElementById('secretMessage').style.display = 'block';
        
        // Scroll suave al mensaje en móviles
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                document.getElementById('secretMessage').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100);
        }
    }

    nextQuestion() {
        this.currentQuestion++;
        this.displayQuestion();
    }

    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('hearts').textContent = this.hearts;
        document.getElementById('messagesUnlocked').textContent = this.messagesUnlocked;
        
        const progress = ((this.messagesUnlocked) / this.secretMessages.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
    }

    endGame() {
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('secretMessage').style.display = 'none';
        
        const gameOver = document.getElementById('gameOver');
        const finalMessage = document.getElementById('finalMessage');
        
        let message = '';
        if (this.messagesUnlocked === this.secretMessages.length) {
            message = `🎉 Perfect Score! You've unlocked all ${this.messagesUnlocked} secret messages! Like a true F1 champion, you've mastered every turn and claimed victory. Each message was carefully crafted with interesting facts and thoughtful reflections. 🏆✨`;
        } else if (this.messagesUnlocked >= 7) {
            message = `🏆 Excellent work! You unlocked ${this.messagesUnlocked} beautiful messages. Like a skilled F1 driver, you've shown great skill and determination. There's something poetic about the precision of motorsport. 💫`;
        } else if (this.messagesUnlocked >= 4) {
            message = `🏁 Good job! You unlocked ${this.messagesUnlocked} special messages. There's more to discover in the fascinating world of Formula 1. Every question holds new insights. 🌟`;
        } else {
            message = `🚗 Nice try! You unlocked ${this.messagesUnlocked} messages. Every attempt brings you closer to mastering F1 trivia and discovering new perspectives. Keep racing forward! 💫`;
        }
        
        finalMessage.textContent = message;
        gameOver.style.display = 'block';
    }

    restartGame() {
        this.currentQuestion = 0;
        this.score = 0;
        this.hearts = 5;
        this.messagesUnlocked = 0;
        
        document.getElementById('gameOver').style.display = 'none';
        this.updateUI();
        this.displayQuestion();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new F1HeartsTrivia();
});
