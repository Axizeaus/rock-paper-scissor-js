// function get_user_input(){
//     let choice = prompt("rock, paper or scissor?")
//     console.log(`You choose : ${choice.toLowerCase()}`)
//     return choice.toLowerCase()
// }

// function computer_play() {
//     computer_choice = Math.floor(Math.random() * 3);
//     if (computer_choice == 0){
//         console.log(`computer choose rock`)
//         return "rock";
//     }
//     if (computer_choice == 1){
//         console.log(`computer choose paper`)
//         return "paper";
//     }
//     if (computer_choice == 2){
//         console.log(`computer choose scissor`)
//         return "scissor";
//     }
// }

// function choose_rock(player_choice, computer_choice){
//     if (player_choice == 'rock' && computer_choice == 'paper'){
//         return computer_choice;
//     }
//     else{
//         return player_choice;
//     }
// }

// function choose_paper(player_choice, computer_choice){
//     if (player_choice == 'paper' && computer_choice == 'scissor'){
//         return computer_choice;
//     }
//     else {
//         return player_choice;
//     }
// }
    
// function choose_scissor(player_choice, computer_choice){
//     if (player_choice == 'scissor' && computer_choice == 'rock'){
//         return computer_choice;
//     }
//     else {
//         return player_choice;
//     }
// }

// function game_mechanism(player_choice, computer_choice){
//     if (player_choice == 'rock'){
//         let winner = choose_rock(player_choice,computer_choice);
//         console.log(`${winner} is the winner`);
//     } else if (player_choice == 'paper'){
//         let winner = choose_paper(player_choice,computer_choice);
//         console.log(`${winner} is the winner`);
//     } else {
//         let winner = choose_scissor(player_choice,computer_choice)
//         console.log(`${winner} is the winner`)
//     }
// }

// function play_a_single_round(){
//     let player_choice = get_user_input();
//     let computer_choice = computer_play();
//     if (player_choice == computer_choice){
//         console.log("it is a draw");
//     } else {
//         game_mechanism(player_choice, computer_choice);
//     }
// }

// // function play_multiple_rounds(){
// //     let num_of_times = prompt("How many times would you like to play?");
// //     for (let i = 0; i < Number(num_of_times); i++){
// //         play_a_single_round();
// //     }
// // }

// play_a_single_round()

const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) =>{
    console.log("this is rock working");
    console.log(e)
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    console.log('this is paper working');
    console.log(e)
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', (e) => {
    console.log('this is scissor working');
    console.log(e)
})