// F1 Hear               "🏎️ Did you know F1 teams can change all four tires in under 3 seconds? Each component works in perfect harmony. Sometimes in life, you discover someone special and beautiful who stands out from everything else, just like you. 💎 💙",             "F1 has raced on some of the world's most iconic circuits for decades. Some treasures are worth protecting and cherishing, their beauty growing more apparent with each passing season, just like my feelings for you. 🏁📚",      "F1 technology often finds its way into everyday life - from carbon fiber to energy recovery systems. Innovation connects different worlds in unexpected ways, just like how you've connected with my thoughts across the miles. 🔧💻",s Trivia Game 💕
class F1HeartsTrivia {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.hearts = 5;
        this.messagesUnlocked = 0;
        this.gameQuestions = [];
        this.secretMessages = [
            "Formula 1 is about precision and timing. Speaking of timing, they say the best things happen when you least expect them. Sometimes the most beautiful connections happen across unexpected distances, Evita. 🏎️✨",
            "F1 technology often finds its way into everyday life - from carbon fiber to energy recovery systems. Innovation connects different worlds in unexpected ways. ��💻",
            "In F1, champions are remembered not just for their wins, but for their grace under pressure. True champions inspire others and make the impossible seem effortless. You have that same natural elegance. 🏆⭐",
            "The technology behind F1 cars is incredible - each car has over 300 sensors collecting data. Sometimes the most extraordinary discoveries happen when we pay attention to the details, like how I notice every little thing about you. ✨🔬",
            "Did you know F1 teams can change all four wheels in under 3 seconds? Each component working in perfect harmony. Sometimes in life, you discover someone special and beautiful who stands apart from everything else, just like you do. ⚡💎",
            "F1 engineering combines art and science - every component designed with purpose and beauty. Some things in life are just naturally well-designed, possessing both intelligence and grace. That's exactly how I see you. 🔧🎨",
            "F1 has raced on some of the world's most iconic circuits for decades. Some treasures are worth protecting and cherishing, their beauty growing more apparent with each passing season. �📚",
            "F1 is a global sport with fans speaking dozens of languages, yet the excitement translates universally. Communication transcends language barriers when there's genuine understanding. Your smile says more than words ever could. 🌍😊",
            "F1 drivers often say that racing is about finding the perfect line through each corner. In life, sometimes the perfect path isn't the obvious one - it's the one that leads me to you. 🛣️💫",
            "This trivia journey ends, but every ending is also a beginning. Thank you for racing through these questions with me. Here's to new adventures and the roads we might discover together, Evita. 🏁🌟"
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
                funFact: "Lewis Hamilton and Michael Schumacher both have 7 world titles. Hamilton achieved this feat across two different eras of F1, showing incredible adaptability and longevity in the sport. 🏆�️"
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
                funFact: "DRS allows drivers to open their rear wing to reduce drag on straights. This technology was introduced in 2011 to promote overtaking and make races more exciting for fans. 🏎️�"
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
                funFact: "Monza has been hosting F1 since 1950 and features the longest straights on the calendar. The circuit is famous for its passionate Italian fans and incredible racing atmosphere. 🏛️🇮�"
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
                funFact: "F1 cars must weigh at least 798kg including the driver. Despite this weight, they can accelerate from 0-100 km/h in just 2.6 seconds thanks to their incredible power-to-weight ratio. 📱⚡"
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
                funFact: "Las Vegas GP joined in 2023 as the newest addition. The race takes place on Saturday night local time, making it unique as most F1 races occur on Sundays. 🎰�"
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
                funFact: "Drivers get 3 power units per season. Each power unit consists of 6 components: ICE, turbocharger, MGU-H, MGU-K, energy store, and control electronics - all working in perfect harmony. ⚙️🔧"
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
                funFact: "Singapore's street circuit has 23 turns and is famous for being the first night race. The artificial lighting system uses over 1,500 lighting projectors to illuminate the track. 🌃💡"
            },
            {
                question: "Which F1 team is known as 'The Prancing Horse'?",
                answers: [
                    "McLaren",
                    "Ferrari",
                    "Red Bull Racing", 
                    "Mercedes-AMG"
                ],
                correct: 1,
                funFact: "Ferrari has been in F1 since the championship began in 1950, making them the oldest and most successful team in the sport's history. Their iconic logo represents power and elegance. 🐎�️"
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
                funFact: "Ferrari leads with 16 constructor titles, their passion spanning over 70 years. They've won championships in six different decades, showing incredible consistency and dedication to excellence. 🎵🏎️"
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
                funFact: "Valtteri Bottas hit 397.3 km/h at Baku in 2016. F1 cars are so aerodynamically advanced that they could theoretically drive upside down at speeds above 180 km/h. 🌐💨"
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
                <strong>Fascinating F1 Fact:</strong> ${funFact}
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
            // Perfect score - show gift preparation simulation
            this.showGiftPreparation();
            return;
        } else if (this.messagesUnlocked >= 7) {
            message = `� Excellent work, Evita! You unlocked ${this.messagesUnlocked} beautiful messages. Like a skilled F1 driver, you've shown grace and intelligence. There's something magical about watching you discover each message I've written just for you. 💫`;
        } else if (this.messagesUnlocked >= 4) {
            message = `🏁 Good job, beautiful! You unlocked ${this.messagesUnlocked} special messages. There's more to discover in this trivia I created thinking of you. Every question holds new insights about F1 and my admiration for you, Evita. 🌟`;
        } else {
            message = `🚗 Nice try, Evita! You unlocked ${this.messagesUnlocked} messages written with you in mind. Every attempt brings you closer to discovering all the thoughts I've hidden in this F1 trivia just for you. Keep racing forward! 💫`;
        }
        
