(this["webpackJsonpdice-game"]=this["webpackJsonpdice-game"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),l=c(1),r=c.n(l),a=c(8),o=c.n(a),i=(c(15),c(9)),n=c(3),d=c(4),u=c(6),h=c(5),j=(c(16),c(2)),f=c.n(j);c(17),c(18);var b=function(e){return Object(s.jsx)("button",{type:"button",className:e.firstRoll?"score-button hide":"score-button",onClick:e.clickFunction,children:"Record Score"})};var g=function(e){return Object(s.jsx)("div",{className:"categories",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{id:"blank-th"}),Object(s.jsx)("th",{id:"blank-th"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("img",{className:"die-img",src:"./images/one.png",alt:"1 on die face"}),Object(s.jsx)("h3",{className:"cat-label",children:"   Aces = 1"})]}),Object(s.jsx)("td",{children:null===e.acesScore?Object(s.jsx)(b,{clickFunction:e.calcAcesScore,firstRoll:e.firstRoll}):e.acesScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("img",{className:"die-img",src:"./images/two.png",alt:"2 on die face"}),Object(s.jsx)("h3",{className:"cat-label",children:"   Twos = 2"})]}),Object(s.jsx)("td",{children:null===e.twosScore?Object(s.jsx)(b,{clickFunction:e.calcTwosScore,firstRoll:e.firstRoll}):e.twosScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("img",{className:"die-img",src:"./images/three.png",alt:"3 on die face"}),Object(s.jsx)("h3",{className:"cat-label",children:"   Threes = 3"})]}),Object(s.jsx)("td",{children:null===e.threesScore?Object(s.jsx)(b,{clickFunction:e.calcThreesScore,firstRoll:e.firstRoll}):e.threesScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("img",{className:"die-img",src:"./images/four.png",alt:"4 on die face"}),Object(s.jsx)("h3",{className:"cat-label",children:"   Fours = 4"})]}),Object(s.jsx)("td",{children:null===e.foursScore?Object(s.jsx)(b,{clickFunction:e.calcFoursScore,firstRoll:e.firstRoll}):e.foursScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("img",{className:"die-img",src:"./images/five.png",alt:"5 on die face"}),Object(s.jsx)("h3",{className:"cat-label",children:"   Fives = 5"})]}),Object(s.jsx)("td",{children:null===e.fivesScore?Object(s.jsx)(b,{clickFunction:e.calcFivesScore,firstRoll:e.firstRoll}):e.fivesScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("img",{className:"die-img",src:"./images/six.png",alt:"6 on die face"}),Object(s.jsx)("h3",{className:"cat-label",children:"   Sixes = 6"})]}),Object(s.jsx)("td",{children:null===e.sixesScore?Object(s.jsx)(b,{clickFunction:e.calcSixesScore,firstRoll:e.firstRoll}):e.sixesScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"Bonus"}),Object(s.jsx)("p",{className:"description",children:"(if sum of the above scores is 63 or higher = 35 pts)"})]}),Object(s.jsx)("td",{children:35===e.bonusScore?35:Object(s.jsx)("p",{className:"description",children:"not enough score above"})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"3 of a kind"}),Object(s.jsx)("p",{className:"description",children:"(sum of the three matching dice)"})]}),Object(s.jsx)("td",{children:null===e.threeKindScore?Object(s.jsx)(b,{clickFunction:e.calcThreeOfKind,firstRoll:e.firstRoll}):e.threeKindScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"4 of a kind"}),Object(s.jsx)("p",{className:"description",children:"(sum of the four matching dice)"})]}),Object(s.jsx)("td",{children:null===e.fourKindScore?Object(s.jsx)(b,{clickFunction:e.calcFourOfKind,firstRoll:e.firstRoll}):e.fourKindScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"Full House"}),Object(s.jsx)("p",{className:"description",children:"(25 pts)"})]}),Object(s.jsx)("td",{children:null===e.fullHouseScore?Object(s.jsx)(b,{clickFunction:e.calcFullHouse,firstRoll:e.firstRoll}):e.fullHouseScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"Sm Straight"}),Object(s.jsx)("p",{className:"description",children:"(30 pts)"})]}),Object(s.jsx)("td",{children:null===e.smStrScore?Object(s.jsx)(b,{clickFunction:e.calcSmStraight,firstRoll:e.firstRoll}):e.smStrScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"Lg Straight"}),Object(s.jsx)("p",{className:"description",children:"(40 pts)"})]}),Object(s.jsx)("td",{children:null===e.lgStrScore?Object(s.jsx)(b,{clickFunction:e.calcLgStraight,firstRoll:e.firstRoll}):e.lgStrScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"* 5 of a kind *"}),Object(s.jsx)("p",{className:"description",children:"You know what it's called  ;)"}),Object(s.jsx)("p",{className:"description",children:"(50 pts)"})]}),Object(s.jsx)("td",{children:null===e.fiveKindScore?Object(s.jsx)(b,{clickFunction:e.calcFiveOfKind,firstRoll:e.firstRoll}):e.fiveKindScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"cat",children:[Object(s.jsx)("h3",{className:"cat-label",children:"Chance"}),Object(s.jsx)("p",{className:"description",children:"(sum of all dice)"})]}),Object(s.jsx)("td",{children:null===e.chanceScore?Object(s.jsx)(b,{clickFunction:e.calcChanceScore,firstRoll:e.firstRoll}):e.chanceScore})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"cat",children:Object(s.jsx)("h3",{className:"cat-label",children:"Total Score"})}),Object(s.jsx)("td",{children:e.totalScore})]})]})]})})},S=(c(19),function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).showModal=function(e){e.preventDefault(),s.setState({showModal:!0},(function(){s.wrapperRef.current.focus(),document.addEventListener("click",s.handleClickOutside,!0)}))},s.hideModal=function(){document.removeEventListener("click",s.handleClickOutside,!0),s.setState({showModal:!1})},s.handleClickOutside=function(e){s.wrapperRef&&!s.wrapperRef.current.contains(e.target)&&s.hideModal()},s.state={showModal:!1},s.wrapperRef=r.a.createRef(),s}return Object(d.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"instructions",children:[Object(s.jsx)("button",{onClick:this.showModal,children:"Instructions"}),Object(s.jsxs)("div",{className:this.state.showModal?"show":"hide",ref:this.wrapperRef,children:[Object(s.jsx)("span",{className:"close",onClick:this.hideModal,children:" \xd7 "}),Object(s.jsx)("h2",{children:"How to play:"}),Object(s.jsx)("p",{children:'Each turn you are given 3 rolls. Press the "r" key to roll. After the first roll, you are allowed to hold any die you want (or none) before the next roll. Holding a die will keep its value (will not roll with the next roll). You don\'t have to use all three of your rolls. At any time, after the first roll, you may record a score in the category of your choosing, but after your third roll in the turn you must choose a category to record a score in, even if it will result in 0 points scored. Once you record a score in a category, the next turn begins. Once all categories have been recorded, the game is over and your total score is displayed at the bottom of the scorecard.'}),Object(s.jsx)("h2",{children:"Scoring for Categories:"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Aces - Sixes:"}),"  Recieve the sum of all dice that match the category (e.g. if you have three dice that are 3's and record a score for Threes, you would receive 9 points)."]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Bonus:"})," If the total points recorded for Aces through Sixes is greater than 63, you receive 35 points. (this is calculated automatically, no action required)"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Three of a Kind, Four of a Kind, and Five of a Kind:"})," If you have three (Three of a Kind) or four (Four of a Kind) matching dice, you will receive the sum of the matching dice. If you have all five matching diece (Five of a Kind), that is worth 50 points."]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Full House:"})," A full house is having three of a kind AND a pair. (e.g. if your dice are [5, 5, 3, 5, 3] then you have a full house... three 5's and two 3's). This is worth 25 points."]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Small and Large Straights:"})," Straights are runs of consecutive numbers (e.g. 1, 2, 3, 4). A small straight is 4 consecutive numbers (e.g. 2, 3, 4, 5) and is worth 30 points. A large straight is 5 consecutive numbers (e.g. 2, 3, 4, 5, 6) and is worth 40 points."]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Chance:"})," The Chance category is simply the sum of all the dice."]})]})]})}}]),c}(l.Component)),x=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).toggleD1Disabled=function(){"r"===s.state.d1Trigger&&s.state.rollsLeft>0?s.setState({d1Trigger:"nope",d1ButtonText:"Release"}):s.state.rollsLeft>0&&s.setState({d1Trigger:"r",d1ButtonText:"Hold"})},s.toggleD2Disabled=function(){"r"===s.state.d2Trigger&&s.state.rollsLeft>0?s.setState({d2Trigger:"nope",d2ButtonText:"Release"}):s.state.rollsLeft>0&&s.setState({d2Trigger:"r",d2ButtonText:"Hold"})},s.toggleD3Disabled=function(){"r"===s.state.d3Trigger&&s.state.rollsLeft>0?s.setState({d3Trigger:"nope",d3ButtonText:"Release"}):s.state.rollsLeft>0&&s.setState({d3Trigger:"r",d3ButtonText:"Hold"})},s.toggleD4Disabled=function(){"r"===s.state.d4Trigger&&s.state.rollsLeft>0?s.setState({d4Trigger:"nope",d4ButtonText:"Release"}):s.state.rollsLeft>0&&s.setState({d4Trigger:"r",d4ButtonText:"Hold"})},s.toggleD5Disabled=function(){"r"===s.state.d5Trigger&&s.state.rollsLeft>0?s.setState({d5Trigger:"nope",d5ButtonText:"Release"}):s.state.rollsLeft>0&&s.setState({d5Trigger:"r",d5ButtonText:"Hold"})},s.rollCount=function(e){"r"===e.key&&s.setState({rollsLeft:s.state.rollsLeft-1,firstRoll:!1}),0===s.state.rollsLeft&&(document.removeEventListener("keyup",s.rollCount),s.setState({d1Trigger:"nope",d2Trigger:"nope",d3Trigger:"nope",d4Trigger:"nope",d5Trigger:"nope"}))},s.resetDice=function(){document.addEventListener("keyup",s.rollCount),s.setState({rollsLeft:3,d1Trigger:"r",d1ButtonText:"Hold",d2Trigger:"r",d2ButtonText:"Hold",d3Trigger:"r",d3ButtonText:"Hold",d4Trigger:"r",d4ButtonText:"Hold",d5Trigger:"r",d5ButtonText:"Hold",firstRoll:!0})},s.calcAcesScore=function(){for(var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],c=0;c<t.length;c++)1===t[c]&&(e+=t[c]);return console.log("Aces score = ",e),s.setState({acesScore:e},(function(){s.calcBonusScore(),s.calcTotalScore(),s.resetDice()})),e},s.calcTwosScore=function(){for(var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],c=0;c<t.length;c++)2===t[c]&&(e+=t[c]);return console.log("Twos score = ",e),s.setState({twosScore:e},(function(){s.calcBonusScore(),s.calcTotalScore(),s.resetDice()})),e},s.calcThreesScore=function(){for(var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],c=0;c<t.length;c++)3===t[c]&&(e+=t[c]);return console.log("Threes score = ",e),s.setState({threesScore:e},(function(){s.calcBonusScore(),s.calcTotalScore(),s.resetDice()})),e},s.calcFoursScore=function(){for(var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],c=0;c<t.length;c++)4===t[c]&&(e+=t[c]);return console.log("Fours score = ",e),s.setState({foursScore:e},(function(){s.calcBonusScore(),s.calcTotalScore(),s.resetDice()})),e},s.calcFivesScore=function(){for(var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],c=0;c<t.length;c++)5===t[c]&&(e+=t[c]);return console.log("Fives score = ",e),s.setState({fivesScore:e},(function(){s.calcBonusScore(),s.calcTotalScore(),s.resetDice()})),e},s.calcSixesScore=function(){for(var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],c=0;c<t.length;c++)6===t[c]&&(e+=t[c]);return console.log("Sixes score = ",e),s.setState({sixesScore:e},(function(){s.calcBonusScore(),s.calcTotalScore(),s.resetDice()})),e},s.calcBonusScore=function(){var e=[s.state.acesScore,s.state.twosScore,s.state.threesScore,s.state.foursScore,s.state.fivesScore,s.state.sixesScore].reduce(s.sumFunc);console.log("topSum = ",e),s.setState({topSum:e}),e>=63&&s.setState({bonusScore:35},(function(){s.calcTotalScore()}))},s.calcTotalScore=function(){var e=[s.state.acesScore,s.state.twosScore,s.state.threesScore,s.state.foursScore,s.state.fivesScore,s.state.sixesScore,s.state.bonusScore,s.state.threeKindScore,s.state.fourKindScore,s.state.fullHouseScore,s.state.smStrScore,s.state.lgStrScore,s.state.fiveKindScore,s.state.chanceScore].reduce(s.sumFunc);s.setState({totalScore:e})},s.sumFunc=function(e,t){return e+t},s.calcThreeOfKind=function(){for(var e=0,t={},c=0,l=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value];c<l.length;c++){var r=l[c];t[r]=(t[r]||0)+1}for(var a in t)t[a]>=3&&(e=3*a);return console.log("score = ",e),s.setState({threeKindScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.calcFourOfKind=function(){for(var e=0,t={},c=0,l=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value];c<l.length;c++){var r=l[c];t[r]=(t[r]||0)+1}for(var a in t)t[a]>=4&&(e=4*a);return console.log("score = ",e),s.setState({fourKindScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.calcFullHouse=function(){for(var e=0,t={},c=!1,l=!1,r=0,a=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value];r<a.length;r++){var o=a[r];t[o]=(t[o]||0)+1}for(var i in t)3===t[i]&&(c=!0),2===t[i]&&(l=!0);return e=l&&c?25:0,console.log("full house score = ",e),s.setState({fullHouseScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.calcSmStraight=function(){var e=0,t=1,c=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value],l=[];c.sort();for(var r=0;r<c.length;r++)c[r]!==c[r-1]&&l.push(c[r]);for(var a=0;a<l.length;a++)l[a]===l[a+1]-1&&t++;return t>=4&&(e=30),console.log("Sm Straight score = ",e),s.setState({smStrScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.calcLgStraight=function(){var e=0,t=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value];t.sort();for(var c=1,l=0;l<t.length;l++)t[l]===t[l+1]-1&&c++;return 5===c&&(e=40),console.log("Lg Straight score = ",e),s.setState({lgStrScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.calcFiveOfKind=function(){for(var e=0,t={},c=0,l=[s.state.d1Value,s.state.d2Value,s.state.d3Value,s.state.d4Value,s.state.d5Value];c<l.length;c++){var r=l[c];t[r]=(t[r]||0)+1}for(var a in t)5===t[a]&&(e=5*a);return console.log("score = ",e),s.setState({fiveKindScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.calcChanceScore=function(){var e=s.state.d1Value+s.state.d2Value+s.state.d3Value+s.state.d4Value+s.state.d5Value;return console.log("Chance Sum = ",e),s.setState({chanceScore:e},(function(){s.calcTotalScore(),s.resetDice()})),e},s.reload=function(){window.location.reload()},s.state={rollsLeft:3,firstRoll:!0,d1Trigger:"r",d2Trigger:"r",d3Trigger:"r",d4Trigger:"r",d5Trigger:"r",d1ButtonText:"Hold",d2ButtonText:"Hold",d3ButtonText:"Hold",d4ButtonText:"Hold",d5ButtonText:"Hold",d1Value:0,d2Value:0,d3Value:0,d4Value:0,d5Value:0,acesScore:null,twosScore:null,threesScore:null,foursScore:null,fivesScore:null,sixesScore:null,topSum:0,bonusScore:0,threeKindScore:null,fourKindScore:null,fullHouseScore:null,smStrScore:null,lgStrScore:null,fiveKindScore:null,chanceScore:null,totalScore:0},s}return Object(d.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.rollCount)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)("div",{className:"sticky",children:[Object(s.jsx)("div",{children:Object(s.jsx)(S,{})}),Object(s.jsxs)("div",{className:"dice-container",children:[Object(s.jsxs)("h2",{children:["Rolls left: ",this.state.rollsLeft]}),Object(s.jsxs)("div",{className:"Release"===this.state.d1ButtonText?"die held":"die",children:[Object(s.jsx)(f.a,{onRoll:function(t){return e.setState({d1Value:t})},size:"50",triggers:this.state.d1Trigger}),Object(s.jsx)("button",{type:"button",className:this.state.firstRoll?"roll-button hide":"roll-button",onClick:this.toggleD1Disabled,children:this.state.d1ButtonText})]}),Object(s.jsxs)("div",{className:"Release"===this.state.d2ButtonText?"die held":"die",children:[Object(s.jsx)(f.a,{onRoll:function(t){return e.setState({d2Value:t})},size:"50",triggers:this.state.d2Trigger}),Object(s.jsx)("button",{type:"button",className:this.state.firstRoll?"roll-button hide":"roll-button",onClick:this.toggleD2Disabled,children:this.state.d2ButtonText})]}),Object(s.jsxs)("div",{className:"Release"===this.state.d3ButtonText?"die held":"die",children:[Object(s.jsx)(f.a,{onRoll:function(t){return e.setState({d3Value:t})},size:"50",triggers:this.state.d3Trigger}),Object(s.jsx)("button",{type:"button",className:this.state.firstRoll?"roll-button hide":"roll-button",onClick:this.toggleD3Disabled,children:this.state.d3ButtonText})]}),Object(s.jsxs)("div",{className:"Release"===this.state.d4ButtonText?"die held":"die",children:[Object(s.jsx)(f.a,{onRoll:function(t){return e.setState({d4Value:t})},size:"50",triggers:this.state.d4Trigger}),Object(s.jsx)("button",{type:"button",className:this.state.firstRoll?"roll-button hide":"roll-button",onClick:this.toggleD4Disabled,children:this.state.d4ButtonText})]}),Object(s.jsxs)("div",{className:"Release"===this.state.d5ButtonText?"die held":"die",children:[Object(s.jsx)(f.a,{onRoll:function(t){return e.setState({d5Value:t})},size:"50",triggers:this.state.d5Trigger}),Object(s.jsx)("button",{type:"button",className:this.state.firstRoll?"roll-button hide":"roll-button",onClick:this.toggleD5Disabled,children:this.state.d5ButtonText})]})]}),Object(s.jsx)("div",{id:"restart",children:Object(s.jsx)("button",{id:"restart-button",onClick:this.reload,children:"Restart Game"})})]}),Object(s.jsx)("div",{className:"categories-container",children:Object(s.jsx)(g,Object(i.a)({calcAcesScore:this.calcAcesScore,calcTwosScore:this.calcTwosScore,calcThreesScore:this.calcThreesScore,calcFoursScore:this.calcFoursScore,calcFivesScore:this.calcFivesScore,calcSixesScore:this.calcSixesScore,calcThreeOfKind:this.calcThreeOfKind,calcFourOfKind:this.calcFourOfKind,calcFullHouse:this.calcFullHouse,calcSmStraight:this.calcSmStraight,calcLgStraight:this.calcLgStraight,calcFiveOfKind:this.calcFiveOfKind,calcChanceScore:this.calcChanceScore},this.state))})]})}}]),c}(l.Component),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,s=t.getFID,l=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),l(e),r(e),a(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.04bdc144.chunk.js.map