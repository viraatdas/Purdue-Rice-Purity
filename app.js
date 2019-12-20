var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://purdue-purity.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref("questions/");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

function getString(i) {
  var questions = ['Stepped on the seal under the Bell Tower?', 'Gotten a fake?', 'Been busted with a fake?', 'Posted pictures about Starship on a social network platform?', 'Tried stealing a Starship?', 'Ridden a Starship?', 'Tried disassembling a Starship?', 'Den Pops?', 'Mad Mushroom?', 'Consumed Mad Mushroom when high?', 'Breakfast club?', 'Said either, "girls here are so hot" OR "boys here are so ugly?"', 'Talked about dropping out within the past month?', 'Seriously considered dropping out?', 'Went to Chicago during the semester?', 'Switched majors?', 'Went on a fountain run?', 'Went on a fountain run drunk?', 'Been caught cheating in an exam?', 'Skipped all the lectures and only showed up for the midterm and final?', 'Missed an exam?', 'Ignored someone you matched on Tinder/other dating app who you share a lecture with?', 'Have a post featuring you on barstoolpurdue?', 'Pooped in the common shower?', 'Stayed an extra semester because you failed a class?', 'Stayed an extra semester because you changed your major?', 'Had a professor cancel lecture for a trivial reason?', 'Vaped during lecture?', 'Consumed an edible during a lecture?', 'Tried to get a Bay Area internship/job?', 'Know someone who has a Bay Area internship/job?', 'Brag about knowing people who go to Ivy League colleges?', 'Have a group chat with a name dealing with a professor you hate?', 'Took an Uber instead of an ambulance to a hospital/medical facility?', 'Pronounce Au Bon Pain in a French accent?', 'Have an exam where the timer started without an exam in front of you?', 'Had sexual intercourse in WALC?', 'Had sexual intercourse in a lecture hall?', 'Had sexual intercourse with a TA?', 'Had sexual intercourse with a professor?', 'Had sexual intercourse with your BGR leader?', 'Had sexual intercourse with someone in the Pete costume?', 'Sexiled or been sexiled by your roommate?', 'Walked in on someone?', 'Been walked in on?', 'Gotten a high-five from the Morph Suit Guys?', 'Been inducted as a Morph Suit Guy?', "Changed your Blackboard password because it wouldn't accept your password?", "Have had an important email Cisco'ed?", 'Watched Chen and/or Khan Academy videos for math?', 'Submitted assignment at 11:59:59 pm?', 'Ridden the Boilermaker Special?', 'Been on a date at Greyhouse?', 'Did work while at a party?', 'Been arrested by a cop?', 'Masturbated in a facility bathroom?', 'Masturbated when your roommate was in the room?', 'Asked your roommate to leave so that you could masturbate?', 'Matched with someone from your dorm on Tinder/other dating app?', 'Matched with a TA on Tinder/other dating app?', 'Have a crush on someone who is in one of the clubs as you?', 'Had a threesome?', 'Had a threesome with your roommate?', 'Dated someone for free food?', 'iClicker’ed for someone?', 'Hit on a TA?', 'Retaken Calc 2?', "Thrown someone's bike in a tree?", 'Been plastered at an inconvenient time?', 'Taken a group study room for yourself at a high demand time?', 'Changed your major within your first year?', 'Changed your major after a year?', 'Had sexual intercourse with someone in a sorority/fraternity?', 'Had sexual intercourse with someone you didn’t know during your time at Purdue?', 'Posted a Facebook update that you got into Purdue?', 'Ever closed out Where Else?', 'Kicked out of Where Else?', 'Made out with someone in Where Else?', 'Ever done the Sloop challenge?', 'Given or received a handjob at a game?', 'Pulled all-nighter(s)?', 'Claim to be single because "you aren\'t interested in anyone"?', 'Yelled "IU Sucks" for an irrelevant reason?', 'Underestimated alcohol percentage of a 4 Loko/White Claw and passed out?', 'Drunk emailed a professor?', 'Pregamed a lecture?', 'Pregamed an exam?', 'Blacked out?', 'Had to take a sobriety test?', 'Failed a sobriety test?', 'Failed a company’s drug test?', 'Have your bike thrown in a tree?', 'Been to Cactus?', 'Pregamed before going to Cactus?', 'Got kicked out of cactus?', 'Made out with someone in Cactus?', 'Had sexual intercourse in the Cactus bathroom?', 'Been kicked out of a party?', 'Walked without knowing you would graduate?', 'Graduated?'];
  var q = i+1 + "_" + questions[i];
  q = q.replace('/','\\');
  return q;
}

function setInitialDbValues() {
  const question_length = 100;
  for (var i=0; i < question_length; i++) {
    var q = getString(i);
    ref.child(q).set(0);
  }
}



function updateValue(i) {
  var q = getString(i);
  var databaseRef = ref.child(q);
  databaseRef.transaction(function(q) {
    q = q + 1;
    return q;
  });
}




setInitialDbValues();

