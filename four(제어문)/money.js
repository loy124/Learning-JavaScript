// rand 함수 선언
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}
let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
  round++;
  console.log(`round ${round}:`);
  console.log(`\tstarting funds: ${funds}p`);
  // 돈을 겁니다
  const bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    s: 0,
    club: 0,
    diamond: 0,
  };

  let totalBet = rand(1, funds);
  // 돈이 7일경우 전재산을 heart에 투자
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    // 판돈을 나눕니다
    let remaining = totalBet;
    do {
      const bet = rand(1, remaining);
      const face = randFace();
      bets[face] = bets[face] + bet;
      remaining -= bet;
    } while (remaining > 0);
  }
  funds -= totalBet;
  console.log(
    `/tbets: ${ 
      Object.keys(bets)
        .map(face => `${face}: ${bets[face]} pence`)
        .join(',') 
    }( total: ${totalBet} pence)`,
  );

  // 주사위를 굴립니다
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\t hand: ${hand.join(',')}`);

  // 딴돈을 가져옵니다.
  let winnings = 0;

  for (let die = 0; die < hand.length; die++) {
    const face = hand[die];
    if (bets[face] > 0) winnings += bets[face];
  }
  funds += winnings;
  console.log(`\t winnings: ${winnings}`);
}
console.log(`\t ending funds: ${funds}`);