        finalMessage.textContent = message;
        gameOver.style.display = 'block';
    }

    showGiftPreparation() {
        const gameOver = document.getElementById('gameOver');
        const finalMessage = document.getElementById('finalMessage');
        
        // Create gift preparation container
        finalMessage.innerHTML = `
            <div id="giftPreparation" style="text-align: center; padding: 20px;">
                <h3 style="color: #6c5ce7; margin-bottom: 20px;">🎁 Perfect Score Achievement Unlocked! 🏆</h3>
                <div id="giftStatus" style="font-size: 18px; margin-bottom: 20px; min-height: 60px; display: flex; align-items: center; justify-content: center;">
                    <span id="statusText">Initializing surprise preparation...</span>
                </div>
                <div id="progressBar" style="width: 100%; height: 10px; background: #e0e6ed; border-radius: 5px; margin: 20px 0; overflow: hidden;">
                    <div id="giftProgress" style="width: 0%; height: 100%; background: linear-gradient(90deg, #6c5ce7, #fd79a8); transition: width 0.8s ease;"></div>
                </div>
                <div id="giftAnimation" style="font-size: 48px; margin: 20px 0; min-height: 80px; display: flex; align-items: center; justify-content: center;">
                    📦
                </div>
                <div id="finalGiftMessage" style="display: none; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white; margin-top: 20px;">
                </div>
            </div>
        `;
        
        gameOver.style.display = 'block';
        this.runGiftPreparationSequence();
    }

    runGiftPreparationSequence() {
        const statusText = document.getElementById('statusText');
        const giftProgress = document.getElementById('giftProgress');
        const giftAnimation = document.getElementById('giftAnimation');
        const finalGiftMessage = document.getElementById('finalGiftMessage');
        
        const steps = [
            { text: "🔍 Searching for the perfect gift ideas...", progress: 10, icon: "🔍", delay: 1000 },
            { text: "💝 Selecting something special just for you...", progress: 25, icon: "💝", delay: 1500 },
            { text: "🛒 Carefully choosing the perfect surprise...", progress: 40, icon: "🛒", delay: 1200 },
            { text: "📋 Planning the delivery details...", progress: 55, icon: "📋", delay: 1000 },
            { text: "📦 Preparing the package with care...", progress: 70, icon: "📦", delay: 1300 },
            { text: "🎀 Adding special touches and ribbons...", progress: 85, icon: "🎀", delay: 1100 },
            { text: "✨ Final preparations in progress...", progress: 95, icon: "✨", delay: 1000 },
            { text: "🎁 Surprise ready for delivery!", progress: 100, icon: "🎁", delay: 800 }
        ];
        
        let currentStep = 0;
        
        const runStep = () => {
            if (currentStep >= steps.length) {
                // Show final message
                setTimeout(() => {
                    finalGiftMessage.innerHTML = `
                        <h4 style="margin-top: 0; color: #fff;">💕 Congratulations, Evita! 💕</h4>
                        <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
                            Your perfect score has unlocked something very special! 🌟<br><br>
                            Like a true F1 champion, you've mastered every turn and claimed my heart. 
                            I've been preparing a surprise gift just for you! 🎁✨<br><br>
                            <strong>🚚 Delivery Status:</strong> Your surprise will arrive this weekend 
                            (Saturday or Sunday) - I'm still coordinating the perfect timing! 📅<br><br>
                            Each question was crafted with F1 facts and my genuine thoughts about you. 
                            This perfect score proves we're perfectly synchronized! 🏎️💫<br><br>
                            <em>Get ready for your surprise, beautiful! 💝</em>
                        </p>
                        <button onclick="location.reload()" style="margin-top: 15px; padding: 12px 24px; background: #fff; color: #6c5ce7; border: none; border-radius: 25px; font-weight: bold; cursor: pointer; font-size: 14px;">
                            🏁 Race Again
                        </button>
                    `;
                    finalGiftMessage.style.display = 'block';
                    
                    // Add sparkle effect
                    this.addSparkleEffect();
                }, 500);
                return;
            }
            
            const step = steps[currentStep];
            statusText.textContent = step.text;
            giftProgress.style.width = step.progress + '%';
            giftAnimation.textContent = step.icon;
            
            // Add bounce animation to icon
            giftAnimation.style.animation = 'none';
            giftAnimation.offsetHeight; // Trigger reflow
            giftAnimation.style.animation = 'bounce 0.6s ease';
            
            currentStep++;
            setTimeout(runStep, step.delay);
        };
        
        runStep();
    }

    addSparkleEffect() {
        // Add CSS for sparkle animation if not exists
        if (!document.getElementById('sparkleCSS')) {
            const style = document.createElement('style');
            style.id = 'sparkleCSS';
            style.textContent = `
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }
                @keyframes sparkle {
                    0% { opacity: 0; transform: scale(0); }
                    50% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0); }
                }
                .sparkle {
                    position: absolute;
                    pointer-events: none;
                    animation: sparkle 1.5s ease-in-out infinite;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create sparkle elements
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
                sparkle.style.animationDelay = Math.random() * 1 + 's';
                
                document.getElementById('giftPreparation').appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 2000);
            }, i * 100);
        }
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
